export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuec4ZzV0N = undefined;
		const _getAllVerticesFvdgtf = () => { return _returnValuec4ZzV0N };
		const _graphYhXDHBz = {
			"getAllVertices": _getAllVerticesFvdgtf
	}
		const _returnValueqXeafm = await topologicalSort(_graphYhXDHBz)
	});
})