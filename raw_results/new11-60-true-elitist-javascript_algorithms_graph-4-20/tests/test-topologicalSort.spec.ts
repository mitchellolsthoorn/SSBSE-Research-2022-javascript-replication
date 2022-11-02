export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueuRJRe4d = undefined;
		const _getAllVerticesSCWLJzW = () => { return _returnValueuRJRe4d };
		const _graphe15RfQY = {
			"getAllVertices": _getAllVerticesSCWLJzW
	}
		const _returnValuectBcDPh = await topologicalSort(_graphe15RfQY)
	});
})