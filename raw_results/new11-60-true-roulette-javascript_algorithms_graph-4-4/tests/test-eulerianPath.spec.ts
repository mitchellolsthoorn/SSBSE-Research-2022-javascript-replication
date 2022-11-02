export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _isDirectedMgelmWd = true;
		const _graphQG20zt4 = new Graph(_isDirectedMgelmWd)
		const _returnValueGun4FVc = await _graphQG20zt4.reverse()
		const _returnValueIbJ7cEM = await eulerianPath(_graphQG20zt4)
	});
})