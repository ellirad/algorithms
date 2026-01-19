Tree is a data structure. There are diffrenet tree. one of them is 'Binary tree'.

Binary tree specification:
1. Each node can have two children, not more.
2. Each child can only have one parent.

There is two types of binary tree: Perfect Binary tree and Full Binary tree

- In perfect binary tree the sum of bottom nodes are equal to parents of them plus one.

      *
    *   *
   * * * *

- Full binary tree:
    *
  *   *
     * *
    * * 

Binary search tree are great for searching porpuse. they are better than hash tables.
Rules:
1. All child nodes in the tree to the right of the root node must be grater than the current node. means if I keep going to the right the value of nodes constantly increase.
2. The node could have at max two children
- Binary Search tree methods:
- Lookup: O(log N)
- Inset: O(log N)
- Delete: O(log N)

The height of perfect binary tree is how many level it has.
We can calculate the nodes of binary tree via:
    (2 ^ h) - 1

Log n simply means based on the height, the maximum number of decisions is going to be: O(log n)

log 100 = 2 or 10 ^ 2 = 100 or 10 * 10 = 100
ex: log 7 = 3.445 