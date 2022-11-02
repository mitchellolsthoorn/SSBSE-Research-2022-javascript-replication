export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphforbA4 = "k1bMO2mxpHQcYXrxY";
		const _returnValuexiU4PxO = await topologicalSort(_graphforbA4)
	});

	it('test for topologicalSort', async () => {
		const _returnValueXRkD0N5 = []
		const _getAllVerticesmB6Ao85 = () => { return _returnValueXRkD0N5 };
		const _graphTdVKBcq = {
			"getAllVertices": _getAllVerticesmB6Ao85
	}
		const _returnValueWzoQTOS = await topologicalSort(_graphTdVKBcq)
	});
})