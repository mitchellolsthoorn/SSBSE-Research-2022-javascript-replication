export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphdLvD3W = "9l3r4A5kCjqj8uxmsiDTVRbDyvfElDLv89GfD75TMmNCo8pvtREQsukv4VsUpTzLidw3J1ugjvFtLNx91naVU687bqnOz5Cr9";
		const _returnValueskcnu8t = false;
		const _getKeyZqjLfr4 = () => { return _returnValueskcnu8t };
		const _startVertexv2VYUHO = {
			"getKey": _getKeyZqjLfr4
	}
		const _returnValueXmhwBNn = await dijkstra(_graphdLvD3W, _startVertexv2VYUHO)
	});

	it('test for dijkstra', async () => {
		const _isDirectediCjiWXX = true;
		const _graphvxbyfKO = new Graph(_isDirectediCjiWXX)
		const _returnValuePDA0bwb = await _graphvxbyfKO.getVerticesIndices()
		const _returnValuewhCDJoi = "RIJYOVYVGgLNuYN8WkTOzNAUEsyyszH1RKki7vib";
		const _getKeyqKsL78j = () => { return _returnValuewhCDJoi };
		const _startVertexFelkQMl = {
			"getKey": _getKeyqKsL78j
	}
		const _returnValueNkwcShX = await dijkstra(_graphvxbyfKO, _startVertexFelkQMl)
	});

	it('test for dijkstra', async () => {
		const _isDirectedWpcpJNU = true;
		const _graph8ayGJe = new Graph(_isDirectedWpcpJNU)
		const _returnValueivx83VK = await _graph8ayGJe.getWeight()
		const _returnValuec04yz1p = await _graph8ayGJe.getAdjacencyMatrix()
		const _valuejNL9z58 = null;
		const _startVertexquUNu6 = new GraphVertex(_valuejNL9z58)
		const _returnValuezUTUVLO = undefined;
		const _callbackfC8w4oD = () => { return _returnValuezUTUVLO };
		const _returnValueqcyUaG = await _startVertexquUNu6.toString(_callbackfC8w4oD)
		const _returnValueCg8KBsZ = await _startVertexquUNu6.deleteAllEdges()
		const _returnValueuehTmvb = await dijkstra(_graph8ayGJe, _startVertexquUNu6)
	});
})