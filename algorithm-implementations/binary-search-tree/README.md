# Binary Search Tree Implementation

## Overview
A generic Binary Search Tree implementation with balanced operations and comprehensive functionality. This implementation includes both basic and advanced BST operations.

## Features
- Generic template implementation
- Self-balancing operations
- Comprehensive traversal methods
- Memory-efficient node structure
- Thread-safe operations

## Operations
- Insert: O(log n)
- Delete: O(log n)
- Search: O(log n)
- Traversal: O(n)

## Implementation Details
- Template-based design for type flexibility
- Smart pointer management for memory safety
- Iterator support for STL compatibility
- Exception handling for error cases

## Usage
```cpp
// Example usage
BST<int> tree;
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(9);

// In-order traversal
for (const auto& value : tree) {
    std::cout << value << " ";
}
```

## Author
Cameron Sadusky 