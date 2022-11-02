export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _isDirectedSbvsLM = false;
		const _graphXDU2mLh = new Graph(_isDirectedSbvsLM)
		const _returnValueJqIFKmX = await _graphXDU2mLh.getVerticesIndices()
		const _vertexKeyQlXM3ur = undefined;
		const _returnValueHxJTmBJ = await _graphXDU2mLh.getVertexByKey(_vertexKeyQlXM3ur)
		const _returnValueKckjcM = await topologicalSort(_graphXDU2mLh)
	});
})