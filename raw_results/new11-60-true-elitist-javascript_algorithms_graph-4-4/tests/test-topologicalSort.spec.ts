export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuefQIW6oA = "jDLCn4xYbBKjU";
		const _getAllVerticesQq6ViK8 = () => { return _returnValuefQIW6oA };
		const _graphyPNk8R3 = {
			"getAllVertices": _getAllVerticesQq6ViK8
	}
		const _returnValuefsQBGMD = await topologicalSort(_graphyPNk8R3)
	});
})