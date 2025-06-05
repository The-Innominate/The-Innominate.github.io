# Minimum Spanning Tree Implementation

## Overview
Implementation of Prim's algorithm for finding minimum spanning trees in weighted graphs. This implementation focuses on efficiency and clean code structure.

## Features
- Efficient edge selection using priority queue
- Support for weighted, undirected graphs
- Clear visualization of the MST construction process
- Comprehensive test cases

## Time Complexity
- Overall: O(E log V)
- Space: O(V + E)

## Implementation Details
- Graph representation using adjacency list
- Priority queue for efficient edge selection
- Union-Find data structure for cycle detection

## Usage
```cpp
// Example usage
Graph g;
g.addEdge(0, 1, 4);
g.addEdge(0, 2, 3);
g.addEdge(1, 2, 1);
g.addEdge(1, 3, 2);
g.addEdge(2, 3, 4);

MST mst(g);
mst.findMST();
```

## Author
Cameron Sadusky 