export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _isDirectedtklwlQC = false;
		const _graphibHiqR9 = new Graph(_isDirectedtklwlQC)
		const _returnValueTd5Aohc = await _graphibHiqR9.getAllVertices()
		const _returnValueGtUZWr = await topologicalSort(_graphibHiqR9)
	});
})