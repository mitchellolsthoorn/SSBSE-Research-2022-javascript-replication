export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuexifG7Rg = null;
		const _getAllVerticesjtDoxg = () => { return _returnValuexifG7Rg };
		const _returnValuevUWxHfC = {
		
	}
		const _getAllEdgesIVyEtY1 = () => { return _returnValuevUWxHfC };
		const _graphKAFr0u8 = {
			"getAllVertices": _getAllVerticesjtDoxg,
		"getAllEdges": _getAllEdgesIVyEtY1
	}
		const _returnValueHSaAeFQ = await detectUndirectedCycleUsingDisjointSet(_graphKAFr0u8)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedq5y4KFV = false;
		const _graphyS2QOm = new Graph(_isDirectedq5y4KFV)
		const _returnValuejeuZKD5 = await _graphyS2QOm.getAdjacencyMatrix()
		const _returnValueqpwnZFf = await _graphyS2QOm.getVerticesIndices()
		const _vertexKeyjuinnEq = false;
		const _returnValueRiYDZa1 = await _graphyS2QOm.getVertexByKey(_vertexKeyjuinnEq)
		const _returnValuecVt7qJ9 = await _graphyS2QOm.getAllVertices()
		const _returnValue6yaMn6 = await detectUndirectedCycleUsingDisjointSet(_graphyS2QOm)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueAc9ysre = []
		const _getAllVerticesW7OAVR1 = () => { return _returnValueAc9ysre };
		const _arrayValueLs4FfM2 = 5.379374709899551;
		const _arrayValueO5kUQV = [_arrayValueLs4FfM2]
		const _arrayValueq1RFFZn = 9.958101576026046;
		const _returnValueMEhFElv = [_arrayValueO5kUQV, _arrayValueq1RFFZn]
		const _getAllEdgesM8m3YFC = () => { return _returnValueMEhFElv };
		const _graphcI2q7Zi = {
			"getAllVertices": _getAllVerticesW7OAVR1,
		"getAllEdges": _getAllEdgesM8m3YFC
	}
		const _returnValueJVZYTU = await detectUndirectedCycleUsingDisjointSet(_graphcI2q7Zi)
	});
})