export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueADsaGkQ = undefined;
		const _getAllVerticesCQ7ZefE = () => { return _returnValueADsaGkQ };
		const _graphTZEjVoD = {
			"getAllVertices": _getAllVerticesCQ7ZefE
	}
		const _returnValueX9vHyoD = await topologicalSort(_graphTZEjVoD)
	});
})