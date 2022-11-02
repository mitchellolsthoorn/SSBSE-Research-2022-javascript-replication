export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _isDirectedA76AQpS = true;
		const _graphGzAeBKc = new Graph(_isDirectedA76AQpS)
		const _returnValue9bvbzs = await _graphGzAeBKc.reverse()
		const _returnValueioBy2wu = await _graphGzAeBKc.getAllEdges()
		const _returnValueG0yCju4 = await _graphGzAeBKc.getWeight()
		const _returnValueDxp3VHl = await _graphGzAeBKc.getVerticesIndices()
		const _returnValueDDw0w87 = await topologicalSort(_graphGzAeBKc)
	});
})