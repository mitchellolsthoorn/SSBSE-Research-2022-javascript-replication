export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuemc2t9f = true;
		const _getAllVerticesO4tpumd = () => { return _returnValuemc2t9f };
		const _graphXp8YMNS = {
			"getAllVertices": _getAllVerticesO4tpumd
	}
		const _returnValuee6Wesr = await topologicalSort(_graphXp8YMNS)
	});
})