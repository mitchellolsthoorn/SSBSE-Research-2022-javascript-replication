export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuecypNB7P = 8.057495704682449;
		const _getAllVerticesWZued2c = () => { return _returnValuecypNB7P };
		const _graphg7mTR97 = {
			"getAllVertices": _getAllVerticesWZued2c
	}
		const _returnValueiwpnty5 = await topologicalSort(_graphg7mTR97)
	});
})