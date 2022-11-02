export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueDOaVcfM = false;
		const _getAllVerticesRRfVFOa = () => { return _returnValueDOaVcfM };
		const _graphuNuKrH = {
			"getAllVertices": _getAllVerticesRRfVFOa
	}
		const _returnValuesDcnfu1 = await topologicalSort(_graphuNuKrH)
	});
})