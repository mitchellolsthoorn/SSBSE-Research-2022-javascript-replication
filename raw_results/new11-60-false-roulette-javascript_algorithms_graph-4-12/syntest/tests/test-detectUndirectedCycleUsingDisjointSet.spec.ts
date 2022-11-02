export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuekf6YtmY = true;
		const _getAllVerticesG9kkWLP = () => { return _returnValuekf6YtmY };
		const _getAllEdgeswh0q4G = true;
		const _graphfMhMCai = {
			"getAllVertices": _getAllVerticesG9kkWLP,
		"getAllEdges": _getAllEdgeswh0q4G
	}
		const _returnValuenaE6WFs = await detectUndirectedCycleUsingDisjointSet(_graphfMhMCai)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedbKMGlgb = false;
		const _graphGw5aTxy = new Graph(_isDirectedbKMGlgb)
		const _returnValuefkx9yC1 = await _graphGw5aTxy.getAllVertices()
		const _returnValueMihMT57 = await _graphGw5aTxy.getAllVertices()
		const _returnValuek2SBm6 = await detectUndirectedCycleUsingDisjointSet(_graphGw5aTxy)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueEZdhfad = []
		const _getAllVerticesM3cFH7w = () => { return _returnValueEZdhfad };
		const _arrayValueJGBzor = undefined;
		const _returnValueTnlXWhW = [_arrayValueJGBzor]
		const _getAllEdgesOXCDUH8 = () => { return _returnValueTnlXWhW };
		const _graphmtJbuF3 = {
			"getAllVertices": _getAllVerticesM3cFH7w,
		"getAllEdges": _getAllEdgesOXCDUH8
	}
		const _returnValueCggeqv = await detectUndirectedCycleUsingDisjointSet(_graphmtJbuF3)
	});
})