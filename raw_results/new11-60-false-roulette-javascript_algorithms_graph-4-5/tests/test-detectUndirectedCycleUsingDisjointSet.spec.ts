export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueo1E5akf = 7.448843844741937;
		const _getAllVerticesCukdC2Q = () => { return _returnValueo1E5akf };
		const _returnValue2cAFrg = "kHT6SN34YzK7IRhQaHTd9DmXbggfk2q1QkIesTmP8rVVsvEQmzH2R3hokZCTi9r";
		const _getAllEdgessyz61KX = () => { return _returnValue2cAFrg };
		const _graphCuBZUr = {
			"getAllVertices": _getAllVerticesCukdC2Q,
		"getAllEdges": _getAllEdgessyz61KX
	}
		const _returnValuedKSuFHv = await detectUndirectedCycleUsingDisjointSet(_graphCuBZUr)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedseizoeA = false;
		const _graphYliXVmD = new Graph(_isDirectedseizoeA)
		const _returnValueQVRirVp = await _graphYliXVmD.getAllVertices()
		const _returnValuezwAlJTu = await _graphYliXVmD.reverse()
		const _returnValueTXpuMb5 = await _graphYliXVmD.getAllVertices()
		const _returnValueMc9QWuN = await _graphYliXVmD.getVerticesIndices()
		const _returnValuek3OTL7w = await detectUndirectedCycleUsingDisjointSet(_graphYliXVmD)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueZ8fAVh8 = []
		const _getAllVerticesdPUuGOV = () => { return _returnValueZ8fAVh8 };
		const _arrayValueoREXDHc = "CRrnHlvHl9PZPttSJl1hLmTpkafVZ5";
		const _returnValueLGyCRNQ = [_arrayValueoREXDHc]
		const _getAllEdgeslJ9oL7x = () => { return _returnValueLGyCRNQ };
		const _graphOAIzRYM = {
			"getAllVertices": _getAllVerticesdPUuGOV,
		"getAllEdges": _getAllEdgeslJ9oL7x
	}
		const _returnValueDBAHV6 = await detectUndirectedCycleUsingDisjointSet(_graphOAIzRYM)
	});
})