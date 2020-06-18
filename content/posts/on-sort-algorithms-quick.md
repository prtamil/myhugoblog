---
title: "O(nlogn) Sorting Algorithms - QuickSort"
date: 2020-04-07T19:14:44+05:30
categories: ["Algorithms","Python"]
draft: false
---
## Introduction 
This is the series of Sorting Algorithm which has O(nlogn) Average case Complexity.
This algorithm is invented by British Computer Scientist Tony Hoare at 1959.
Quick sort is an example of divide and conquer algorithm.  Mathematical analysis shows that 
   - Average Case O(nlogn)
   - Worst Case O(n^2)
### Basic Algorithm
1. Pick an Element from the array. This element is called as pivot.
2. Partition it based on Pivot
    - values less than pivot will be appended to less list
    - values greater than equal to pivot will be on greater list
3. Recursively apply above steps to lesser array and greater array

### Python Code
```python
def qs(l):
   if not l:
        return []
   else:
        piv = l[0]
        less = [x for x in l      if x < piv]
        more = [x for x in l[1:]  if x >= piv]
        return qs(less) + [piv] + qs(more)
```
### Code Summary
The code is straight forward. 
Last line is crucial. It does recursive of less 
and append current pivot and recursive of more list.

