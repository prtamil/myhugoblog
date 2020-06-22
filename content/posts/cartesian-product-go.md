---
title: "Cartesian Product in Go - Combinatorial Algorithms"
date: 2020-05-18T02:30:07+05:30
categories: ["Algorithms","golang"]
draft: false
---
## Introduction:
A cartesian product for two sets A and B, denoted AxB is the set of ordered pairs
```python
A x B = {(a,b) | a belongs A and b belongs to B}.
for ex:
  A = {1,2} B ={3,4}
    AxB = {(1,3),(1,4),(2,3),(2,4)}
```
## Golang Cartesian Product
```golang

package main

import (
    "fmt"
)
//Sample Function for Single List Cartesian product n times
// res := Product([]int{1,2,3},2)  => [1,2,3] x [1,2,3]
func Product0(input []int, n int) [][]int {
    //Make atlease single array else won't go into loop
    prod := make([][]int, 1)
    for i := 1; i <= n; i++ {
        //next Array is stores intermediate results
        next := make([][]int, 0)
        for _, x := range prod {
            for _, y := range input {
                //t = [x+[y]]
                //x = [1]
                //y = 2 
                // t = [1,2]
                t := make([]int, 0)
                t = append(t, x...)
                t = append(t, y)
                //append to next 2d array
                next = append(next, [][]int{t}...)
            }
        }
        //Assign intermediate next to prod so next loop will have new items
        //
        prod = next
    }
    return prod
}


//Product([1,2,3],[4,5,6],2) = > [[1,2,3],[4,5,6],[1,2,3],[4,5,6]]
func Product(n int, input ...[]int) [][]int {
    //append all input array into pools
    // account repeat value (n) so it repeats n times
    pools := make([][]int, 0)
    for i := 1; i <= n; i++ {
        for _, x := range input {
            pools = append(pools, [][]int{x}...)
        }
    }
    prod := make([][]int, 1)
    //go over each and every pool
    for _, pool := range pools {
        next := make([][]int, 0)
        for _, x := range prod {
            for _, y := range pool {
                //x = [1]
                // y = 2
                // t = [1,2]
                t := make([]int, 0)
                t = append(t, x...)
                t = append(t, y)
                next = append(next, [][]int{t}...)
            }
        }
        //make prod = intermediate array next
        prod = next
    }
    return prod
}

func main() {

    f := []int{1, 2, 3}
    s := []int{4, 5, 6}

    res := Product(2, f, s)
    fmt.Println("res -> ", res)

}

```
## Fin.