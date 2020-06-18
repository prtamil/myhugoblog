---
title: "O(nlogn) Sorting Algorithms - HeapSort"
date: 2020-05-08T19:14:44+05:30
categories: ["Algorithms","Python"]
draft: false
---
## Introduction Heap Sort
Heapsort is a comparison based sorting algorithm. It is invented by JWJ. Williams in 1964. Invention of heapsort also responsible for inventing Heap datastructure. 
### Analysis
    - Worst Case O(n log n)
    - Best Case O(n log n) , O(n) sometimes using equal keys
    - Average Case O(n log n)

### Algorithm.
In order to perform Heapsort we need to have heap datastructure. 
1. Push the elements into heap
2. pop the elements from heap and collect it
3. The collected list will have sorted elements.
This algorithm assumes you already have heap data structure. 
### Python Code
Luckily python has heap datastructure inbuilt in heapq package.
all you need to do is import heapq.
```python
import heapq

def HeapSort(lst):
    heap = []
    res = []
    for x in lst:                     # --- (1)
        heapq.heappush(h,x)
    for i in range(len(h)):           # --- (2)
        res.append(heapq.heappop(h))
    return res
```
### Code Summary.
It is the easiest one.
1. Push the elements into heap 
2. Collect the elements from heap by popping from heap.