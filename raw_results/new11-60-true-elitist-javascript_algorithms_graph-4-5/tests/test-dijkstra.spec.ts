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
		const _returnValuehn3ZyTn = []
		const _getAllVerticescTpYcQT = () => { return _returnValuehn3ZyTn };
		const _arrayValueaL21qbi = true;
		const _arrayValueOAaSEpC = -7.665762869899343;
		const _arrayValuemnCN2hj = false;
		const _returnValuepLjx4wu = [_arrayValueaL21qbi, _arrayValueOAaSEpC, _arrayValuemnCN2hj]
		const _findEdgeYkwC7x6 = () => { return _returnValuepLjx4wu };
		const _graphkg8vkVL = {
			"getAllVertices": _getAllVerticescTpYcQT,
		"findEdge": _findEdgeYkwC7x6
	}
		const _returnValueXAvjzg = 0.8068911514944936;
		const _getKeyLwWdj6o = () => { return _returnValueXAvjzg };
		const _startVertexqTFEZPx = {
			"getKey": _getKeyLwWdj6o
	}
		const _returnValueX5rIOk4 = await dijkstra(_graphkg8vkVL, _startVertexqTFEZPx)
	});

	it('test for dijkstra', async () => {
		const _isDirectedBUu4TV3 = true;
		const _graphlClmcwC = new Graph(_isDirectedBUu4TV3)
		const _returnValuei3qutuN = await _graphlClmcwC.getVerticesIndices()
		const _arrayValuezbMjLxC = {
		
	}
		const _valueGPNL89j = [_arrayValuezbMjLxC]
		const _startVertexWlg4MV = new GraphVertex(_valueGPNL89j)
		const _returnValueuWziq1n = await _startVertexWlg4MV.getNeighbors()
		const _returnValueTlNLL4Z = await _startVertexWlg4MV.getEdges()
		const _returnValueaSJ7gL0 = await dijkstra(_graphlClmcwC, _startVertexWlg4MV)
	});

	it('test for dijkstra', async () => {
		const _isDirectedQaZDoxI = true;
		const _graphJ7m4LQN = new Graph(_isDirectedQaZDoxI)
		const _returnValueKHtA7Xi = undefined;
		const _getKeyKYqTXrN = () => { return _returnValueKHtA7Xi };
		const _startVertexmTkhm1 = {
			"getKey": _getKeyKYqTXrN
	}
		const _arrayValueISrkXvT = "uBMOkIwsI5y2pwTgv4hccw7nmQkG";
		const _arrayValuev0sBfF = -1.1757128521646703;
		const _arrayValuejiTqiiT = "DDE4efAicEVnNGd7EIcSt4cLF4M3hjJsmNNmDribs9hZn4mKIfOYFBOJ";
		const _arrayValuery7UoN = [_arrayValueISrkXvT, _arrayValuev0sBfF, _arrayValuejiTqiiT]
		const _arrayValueI5UAOCO = false;
		const _arrayValuegM7tXN1 = [_arrayValueI5UAOCO]
		const _arrayValueIvx0Y0z = undefined;
		const _endVertexJB0gJiE = [_arrayValuery7UoN, _arrayValuegM7tXN1, _arrayValueIvx0Y0z]
		const _returnValuekXmUPCl = await _graphJ7m4LQN.findEdge(_startVertexmTkhm1, _endVertexJB0gJiE)
		const _returnValueQVvqzZK = await _graphJ7m4LQN.getAdjacencyMatrix()
		const _returnValueapm5TOL = await _graphJ7m4LQN.getAllEdges()
		const _valueYNOQVu5 = true;
		const _startVertexkJcuDhE = new GraphVertex(_valueYNOQVu5)
		const _returnValueTyiDHhQ = false;
		const _edgeFWy0qdX = () => { return _returnValueTyiDHhQ };
		const _returnValue4HdF4A = await _startVertexkJcuDhE.addEdge(_edgeFWy0qdX)
		const _returnValueP5rT3yz = await _startVertexkJcuDhE.getKey()
		const _returnValueIg4dwkp = await _startVertexkJcuDhE.getKey()
		const _returnValueUSICTsv = await _startVertexkJcuDhE.getKey()
		const _returnValueWEiJley = await dijkstra(_graphJ7m4LQN, _startVertexkJcuDhE)
	});
})