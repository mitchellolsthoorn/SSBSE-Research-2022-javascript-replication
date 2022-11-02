export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuerh4lH9l = true;
		const _getAllVerticesXIRWXCz = () => { return _returnValuerh4lH9l };
		const _graphIBnpy9M = {
			"getAllVertices": _getAllVerticesXIRWXCz
	}
		const _returnValuelefgxGg = await topologicalSort(_graphIBnpy9M)
	});
})