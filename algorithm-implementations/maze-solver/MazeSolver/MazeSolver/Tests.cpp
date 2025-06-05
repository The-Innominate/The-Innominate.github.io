#include "Tests.h"
#include <iostream>

void MazeTests::printPath(const std::vector<std::string>& path) {
    if (path.empty()) {
        std::cout << "Unsolvable." << std::endl;
    }
    else {
        for (const auto& node : path) {
            std::cout << node << " ";
        }
        std::cout << std::endl;
    }
}

void MazeTests::testSimpleMaze() {
    Graph graph;

    graph.addEdge("A", "B", 1);
    graph.addEdge("B", "A", 1);
    graph.addEdge("B", "C", 1);
    graph.addEdge("B", "D", 1);
    graph.addEdge("B", "F", 1);
    graph.addEdge("C", "B", 1);
    graph.addEdge("D", "B", 1);
    graph.addEdge("D", "E", 1);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "D", 1);
    graph.addEdge("E", "F", 1);
    graph.addEdge("F", "B", 1);
    graph.addEdge("F", "D", 1);
    graph.addEdge("F", "E", 1);

    MazeSolver solver;
    auto path = solver.findShortestPath(graph, "A", "E");
    std::cout << "Test Simple Maze (A->E): ";
    printPath(path);
}

void MazeTests::testMazeWithDeadEnd() {
    Graph graph;

    graph.addEdge("A", "B", 1);
    graph.addEdge("B", "A", 1);
    graph.addEdge("B", "C", 1);
    graph.addEdge("C", "B", 1);
    graph.addEdge("C", "D", 1); // Dead end at D
    graph.addEdge("D", "C", 1);

    MazeSolver solver;
    auto path = solver.findShortestPath(graph, "A", "D");
    std::cout << "Test Maze with Dead End (A->D): ";
    printPath(path);
}

void MazeTests::testMazeWithCycle() {
    Graph graph;

    graph.addEdge("A", "B", 1);
    graph.addEdge("B", "C", 1);
    graph.addEdge("C", "A", 1); // Cycle: A->B->C->A
    graph.addEdge("C", "D", 1);

    MazeSolver solver;
    auto path = solver.findShortestPath(graph, "A", "D");
    std::cout << "Test Maze with Cycle (A->D): ";
    printPath(path);
}

void MazeTests::testUnsolvableMaze() {
    Graph graph;

    graph.addEdge("A", "B", 1);
    graph.addEdge("B", "A", 1);
    graph.addEdge("C", "D", 1);
    graph.addEdge("D", "C", 1);

    MazeSolver solver;
    auto path = solver.findShortestPath(graph, "A", "D");
    std::cout << "Test Unsolvable Maze (A->D): ";
    printPath(path);
}

void MazeTests::runAll() {
    testSimpleMaze();
    testMazeWithDeadEnd();
    testMazeWithCycle();
    testUnsolvableMaze();
}
