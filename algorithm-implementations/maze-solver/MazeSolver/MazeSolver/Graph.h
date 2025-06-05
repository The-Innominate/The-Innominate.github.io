#ifndef GRAPH_H
#define GRAPH_H

#include <string>
#include <unordered_map>
#include <vector>
#include <limits>

struct Edge {
    std::string destination;
    int weight;
};

class Graph {
public:
    void addEdge(const std::string& from, const std::string& to, int weight);
    const std::unordered_map<std::string, std::vector<Edge>>& getAdjacencyList() const;

private:
    std::unordered_map<std::string, std::vector<Edge>> adjacencyList;
};

#endif
#pragma once
