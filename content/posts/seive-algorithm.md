---
title: "Seive Algorithm to generate PrimeNumbers"
date: 2020-04-07T16:00:32+05:30
categories: ["Algorithms","Python","CommonLisp"]
draft: false
---
## Sieve of Eratosthenes
The Sieve of Erathosthenes is an ancient algorithms to find all 
prime numbers up to any given limit. It has complexity of O(n log log n) 
### How the Algorithm Works
1. Create a list of consecutive integers from 2 to n (2,3,4,5...n)
2. Start with 2 strike out 2s multiplicants (4,6,8,10,...,n)
3. Continue till N 
4. Go thru the List and collect which is not striked out
The final elements not striked out is the list of prime numbers

### Python Code
```python
def seive(n):
    multiples = set()                       # ---(2)
    for i in range(2,n+1):                  # ---(1)
        if i not in multiples:
            yield i                         # ---(3)
        multiples.update(range(i*i,n+1,i))  # ---(2)


if __name__ == '__main__':
   print(list(seive(10000000)))
```
### Code in Detail
1. Go over range of consecutive elements
2. Strike out Multiples
   - we create set in python to keep track of multiples
   - for every iteration for example take number 2 
   - we update 2s multiples in the set using
    ``` python
        multiples.update(range(2*2,n+1,2))
    ```
   - we use range to calculate 2s multiplication
   ``` python
        range(4,n+1,2)
   ```
   - range will return all (4,6,8,10,....n) items
3. Check the item not available in multiples set that should be prime number

### CommonLisp Code
```lisp
(defun seive-of-erotheses(n)
  ; --- (1)
  (let ((bit-array (make-array (1+ n) :element-type 'bit :initial-element 0))) 
    (loop for i from 2 to n
          when (zerop (bit bit-array i))
          collect i  ; --- (3)
          and do
          (loop for j from (expt i 2) to n by i     ; --- (2)
                do (setf (bit bit-array j) 1)))))
```
### Code in Detail
1. We create Bit Array in CommonLisp its single bit array its efficient on space
2. Update multiples in bit array
   The inner loop does this using toggling bit on the multiples position
3. Collect it just check if bit is off else reject it
