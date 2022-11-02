export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueV2gJhBm = 3.0309294148557733;
		const _getAllVerticesIgpmzUY = () => { return _returnValueV2gJhBm };
		const _returnValueyiXYzpE = "Fo5PTeqCaiVj1xQzaheb4YrkiCWQA5GCH";
		const _getAllEdges7TqIBY = () => { return _returnValueyiXYzpE };
		const _graphhULJRed = {
			"getAllVertices": _getAllVerticesIgpmzUY,
		"getAllEdges": _getAllEdges7TqIBY
	}
		const _returnValuejaQ1Asr = await detectUndirectedCycleUsingDisjointSet(_graphhULJRed)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuek3YaPI3 = []
		const _getAllVerticesoSp1IxM = () => { return _returnValuek3YaPI3 };
		const _arrayValuefJwFq16 = undefined;
		const _arrayValueeygM1pV = undefined;
		const _returnValueI9eYZsm = [_arrayValuefJwFq16, _arrayValueeygM1pV]
		const _getAllEdgeskp0j82b = () => { return _returnValueI9eYZsm };
		const _graphbwXZK0r = {
			"getAllVertices": _getAllVerticesoSp1IxM,
		"getAllEdges": _getAllEdgeskp0j82b
	}
		const _returnValueaG04LFc = await detectUndirectedCycleUsingDisjointSet(_graphbwXZK0r)
	});
})