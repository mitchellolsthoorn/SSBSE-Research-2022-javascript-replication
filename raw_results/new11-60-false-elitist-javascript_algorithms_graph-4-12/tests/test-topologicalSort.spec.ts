export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueoqPgtCj = undefined;
		const _getAllVerticesGEotWkd = () => { return _returnValueoqPgtCj };
		const _graphW4mhJve = {
			"getAllVertices": _getAllVerticesGEotWkd
	}
		const _returnValueu90Lo1d = await topologicalSort(_graphW4mhJve)
	});
})