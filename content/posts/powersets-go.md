---
title: "Powersets in GoLang- Combinatorial Algorithms"
date: 2020-05-18T04:52:31+05:30
categories: ["Algorithms","golang"]
draft: false
---
## Introduction:
The power set of any set S is set of all subsets of S, including empty Set.
For example
```
 S = [x,y,z]
 PowerSet(S) = {{},{x},{y},{z},{x,y},{x,z},{y,z},{x,y,z}}
```
## Golang Power Set using Combination algorithms
```golang

package main

import (
    "fmt"
)

func Combinations(L []int, r int) [][]int {
    if r == 1 {
        temp := make([][]int, 0)
        for _, rr := range L {
            t := make([]int, 0)
            t = append(t, rr)
            temp = append(temp, [][]int{t}...)
        }
        return temp
    } else {
        res := make([][]int, 0)
        for i := 0; i < len(L); i++ {
            perms := make([]int, 0)
            perms = append(perms, L[:i]...)
            for _, x := range Combinations(perms, r-1) {
                t := append(x, L[i])
                res = append(res, [][]int{t}...)
            }
        }
        return res
    }
}

func PowerSet(L []int) [][]int {
    res := make([][]int, 0)
    for i := 0; i <= len(L); i++ {
        x := Combinations(L, i)
        res = append(res, x...)
    }
    return res

}
func main() {
    data := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    res := PowerSet(data)
    fmt.Println(len(res))
}
```
