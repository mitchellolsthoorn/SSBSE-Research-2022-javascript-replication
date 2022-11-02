export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphunI6g8z = "ri0yhzLYQ9026oTabN1CrmTXbaF31Rhar";
		const _returnValueoZQ82qI = await topologicalSort(_graphunI6g8z)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedeGefvBu = -5.091784380834605;
		const _graphY0YOVt9 = new Graph(_isDirectedeGefvBu)
		const _returnValueNHNwR2v = await _graphY0YOVt9.getVerticesIndices()
		const _returnValueYcTSyf = await _graphY0YOVt9.getWeight()
		const _vertexKeyCV0pFmW = -2.415664272518164;
		const _returnValuep7DHyPQ = await _graphY0YOVt9.getVertexByKey(_vertexKeyCV0pFmW)
		const _returnValuegOYgPcU = await _graphY0YOVt9.getAdjacencyMatrix()
		const _returnValuewNQ9F5 = await _graphY0YOVt9.reverse()
		const _returnValueWva3Hxd = await topologicalSort(_graphY0YOVt9)
	});
})