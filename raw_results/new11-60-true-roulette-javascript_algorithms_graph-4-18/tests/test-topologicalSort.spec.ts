export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphKtZDPJ = "BcyN8AK8ti6zsO5mmccYOdgcDY6mOJusO7oIkM0QyMUTbwUXueYDNJXoczAtG3I3T";
		const _returnValuembOAxFl = await topologicalSort(_graphKtZDPJ)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedlbLhY6u = false;
		const _graphtRvxV3 = new Graph(_isDirectedlbLhY6u)
		const _returnValueXkh2k6 = await _graphtRvxV3.getAdjacencyMatrix()
		const _returnValuecC6BV9m = await _graphtRvxV3.getAllEdges()
		const _returnValueVVbkW3t = await topologicalSort(_graphtRvxV3)
	});
})