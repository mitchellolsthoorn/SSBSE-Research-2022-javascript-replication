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
		const _getAllVerticesTzZGNiv = -9.724817703012116;
		const _returnValueAbxrsH0 = undefined;
		const _findEdge0wrqJr = () => { return _returnValueAbxrsH0 };
		const _graphkVHl4Tw = {
			"getAllVertices": _getAllVerticesTzZGNiv,
		"findEdge": _findEdge0wrqJr
	}
		const _returnValueRLH8Rii = {
		
	}
		const _getKeyIiXY8R8 = () => { return _returnValueRLH8Rii };
		const _startVertexlqK0uY8 = {
			"getKey": _getKeyIiXY8R8
	}
		const _returnValuexrYNvAF = await dijkstra(_graphkVHl4Tw, _startVertexlqK0uY8)
	});

	it('test for dijkstra', async () => {
		const _isDirectedh3zskJk = true;
		const _graphomJvLL = new Graph(_isDirectedh3zskJk)
		const _returnValuefeAF0Q = await _graphomJvLL.getWeight()
		const _returnValueNRN8dAA = await _graphomJvLL.getAllEdges()
		const _returnValuev2FEwRf = await _graphomJvLL.getWeight()
		const _returnValueXbiwsOm = null;
		const _getKeyfCCZvGF = () => { return _returnValueXbiwsOm };
		const _startVertexYSVJuoR = {
			"getKey": _getKeyfCCZvGF
	}
		const _returnValueu2psxW = await dijkstra(_graphomJvLL, _startVertexYSVJuoR)
	});

	it('test for dijkstra', async () => {
		const _isDirectedm3jzUhn = undefined;
		const _graphNq3slJ = new Graph(_isDirectedm3jzUhn)
		const _returnValueICNzUn = await _graphNq3slJ.getVerticesIndices()
		const _returnValueudbcLtv = await _graphNq3slJ.reverse()
		const _returnValuee9w64lo = 9.719835872610041;
		const _valueDMEkEBN = () => { return _returnValuee9w64lo };
		const _startVertexPznt71a = new GraphVertex(_valueDMEkEBN)
		const _vertexTYXcw1f = []
		const _returnValuek5MS44h = await _startVertexPznt71a.hasNeighbor(_vertexTYXcw1f)
		const _returnValueTYUHG6H = await _startVertexPznt71a.getEdges()
		const _vertexfOppeRT = undefined;
		const _returnValueeELh1r = await _startVertexPznt71a.findEdge(_vertexfOppeRT)
		const _returnValuey2to1wz = await _startVertexPznt71a.getNeighbors()
		const _vertexukzYZ1k = -8.909508935862851;
		const _returnValuesZSWMC = await _startVertexPznt71a.hasNeighbor(_vertexukzYZ1k)
		const _returnValuexRg07C6 = await dijkstra(_graphNq3slJ, _startVertexPznt71a)
	});
})