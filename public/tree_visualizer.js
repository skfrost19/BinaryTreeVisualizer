function reset() {
    document.getElementById("node").value = "";
    document.getElementById("edges").value = "";
    document.getElementById("directed").checked = true;
    document.getElementById("undirected").checked = false;
    document.getElementById("mynetwork").innerHTML = "";
}

function get_processed_data(nodes, edges) {
    var nodesArray = [];
    var edgesArray = [];

    // create a dictionary with nodes as key and id (starts from 1 as values)
    var nodesDict = {};
    for (var i = 0; i < nodes.length; i++) {
        nodesDict[nodes[i]] = i + 1;
    }

    var i;
    for (i = 0; i < nodes.length; i++) {
        nodesArray.push({ id: i + 1, label: nodes[i] });
    }
    for (i = 0; i < edges.length; i++) {
        var edge = edges[i].split("->");
        edgesArray.push({ from: nodesDict[edge[0]], to: nodesDict[edge[1]] });
    }
    var data = {
        nodes: nodesArray,
        edges: edgesArray,
    };
    return data;
}
