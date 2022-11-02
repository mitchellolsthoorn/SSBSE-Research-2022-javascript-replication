export {}
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuers2bwpJ = false;
		const _getAllVerticesHYONVRk = () => { return _returnValuers2bwpJ };
		const _returnValueCcSWJ0F = null;
		const _getVertexByKeygr1sZRV = () => { return _returnValueCcSWJ0F };
		const _returnValueu9pIzRw = undefined;
		const _getNeighborsyHRDmAu = () => { return _returnValueu9pIzRw };
		const _returnValueciiitBx = 9.545392561222332;
		const _findEdgeBMO7hKY = () => { return _returnValueciiitBx };
		const _graphTZRD75 = {
			"getAllVertices": _getAllVerticesHYONVRk,
		"getVertexByKey": _getVertexByKeygr1sZRV,
		"getNeighbors": _getNeighborsyHRDmAu,
		"findEdge": _findEdgeBMO7hKY
	}
		const _valueneDnl0J = null;
		const _startVertexRxCdePC = new GraphVertex(_valueneDnl0J)
		const _returnValueKdmI9Zt = await _startVertexRxCdePC.deleteAllEdges()
		const _returnValueusvCZwc = await _startVertexRxCdePC.getDegree()
		const _returnValueGbD1aEi = await _startVertexRxCdePC.deleteAllEdges()
		const _vertexudupwKO = {
		
	}
		const _returnValueMJoxZCa = await _startVertexRxCdePC.findEdge(_vertexudupwKO)
		const _vertexTmisYpS = {
		
	}
		const _returnValuevZZZl9R = await _startVertexRxCdePC.hasNeighbor(_vertexTmisYpS)
		const _returnValuemWJ4Awt = await bellmanFord(_graphTZRD75, _startVertexRxCdePC)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedzKDZM1T = false;
		const _graphV71hzm3 = new Graph(_isDirectedzKDZM1T)
		const _returnValuecFPQVBu = await _graphV71hzm3.getAllVertices()
		const _returnValueH6cIDnX = await _graphV71hzm3.getVerticesIndices()
		const _arrayValuewQRhdO0 = null;
		const _returnValueapHQqhQ = [_arrayValuewQRhdO0]
		const _getKeyUv34dJo = () => { return _returnValueapHQqhQ };
		const _startVertexwABw2mU = {
			"getKey": _getKeyUv34dJo
	}
		const _returnValueRmaSiBy = await bellmanFord(_graphV71hzm3, _startVertexwABw2mU)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedKdMKHYj = false;
		const _graphzc6wZNX = new Graph(_isDirectedKdMKHYj)
		const _returnValueyYr5Tfu = await _graphzc6wZNX.getWeight()
		const _returnValue26HErI = await _graphzc6wZNX.getAllEdges()
		const _returnValue0EExrC = await _graphzc6wZNX.reverse()
		const _returnValueJFsxl6k = "P4S1eiLQxQr";
		const _getKeymCccysH = () => { return _returnValueJFsxl6k };
		const _newVertexWtez59M = {
			"getKey": _getKeymCccysH
	}
		const _returnValuegvUPxuD = await _graphzc6wZNX.addVertex(_newVertexWtez59M)
		const _returnValuenl77jSi = 4.5141536675285785;
		const _getKeysEUVZiD = () => { return _returnValuenl77jSi };
		const _startVertext4YJvCO = {
			"getKey": _getKeysEUVZiD
	}
		const _returnValueG3t78IY = await bellmanFord(_graphzc6wZNX, _startVertext4YJvCO)
	});
})