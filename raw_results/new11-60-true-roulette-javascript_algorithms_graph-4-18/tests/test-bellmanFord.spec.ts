export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _isDirectedH9Rr2y4 = false;
		const _graphie8maCn = new Graph(_isDirectedH9Rr2y4)
		const _returnValuezbJJcaM = await _graphie8maCn.getAllEdges()
		const _returnValuehiSnM6G = -6.70525019252775;
		const _getNeighborsqjJm0Ar = () => { return _returnValuehiSnM6G };
		const _vertexe5bHj8 = {
			"getNeighbors": _getNeighborsqjJm0Ar
	}
		const _returnValueuMkYFrZ = await _graphie8maCn.getNeighbors(_vertexe5bHj8)
		const _returnValuep9jEYjY = {
		
	}
		const _getKeyVCHzAlp = () => { return _returnValuep9jEYjY };
		const _startVertexUUnlgx8 = {
			"getKey": _getKeyVCHzAlp
	}
		const _returnValuezoqygIr = await bellmanFord(_graphie8maCn, _startVertexUUnlgx8)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedZz9p6t = true;
		const _graphOCouPUd = new Graph(_isDirectedZz9p6t)
		const _returnValuewdT6SmC = null;
		const _getKeyqiIUNyT = () => { return _returnValuewdT6SmC };
		const _newVertexwC7bekS = {
			"getKey": _getKeyqiIUNyT
	}
		const _returnValueCfMuLkg = await _graphOCouPUd.addVertex(_newVertexwC7bekS)
		const _returnValueff9fHDb = true;
		const _getKey45XNN1 = () => { return _returnValueff9fHDb };
		const _startVertexnZGtzu2 = {
			"getKey": _getKey45XNN1
	}
		const _returnValuevuvU48h = await bellmanFord(_graphOCouPUd, _startVertexnZGtzu2)
	});
})