---
title: "Cartesian Product - Combinatorial Algorithms"
date: 2020-05-18T02:30:07+05:30
categories: ["Algorithms","Python"]
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

### Python Code:
#### Simple Example:
```python
A = [1,2,3]
B = [3,4,5]
product = [[a,b] for a in A for b in B]
```
This code gives cartesian product on two Lists
#### itertools Product:
Python itertools module has product function has following signature.
```python
itertools.product(*iterables, repeat=1)
iterables => List of sets
repeat => Specifiy Num of iterations 
   for example:
      A = [1,2]
      B = [3,4]
      res = list(itertools.product(A,B))
      #res = [(1,3),(1,4),(2,3),(2,4)]

the meaning of repeat

      A = [1,2,3]
      B = [4,5,6]
      itertools.product(A,repeat=4) = itertools.product(A,A,A,A)
      itertools.product(A,B,repeat=4) = itertools.product(A,B,A,B,A,B,A,B)
```
How itertools implemented in Standard Library
```python
def product(*args, repeat=1):
    pools = [tuple(pool) for pool in args] * repeat
    result = [[]]
    for pool in pools:
        result = [x+[y] for x in result for y in pool]
    for prod in result:
        yield tuple(prod)
```
Lots of things packed in the above small code.
#### Detail explanation of itertool.product implementation:
```python
def product(*args,r=1):
    pools = [tuple(pool) for pool in args] * r            # ---[1]
    result = [[]] 
    for pool in pools:                                    # ---[2]
        result = [x+[y] for x in result for y in pool]
    for prod in result:                                   # ---[3]
        yield tuple(prod)
```
#### [1]:
  it takes arguments as list of lists and convert into tuple of pools 
  and it multiples by repeat
  for Example:
```python
  if:
    A = [1,2]
    B = [3,4]
    repeat = 2 
  pools = [(1,2),(3,4)] * repeat
        = [(1,2),(3,4),(1,2),(3,4)]
```
#### [2]:
  This second part is tricky to understand it has lots of things going on simple two lines of code.
  1. We need to construct empty list of list. because the results are always list of lists.
  ```python
     result = [[]]
  ```
  2. 3 loops
  ```python
     #assume we have pools
     pools = [(1,2),(3,4)]
     result = [[]]
     for pool in pools:
        result = [x+[y] for x in result for y in pool]
        # this line is so complex it has hidden intermediate array.
        # this is hardest code i cracked. 
        # it took more than 2 days to crack the code.

    # The above loop can be simply written like
    pools = [(1,2),(3,4)]
    result = [[]]
    for pool in pools:
        res = []    # Temporary array
        for x in result:
            for y in pool:
                res.append(x+[y])
        result = res #self updating array in for loop :(
    # This code is same code as above 
    # Lord this was difficult to debug :( May be im not worthy enough sigh...
  ```
#### [3].
   Return items convert from list of list to list of tuple.

#### Simplified Code.
```python
def product(*args, repeat=1):
    pools = [tuple(pool) for pool in args] * repeat
    result = [[]]
    for pool in pools:
        res = []
        for x in result:
            for y in pool:
                res.append(x+[y])
        result = res
    for prod in result:
        yield tuple(prod)
```

### Verdict:
     Python may look simple but it can be more complex and hidden magic.

### Lessons Learned
In-order to convert from list comprehension to loops we need to introduce temporary array
```python
     #1.
       res = [x for x in range(1,6)]
       #loop
       r = []
       for x in range(1,6):
           r.append(x)
       res = r

     #2.
       res = [[x,y] for x in range(1,6) for y in range(1,6)]
       #loop
       r = []
       for x in range(1,6):
           for y in range(1,6):
               r.append([x,y])
       res = r

     #3.
       for pool in pools:
          res = [x+[y] for x in res for y in pool]
       #loop
       for pool in pools:
          r = []
          for x in res:
             for y in pool:
                 r.append(x+[y])
          res = r
```
### Fin.
