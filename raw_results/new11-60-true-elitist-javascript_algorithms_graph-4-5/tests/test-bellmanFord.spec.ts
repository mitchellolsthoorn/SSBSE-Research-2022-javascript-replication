export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueCPxlRGJ = undefined;
		const _getAllVerticesFBUtqno = () => { return _returnValueCPxlRGJ };
		const _returnValueprMWc1g = null;
		const _getVertexByKeyo1pZfwW = () => { return _returnValueprMWc1g };
		const _returnValueZm9fTsJ = true;
		const _getNeighborsnbBz0vi = () => { return _returnValueZm9fTsJ };
		const _returnValueQry8OOB = undefined;
		const _findEdgejYRBf0 = () => { return _returnValueQry8OOB };
		const _graphQfPyxeQ = {
			"getAllVertices": _getAllVerticesFBUtqno,
		"getVertexByKey": _getVertexByKeyo1pZfwW,
		"getNeighbors": _getNeighborsnbBz0vi,
		"findEdge": _findEdgejYRBf0
	}
		const _returnValuezhUPBMD = []
		const _getKeyjo00b2x = () => { return _returnValuezhUPBMD };
		const _startVertexSyuGp8T = {
			"getKey": _getKeyjo00b2x
	}
		const _returnValueFHVCqP = await bellmanFord(_graphQfPyxeQ, _startVertexSyuGp8T)
	});

	it('test for bellmanFord', async () => {
		const _returnValuew3rYZie = []
		const _getAllVerticeslk1EzNT = () => { return _returnValuew3rYZie };
		const _getVertexByKeyshOM7Mb = {
		
	}
		const _returnValuea5qdF76 = {
		
	}
		const _arrayValueAWLnl7A = () => { return _returnValuea5qdF76 };
		const _arrayValueK6iL6NE = {
		
	}
		const _arrayValueZ7j7T7g = undefined;
		const _returnValueDfh8au = [_arrayValueAWLnl7A, _arrayValueK6iL6NE, _arrayValueZ7j7T7g]
		const _getNeighborsyVqDxcQ = () => { return _returnValueDfh8au };
		const _returnValueAoCOOb0 = undefined;
		const _returnValueQWbaUGZ = () => { return _returnValueAoCOOb0 };
		const _findEdgeQg2rahZ = () => { return _returnValueQWbaUGZ };
		const _graphU6QYrkC = {
			"getAllVertices": _getAllVerticeslk1EzNT,
		"getVertexByKey": _getVertexByKeyshOM7Mb,
		"getNeighbors": _getNeighborsyVqDxcQ,
		"findEdge": _findEdgeQg2rahZ
	}
		const _returnValuexhjbpPi = undefined;
		const _getKeyb3XeTY = () => { return _returnValuexhjbpPi };
		const _startVertexhiEnXo = {
			"getKey": _getKeyb3XeTY
	}
		const _returnValueAXM36rb = await bellmanFord(_graphU6QYrkC, _startVertexhiEnXo)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedFsozv8u = false;
		const _graphrpN6klj = new Graph(_isDirectedFsozv8u)
		const _returnValuezDlm88o = null;
		const _getNeighborsrDxRqYj = () => { return _returnValuezDlm88o };
		const _vertexicsZKFA = {
			"getNeighbors": _getNeighborsrDxRqYj
	}
		const _returnValueBaoamL = await _graphrpN6klj.getNeighbors(_vertexicsZKFA)
		const _returnValueOBGoow = null;
		const _getKeytfAIisx = () => { return _returnValueOBGoow };
		const _newVertexL7R4XKS = {
			"getKey": _getKeytfAIisx
	}
		const _returnValuexHhbs7R = await _graphrpN6klj.addVertex(_newVertexL7R4XKS)
		const _returnValueklDLJNx = []
		const _getKeyR0j05DP = () => { return _returnValueklDLJNx };
		const _startVertexVOHXX0O = {
			"getKey": _getKeyR0j05DP
	}
		const _returnValueduvmMcx = await bellmanFord(_graphrpN6klj, _startVertexVOHXX0O)
	});
})