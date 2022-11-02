export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphwLZyX2t = "2cejVUCyjwFOh";
		const _returnValuezBT0HK3 = await topologicalSort(_graphwLZyX2t)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedaUZpEFB = undefined;
		const _graphSyIHYNn = new Graph(_isDirectedaUZpEFB)
		const _returnValueRKBnAzv = await _graphSyIHYNn.reverse()
		const _returnValuelsOdtA = await topologicalSort(_graphSyIHYNn)
	});
})