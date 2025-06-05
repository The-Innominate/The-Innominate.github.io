# Maze Solver Implementation

## Overview
Implementation of Dijkstra's algorithm for solving mazes and finding optimal paths. This project includes both the algorithm implementation and a visualization system.

## Features
- Efficient pathfinding using Dijkstra's algorithm
- Support for weighted and unweighted mazes
- Visual representation of the solving process
- Multiple maze generation algorithms
- Export/import functionality for maze layouts

## Algorithm Details
- Time Complexity: O((V + E) log V)
- Space Complexity: O(V)
- Supports diagonal movement
- Handles multiple start/end points

## Implementation Details
- Grid-based maze representation
- Priority queue for efficient node selection
- Path reconstruction with parent pointers
- Visualization using ASCII or custom renderer

## Usage
```cpp
// Example usage
Maze maze(20, 20);  // 20x20 maze
maze.generate();    // Generate random maze
maze.setStart(0, 0);
maze.setEnd(19, 19);

MazeSolver solver(maze);
Path solution = solver.solve();
solver.visualize(); // Show solving process
```

## Author
Cameron Sadusky 