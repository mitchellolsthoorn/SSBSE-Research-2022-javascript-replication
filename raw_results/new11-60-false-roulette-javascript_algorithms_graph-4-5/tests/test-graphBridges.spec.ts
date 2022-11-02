export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuefe8M5pA = "RFgKOrpNXcUp";
		const _getAllVerticesu7oEZv = () => { return _returnValuefe8M5pA };
		const _returnValuePJsqAOU = 1.3549300250197973;
		const _returnValuez7dFERc = () => { return _returnValuePJsqAOU };
		const _findEdgeiKqJMkB = () => { return _returnValuez7dFERc };
		const _graphuyWj1q = {
			"getAllVertices": _getAllVerticesu7oEZv,
		"findEdge": _findEdgeiKqJMkB
	}
		const _returnValueNKP1EmT = await graphBridges(_graphuyWj1q)
	});

	it('test for graphBridges', async () => {
		const _isDirectedR6q6YB = false;
		const _graphFv1479f = new Graph(_isDirectedR6q6YB)
		const _returnValueGmcgjQA = await _graphFv1479f.getAdjacencyMatrix()
		const _returnValueNi6CoK = false;
		const _getKeypceFt5k = () => { return _returnValueNi6CoK };
		const _newVertexS8LEooO = {
			"getKey": _getKeypceFt5k
	}
		const _returnValueT5f56zq = await _graphFv1479f.addVertex(_newVertexS8LEooO)
		const _returnValueC4kJ2ra = await graphBridges(_graphFv1479f)
	});
})