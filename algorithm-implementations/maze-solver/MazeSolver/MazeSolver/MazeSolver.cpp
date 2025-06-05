#include "MazeSolver.h"
#include <queue>
#include <unordered_map>
#include <limits>
#include <algorithm> // for reverse traversal

// Uses Dijkstra's algorithm to find shortest path from start to end
// Big-O: O(E log V) because each edge is processed and priority queue operations take log V
std::vector<std::string> MazeSolver::findShortestPath(const Graph& graph, const std::string& start, const std::string& end) {
    auto adjacencyList = graph.getAdjacencyList();

    // Stores pairs of (distance, node) for the priority queue
    std::priority_queue<
        std::pair<int, std::string>,
        std::vector<std::pair<int, std::string>>,
        std::greater<>> minHeap;

    std::unordered_map<std::string, int> distances;
    std::unordered_map<std::string, std::string> previous;

    for (const auto& pair : adjacencyList) {
        distances[pair.first] = std::numeric_limits<int>::max();
    }

    distances[start] = 0;
    minHeap.push({ 0, start });

    while (!minHeap.empty()) {
        auto current = minHeap.top();
        int currentDistance = current.first;
        std::string currentNode = current.second;
        minHeap.pop();

        if (currentNode == end) break;

        for (const Edge& edge : adjacencyList.at(currentNode)) {
            int newDist = currentDistance + edge.weight;

            if (newDist < distances[edge.destination]) {
                distances[edge.destination] = newDist;
                previous[edge.destination] = currentNode;

                minHeap.push({ newDist, edge.destination });
            }
        }
    }

    // Reconstruct the path by walking backwards from end to start
    std::vector<std::string> path;
    std::string current = end;

    if (previous.find(current) == previous.end() && current != start) {
        return {};
    }

    while (current != start) {
        path.push_back(current);
        current = previous[current];
    }

    path.push_back(start);

    std::reverse(path.begin(), path.end());
    return path;
}
