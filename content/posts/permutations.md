---
title: "Permutations and Combinations - Implementations"
date: 2020-05-28T22:29:33+05:30
categories: ["Algorithms","Python","Golang"]
draft: false
---
## Introduction:
For Basic Overview of Permutations and Combinations
[Refer to Permutations and Combinations Overview]( {{<ref "permcomb.md" >}} )
## Python Permutation with BackTracking
Basic Backtracking algorithm has following structure.
```
   def BackTrack(L,start,end):
        if start == end:
            update globalresult variable
        else:
            1. Do something with L
            BackTrack(L,start+1,end)
            2. Undo the operation with L
            BackTrack(L,start+1,end)
            3. ,,, so on
```
So Permutation Algorithms for Backtracking
```python
def Permutations(L):
    result = []     
    def perm(L, start, end): # backtrack function never returns it updates the results outer scope variables 
        if start == end:
            res.append(L[:])
        else:
            for i in range(start,end):
                L[i], L[start] = L[start],L[i]    # Do
                perm(L, start+1, end)             # Process
                L[i], L[start] = L[start], L[i]   # Undo
    perm(L, 0, len(L))  # backtrack function is a mutable function
    return res   # return the captured result
```
```python
 Permutations([1,2]) 
 # [[1,2],[2,1]]
 ```

 ## Permutation Algorithm with Lazy (Yield version)

Permutation Algorithm with Select r elements from n elements

```python
def Permutations(L,r):
    if r == 1:
        for x in L:
            yield [x]
    else:
        for i in range(len(L)):
            for x in Permutations(L[:i]+L[i+1:],r-1): #recursive
                yield [L[i]]+x
```
```python
L = [1,2,3]
r = 2
# from len(L) items arrange 2 items
res = list(Permutations([1,2,3],2))
# [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]
```
## Permutation Algorithm using Normal lists:
```python
def Permutations(L,r):
    if r == 1:
        return [[x] for x in L] #Always list of lists
    else:
        res = []
        for i in range(len(L)):
            res += [ [L[i]]+x  for x in Permutations(L[:i]+L[i+1:], r-1)]
        return res
```
```python
L = [1,2,3]
r = 2
# from len(L) items arrange 2 items
res = Permutations([1,2,3],2)
# [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]
```
## Combinational Algorithm using Lazy(Yield)
This Combinational Algorithm gives without repetition Combinations.
```python
def Combinations(L,r):
    if r == 1:
        for x in L:
            yield [x]
    else:
        for i in range(len(L)):
            for x in Combinations(L[:i], r-1): #recursive
                yield [L[i]]+x
```
```python
L = [1,2,3]
r = 2
# from len(L) items choose 2 items
res = list(Combinational([1,2,3],2))
# [ (2,1), (3,1), (3,2)]  #Look ma no repetitions
```
## Combinational Algorithm using Normal lists:
```python
def Combinations(L,r):
    if r == 1:
        return [[x] for x in L] #Always list of lists
    else:
        res = []
        for i in range(len(L)):
            res += [ [L[i]]+x  for x in Combinations(L[:i], r-1)] #simple change dont add L[i+1:] to change permutation to combination
        return res
```
```python
L = [1,2,3]
r = 2
# from len(L) items choose 2 items
res = Combinational([1,2,3],2)
# [ (2,1), (3,1), (3,2)] 
```
## Golang Permutations with Backtracking
```golang
package main                                                          

import (
    "fmt"
)

func Permutations(L []int) [][]int {
    res := make([][]int, 0) 
    //Pass 2d Array as Reference
    perm(L, 0, len(L), &res)
    return res
}

//Inner function takes 2dArray Pointer
func perm(L []int, s, e int, acc *[][]int) {
    if s == e {
        //Make tempory slice to hold the Values from L
        temp := make([]int, 0)
        temp = append(temp, L...)
        //Append to 2d Slice pointer
        *acc = append(*acc, [][]int{temp}...)
    } else {
        //Backtracking looop
        for i := s; i < e; i++ {
            L[i], L[s] = L[s], L[i]
            perm(L, s+1, e, acc)
            L[i], L[s] = L[s], L[i]
        }
    }
}
func main() {
    res := Permutations([]int{1, 2, 3, 4, 5})
    fmt.Println(res)
}
```
## Golang Permutations using Slices
```golang
package main

import (
    "fmt"
)

func Permutations(L []int, r int) [][]int {
    if r == 1 {
        //Convert every item in L to List and
        //Append it to List of List
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
            //Create List Without L[i] element
            perms := make([]int, 0)
            perms = append(perms, L[:i]...)
            perms = append(perms, L[i+1:]...)
            //Call recursively to Permutations
            for _, x := range Permutations(perms, r-1) {
                t := append(x, L[i])
                res = append(res, [][]int{t}...)
            }
        }
        return res
    }
}
func main() {
    res := Permutations([]int{1, 2, 3, 4}, 2)
    fmt.Println(res, len(res))

}
```
## Golang Combinations using Slices
```golang
package main

import (
    "fmt"
)

func Combinations(L []int, r int) [][]int {
    if r == 1 {
        //Convert every item in L to List and
        //Append it to List of List
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
            //Take only elements till i 
            // remember we do not care about position 
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
func main() {
    res := Combinations([]int{1, 2, 3, 4}, 3)
    fmt.Println(res, len(res))

}
```
## Fin.