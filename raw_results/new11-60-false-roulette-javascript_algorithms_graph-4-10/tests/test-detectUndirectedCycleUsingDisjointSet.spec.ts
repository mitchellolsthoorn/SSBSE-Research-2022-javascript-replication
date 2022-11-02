export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphKo7k5Fb = "9HUFpQUsiPS2GWO";
		const _returnValueasZcRFN = await detectUndirectedCycleUsingDisjointSet(_graphKo7k5Fb)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedhcpqcY7 = true;
		const _graphZ9iiaPu = new Graph(_isDirectedhcpqcY7)
		const _returnValuehnvMsJ1 = await _graphZ9iiaPu.getWeight()
		const _returnValuefyexwgM = await _graphZ9iiaPu.getWeight()
		const _returnValuehteSle5 = await _graphZ9iiaPu.getVerticesIndices()
		const _returnValue8fHzdg = await detectUndirectedCycleUsingDisjointSet(_graphZ9iiaPu)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueRcrWP5N = []
		const _getAllVerticesfrXZYO = () => { return _returnValueRcrWP5N };
		const _arrayValuemzwXmqF = -3.262440419843145;
		const _arrayValueJ9uzmOS = true;
		const _returnValueRxbKcfH = [_arrayValuemzwXmqF, _arrayValueJ9uzmOS]
		const _getAllEdgesobplQnE = () => { return _returnValueRxbKcfH };
		const _graphTX1ZTTJ = {
			"getAllVertices": _getAllVerticesfrXZYO,
		"getAllEdges": _getAllEdgesobplQnE
	}
		const _returnValueAKhBVO = await detectUndirectedCycleUsingDisjointSet(_graphTX1ZTTJ)
	});
})