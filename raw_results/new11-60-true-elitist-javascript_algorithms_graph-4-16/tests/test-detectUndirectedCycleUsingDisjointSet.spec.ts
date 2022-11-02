export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueADSvNJt = false;
		const _getAllVerticesypU0rf0 = () => { return _returnValueADSvNJt };
		const _returnValueHdffEZp = null;
		const _getAllEdgesWMRW4cS = () => { return _returnValueHdffEZp };
		const _graphObjmu23 = {
			"getAllVertices": _getAllVerticesypU0rf0,
		"getAllEdges": _getAllEdgesWMRW4cS
	}
		const _returnValuezUI2twp = await detectUndirectedCycleUsingDisjointSet(_graphObjmu23)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedHdRPPT = false;
		const _graphbnTgKqd = new Graph(_isDirectedHdRPPT)
		const _returnValuefuk5OUN = await _graphbnTgKqd.getAllVertices()
		const _returnValuef1cQyuF = await _graphbnTgKqd.getAllEdges()
		const _returnValueuva2GSS = await detectUndirectedCycleUsingDisjointSet(_graphbnTgKqd)
	});
})