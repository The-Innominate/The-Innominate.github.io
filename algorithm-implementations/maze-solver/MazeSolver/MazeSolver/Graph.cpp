#include "Graph.h"


// O(1) average because it just appends
void Graph::addEdge(const std::string& source, const std::string& destination, int weight) {
    adjacencyList[source].push_back({ destination, weight });
}

/*
Pseudo code for 'getAdjacencyList'
----------------------------------
function getAdjacencyList():
    return the adjacencyList member variable
end function

This simply returns the internal graph structure so
other classes (like MazeSolver) can use it directly.

Big-O: O(1) - just returns reference
----------------------------------
*/

const std::unordered_map<std::string, std::vector<Edge>>& Graph::getAdjacencyList() const {
    return adjacencyList;
}
