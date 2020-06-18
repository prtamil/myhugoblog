---
title: "Powersets - Combinatorial Algorithms"
date: 2020-05-18T04:52:31+05:30
categories: ["Algorithms","Python"]
draft: false
---
## Introduction:
The power set of any set S is set of all subsets of S, including empty Set.
For example
```
 S = [x,y,z]
 PowerSet(S) = {{},{x},{y},{z},{x,y},{x,z},{y,z},{x,y,z}}
```
## Generate Powerset Using Recursion.
```python
def PowerSet(S):
    if len(S) == 0:
        return [[]]             # ---(1)
    cs = []
    for x in PowerSet(S[1:]):   # ---(2)
        cs += [x, x+[S[0]]]     # ---(3)
    return cs
  #PowerSet([1,2,3])
  #[[], [1], [2], [2, 1], [3], [3, 1], [3, 2], [3, 2, 1]]
```
## Explanation:
### [1]:
   if length of List is empty then return empty list of list.
This is crucial as for every combinatorial algorithm as the result is list of list
we need to return list of list.

### [2]:
This is recursive Algorithm we need to track as tree.
So we keep reducing the list by one Calling PowerSet(S[1:])
### [3]:
We need to collect the final returned value of recursive function and collect S[0]
As Recursive Tree unfolds we will have proper S[0]. we collect upwards.

## PowerSet using BackTracking
```python
def PowerSet(S):
    res = []
    def inner(S,i,acc):
        nonlocal res  
        if i == len(S):
            res.append(acc[:])
        else:
            acc.append(S[i])
            inner(S, i+1, acc)
            acc.pop()
            inner(S, i+1, acc)
    inner(S,0,[])
    return res
```
## Explanation
Generally Backtracking algorithms have common syntax
``` 
    GlobalList = []
    def BackTrack(L,i,acc):
        if i == len(L):
            add result to GlobalList
        else:
            1. do somethin on acc
            2. Try Recursion with modifed value
            3. Backtrack by doing something, usually reverse of step (1) on acc
            4. Try Recursion with backtraced value on acc

    # Note this function never returns

    call BackTrack(L,0,[])
    Now GlobalList has the results use it.

```

```
# This is Pseudo Code this never executes.
globalList = []
def BacktrackingAlg(List, index, accumulator):
    if index == len(List):
        globalList.append(accumulator[:])
    else:
        # Try Some combination and push to accumulator
        accumulator.append(List[index])
        # Use Recursive Function change something in index
        # Donot modify List it creates Nightmares. Only deal with index
        BackTrackingAlg(List, index+1, accumulator)
        # Now remove previous value in accumulator
        # This backtracks as previous states.
        accumulator.pop()
        # Call Recursive function with backtracked value
        BackTrackingAlg(List, index+1, accumulator)

# Now call the Function
BackTrackingAlg(List,0,[])
# Result will be in globalList 
print(globalList)
```
This kind of logic keeps on recurring in backtracking algorithms
So in our case we don't want global variable so we use inner function
acts as closure keeps tracks the result in outer function local variable.

## Fin.

