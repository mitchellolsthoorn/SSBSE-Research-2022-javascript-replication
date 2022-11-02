export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuelxn5oM = -3.4891693830708084;
		const _returnValuevOES1eX = () => { return _returnValuelxn5oM };
		const _getAllVerticesWCcbYz = () => { return _returnValuevOES1eX };
		const _graphQ1oVZfM = {
			"getAllVertices": _getAllVerticesWCcbYz
	}
		const _returnValue1nZwWw = await topologicalSort(_graphQ1oVZfM)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedrFIhxuL = true;
		const _graphnD9y6Wk = new Graph(_isDirectedrFIhxuL)
		const _returnValueAqZTIon = await _graphnD9y6Wk.getWeight()
		const _returnValue9g6CF3 = await _graphnD9y6Wk.toString()
		const _returnValuehlP2GH = await topologicalSort(_graphnD9y6Wk)
	});
})