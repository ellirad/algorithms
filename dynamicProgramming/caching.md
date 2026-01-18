You can think about dynamic programming as:
'divide & conqure' + 'caching'
system.

When we talk about dynamic programming we means optimizing our application via caching.
Caching is used for speed up the application.
Caching means easy access to data.
Memoization is a specific form of caching.

It is good practice to keep cache inside the function that do the calculation.
we do this in javascript via 'closure'.

A good example of using caching is 'fibonacci' function.

Ask these questions when you want to know if the problem can be solved with dynamic programming:
1. Can be divide into subproblems?
2. Recursion solution
3. Are there repetitve subproblems?
4. Memoization subproblems