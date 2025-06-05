#pragma once
#include "Graph.h"
#include "MazeSolver.h"
#include <vector>
#include <string>

class MazeTests {
public:
    
    static void runAll();

private:

    // Individual test cases
    static void testSimpleMaze();
    static void testMazeWithCycle();
    static void testUnsolvableMaze();
    static void testMazeWithDeadEnd();

    
    static void printPath(const std::vector<std::string>& path);
};
