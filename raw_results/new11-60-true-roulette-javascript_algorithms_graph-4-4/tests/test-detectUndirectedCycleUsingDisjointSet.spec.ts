export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValuenyRPqA0 = true;
		const _arrayValueKmRuqkh = "KLgPtZ92fGYfGRpo0P5xHmwivhVpBR54B3nsxcGFhTosO0o5MltldzkCd";
		const _arrayValueGEqBkU = []
		const _arrayValuemV2GRI = [_arrayValuenyRPqA0, _arrayValueKmRuqkh, _arrayValueGEqBkU]
		const _isDirecteddEk5bi = [_arrayValuemV2GRI]
		const _graphly4FipV = new Graph(_isDirecteddEk5bi)
		const _returnValuewBhaDhe = await _graphly4FipV.getAllVertices()
		const _returnValuefHrQl8S = null;
		const _getNeighborsUJ301Ds = () => { return _returnValuefHrQl8S };
		const _vertexQK4GKOM = {
			"getNeighbors": _getNeighborsUJ301Ds
	}
		const _returnValueSPKLNdi = await _graphly4FipV.getNeighbors(_vertexQK4GKOM)
		const _returnValueskzF1vF = await detectUndirectedCycleUsingDisjointSet(_graphly4FipV)
	});
})