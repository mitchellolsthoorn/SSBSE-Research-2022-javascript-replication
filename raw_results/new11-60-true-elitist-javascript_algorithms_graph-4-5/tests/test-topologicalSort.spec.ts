export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuePD5h3wo = null;
		const _getAllVerticesY6vYp6 = () => { return _returnValuePD5h3wo };
		const _grapha6msPOF = {
			"getAllVertices": _getAllVerticesY6vYp6
	}
		const _returnValueznFnIJ = await topologicalSort(_grapha6msPOF)
	});
})