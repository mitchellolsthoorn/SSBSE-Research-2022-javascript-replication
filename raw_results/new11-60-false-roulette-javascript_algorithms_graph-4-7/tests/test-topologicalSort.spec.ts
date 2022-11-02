export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _isDirectedjYZHFRK = false;
		const _graphiBhpRft = new Graph(_isDirectedjYZHFRK)
		const _returnValueUYMelNe = await _graphiBhpRft.getAllVertices()
		const _arrayValuej8pjxOl = undefined;
		const _returnValueQFdb1fP = {
		
	}
		const _arrayValuee46B8xX = () => { return _returnValueQFdb1fP };
		const _arrayValuevaaBi53 = -3.4095172517835293;
		const _vertexKeysMp13JP = [_arrayValuej8pjxOl, _arrayValuee46B8xX, _arrayValuevaaBi53]
		const _returnValueeKeG84d = await _graphiBhpRft.getVertexByKey(_vertexKeysMp13JP)
		const _returnValuelxVTIiY = await topologicalSort(_graphiBhpRft)
	});
})