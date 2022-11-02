export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _isDirectedvUKg7Ow = true;
		const _graphNjjbcfn = new Graph(_isDirectedvUKg7Ow)
		const _returnValueGfiLDKX = await _graphNjjbcfn.getWeight()
		const _returnValueqRmiZAS = await _graphNjjbcfn.getAdjacencyMatrix()
		const _returnValueOopEInC = await _graphNjjbcfn.getAllVertices()
		const _returnValueToON1bz = await topologicalSort(_graphNjjbcfn)
	});
})