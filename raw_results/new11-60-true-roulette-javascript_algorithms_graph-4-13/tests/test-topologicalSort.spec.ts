export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValuewlaifaO = 3.563471635289737;
		const _graphlHFtcNh = [_arrayValuewlaifaO]
		const _returnValuesZqEWi0 = await topologicalSort(_graphlHFtcNh)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedEFeiItv = true;
		const _graphEHYrmh = new Graph(_isDirectedEFeiItv)
		const _returnValueBqk7CoX = await _graphEHYrmh.reverse()
		const _returnValueAMa2MGj = await _graphEHYrmh.toString()
		const _returnValuea4WbK0m = await _graphEHYrmh.getAdjacencyMatrix()
		const _returnValueZ6Qv5g0 = await topologicalSort(_graphEHYrmh)
	});
})