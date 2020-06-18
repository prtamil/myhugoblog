---
title: "O(nlogn) Sorting Algorithms - MergeSort"
date: 2020-04-08T19:14:44+05:30
categories: ["Algorithms","Python"]
draft: false
---
## Introduction Merge Sort
Merge Sort is an efficient, general-purpose, comparison based sorting algorithm.  Merge sort is a example of divide and conquer algorithm. This algorithm is invented none other than the founding figure of the Computer science John Von Neumann. 
### Performance
   - Worst case O(n log n)
   - Best Case O(n log n) sometimes O(n)
   - Average case O(n log n)
### Algorithm
###### Merge List
  1. Compare each element of two lists and append to the merged list
  2. Find remaining elements in list1 and append to merged list
  3. Find remaining elements in list2 and append to merged list
###### Merge Sort
  1. Find mid element
  2. First list =  list[start:mid] Apply Recursively
  3. Second List = list[mid:end]  Apply Recursively
  4. Merge First and Second List

### Python Code
```python
def merge(lst1,lst2):
    i = j = 0
    s = []
    while i < len(lst1) and j < len(lst2):
        if lst1[i] <= lst2[j]:
            s.append(lst1[i])
            i += 1
        else:
            s.append(lst2[j])
            j += 1
    # Collect the remaining
    s.extend(lst1[i:])
    s.extend(lst2[j:])
    return s
 
def mergesort(lst):
    if len(lst) < 2:
        return lst
    mid = len(lst) // 2
    first = mergesort(lst[:mid])
    last = mergesort(lst[mid:])
    return merge(first,last)
 
```
The code is straight forward. Merge function merges two list in ascending order. it will compare two lists and merge into single list.
If both lists length are not same it will compare and append up-to common length and it will merge rest into common lists.

MergeSort function splits the lists by middle and doing that recursively and finally merges first half and second half.