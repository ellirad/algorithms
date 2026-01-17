Searching algorithms:
1. Linear search(most methods in js are using linear search like findIndex, find, indexOf) time complexity: o(n)
2. Binary search(it is like tree or graph) time compelexity: o(log n)
3. Depth first search(DFS) used for graph and tree(takes more time)
4. Breadth first search(DFS) used for graph and tree. use to much memory

Some questions about when to use which search/traversal method.

1. If you know a solution is not far from the root of the tree?
Breadth first search

2. If the tree is very deep and solutions are rare:
Breadth first search, because if the tree is so depth it takes lots of time to go deep in the tree

3. If the tree is very wide:
Depth first search

4. If the solutions are frequent but located deep in the tree:
DFS

5. Determining wheter a path exists between two nodes:
DFS

6. Finding the shortes path:
BFS
