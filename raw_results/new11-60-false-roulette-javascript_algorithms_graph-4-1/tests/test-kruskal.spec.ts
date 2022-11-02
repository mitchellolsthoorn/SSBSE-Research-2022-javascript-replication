export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphJt7TrkQ = "ENtsp4cckRWf8hH8McAbex8qIbgodWP1xtNXTJ4avVVd9cV3bhafQjrQkPCfsjZS13kVd5GuGi8DhHHiz1J9i9DyvVOmme";
		const _returnValuen0yjNgK = await kruskal(_graphJt7TrkQ)
	});

	it('test for kruskal', async () => {
		const _isDirectedC85vsHv = true;
		const _graph5ZkIuF = new Graph(_isDirectedC85vsHv)
		const _returnValueuAScp8f = await _graph5ZkIuF.reverse()
		const _returnValueooPqlfv = await _graph5ZkIuF.toString()
		const _returnValueITuC8lA = await _graph5ZkIuF.getAdjacencyMatrix()
		const _returnValueVIAbdL2 = await _graph5ZkIuF.getVerticesIndices()
		const _returnValueLkBSDRd = await kruskal(_graph5ZkIuF)
	});

	it('test for kruskal', async () => {
		const _isDirectedi0GhZKf = null;
		const _returnValueyARr30w = "KkpKSUBkNjYJlVvvcm1JD9MeWyoVk0dLmWpWew90oUDYdlF8EEH79rSWUsePetQTFazj1WL5Hs5NKVlfdEQsqHIzv5b6aim2";
		const _getAllEdgesOEoZl1F = () => { return _returnValueyARr30w };
		const _returnValueIbf5cv8 = undefined;
		const _getAllVerticesE205inV = () => { return _returnValueIbf5cv8 };
		const _graph7EooSK = {
			"isDirected": _isDirectedi0GhZKf,
		"getAllEdges": _getAllEdgesOEoZl1F,
		"getAllVertices": _getAllVerticesE205inV
	}
		const _returnValueS0KEre = await kruskal(_graph7EooSK)
	});
})