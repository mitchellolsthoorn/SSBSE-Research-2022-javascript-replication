export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueZFvNjLf = -4.688843101480825;
		const _getAllVerticesmPUq1jt = () => { return _returnValueZFvNjLf };
		const _findEdgeJbPYVSt = null;
		const _graphLfhNS3i = {
			"getAllVertices": _getAllVerticesmPUq1jt,
		"findEdge": _findEdgeJbPYVSt
	}
		const _returnValuegAAZZsV = await graphBridges(_graphLfhNS3i)
	});

	it('test for graphBridges', async () => {
		const _isDirectedewvVEr = true;
		const _graphhsI7pXQ = new Graph(_isDirectedewvVEr)
		const _arrayValueopSnH6T = false;
		const _arrayValueQvCD9nR = null;
		const _arrayValueeYwbW0V = undefined;
		const _arrayValueGjwVmOv = true;
		const _arrayValuepOJVfBt = true;
		const _returnValuewNojQfd = [_arrayValueopSnH6T, _arrayValueQvCD9nR, _arrayValueeYwbW0V, _arrayValueGjwVmOv, _arrayValuepOJVfBt]
		const _getKeyoQNhgaB = () => { return _returnValuewNojQfd };
		const _newVertexl6A2Lc2 = {
			"getKey": _getKeyoQNhgaB
	}
		const _returnValuevmnshEs = await _graphhsI7pXQ.addVertex(_newVertexl6A2Lc2)
		const _returnValueAwUuZKf = await graphBridges(_graphhsI7pXQ)
	});
})