module.exports = function(RED) {
    function ChartNode(config) {
        var node = this;

        // create node in Node-RED
        RED.nodes.createNode(this, config);

        // which group are we rendering this widget
        var group = RED.nodes.getNode(config.group);

        // inform the dashboard UI that we are adding this node
        group.register(node, config)
    }

    RED.nodes.registerType("ui-chart", ChartNode);
};