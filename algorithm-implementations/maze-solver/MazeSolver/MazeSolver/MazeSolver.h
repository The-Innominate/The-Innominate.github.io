#ifndef MAZESOLVER_H
#define MAZESOLVER_H

#include "Graph.h"
#include <vector>
#include <string>

class MazeSolver {
public:
    // Returns a vector of node names representing the shortest path
    std::vector<std::string> findShortestPath(const Graph& graph, const std::string& start, const std::string& end);
};

#endif
