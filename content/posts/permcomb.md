---
title: "Permutation and Combination Overview"
date: 2020-06-18T07:11:09+05:30
categories: ["Algorithms","Python"]
draft: false
---
## Introduction:
### Permutation:
- Can be mentioned as Various possible way to arrange the collection where order does matter.
- It is positional based arrangement.
- For ex :
    - it considers ```[1,2] and [2,1]``` are **different**.
    - and it keeps **both** in the result.
- From n elements we pick r elements for permutation 
- P(n,r) = factorial(n)/factorial(r)
- P(n,r) = n!/r!

### Combination:

- Selection of Items from collection where order does not matter.
- We can select r elements from collection of n elements where order does not matter
- for ex : 
   - it considers ```[1,2] and [2,1]``` are  **same**
   - and keeps only one thing either [1,2] or [2,1] **not both**
- Gives nCr
- C(n,r) = factorial(n) / (factorial(r) * factorial(n-r))
- C(n,r) = n! / r! * (n-r)!

### Variants of Permutation and Combinations. There are two variants.
- Without Repetition
- With Repetition
Both Permutation and Combinations has these variants.

### What does Repetition Means
- **With Repetition**
   - Adding same elements into items of list
   - for Example with repetition permutation
     - ```L = [1,2] ```
     -  ``` res =  [(1,1),(2,2),(1,2),(2,1)] ```
   - With repetition **adds** ```[(1,1),(2,2)]``` Which are items made with same elements
- **Without Repetition**
   - removing items made of same elements from the list
   - for Example Without repetition permutation
     - ```L = [1,2] ```
     -  ``` res =  [(1,2),(2,1)] ```
   - Without repetition **removes** ```[(1,1),(2,2)]``` Which are items made with same elements .

   
### Python Itertools (Permutation and Combination):
- Permutation With Repetition  : ```itertools.product```
- Permutation Without Repetition : ```itertools.permutations```
- Combination With Repetition : ```itertools.combinations_with_replacement```
- Combination Without Repetition : ```itertools.combinations```

### Python Itertools Permutation, Combination, Product Usage
```python
from itertools import product, permutation, combination, combination_with_replacement

s = [1,2], r = 2
# from s pick r 
list(product(s,2)) # 1. includes items made of same elements, order does matter.
list(permutation(s,2)) # 2. no items are made of same elements, order does matter.
list(combination_with_replacement(s,2)) # 3. includes items made of same elements, order does not matter
list(combination(s,2)) # 4. no items are made of same elements, order does not matter.

```
## Fin.