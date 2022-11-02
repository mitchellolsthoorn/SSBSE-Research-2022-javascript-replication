export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuejL2L6Qk = true;
		const _graphGBJIF9i = () => { return _returnValuejL2L6Qk };
		const _returnValueJChw9gD = await detectUndirectedCycleUsingDisjointSet(_graphGBJIF9i)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedLa7OcYv = false;
		const _graphkI0WsEl = new Graph(_isDirectedLa7OcYv)
		const _returnValueBPMeZDc = await _graphkI0WsEl.getAllEdges()
		const _returnValue6DHubr = await _graphkI0WsEl.getVerticesIndices()
		const _returnValueBM5YhX2 = await detectUndirectedCycleUsingDisjointSet(_graphkI0WsEl)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuecIk3cL = []
		const _getAllVerticeslTqMKZg = () => { return _returnValuecIk3cL };
		const _returnValuekcvo8zG = undefined;
		const _arrayValueqTwdM9H = () => { return _returnValuekcvo8zG };
		const _arrayValuehgNYOl = -4.727657421600724;
		const _returnValueWzCm2Xn = [_arrayValueqTwdM9H, _arrayValuehgNYOl]
		const _getAllEdgesf29aTLd = () => { return _returnValueWzCm2Xn };
		const _graphNQtlHP6 = {
			"getAllVertices": _getAllVerticeslTqMKZg,
		"getAllEdges": _getAllEdgesf29aTLd
	}
		const _returnValuecWsqLu8 = await detectUndirectedCycleUsingDisjointSet(_graphNQtlHP6)
	});
})