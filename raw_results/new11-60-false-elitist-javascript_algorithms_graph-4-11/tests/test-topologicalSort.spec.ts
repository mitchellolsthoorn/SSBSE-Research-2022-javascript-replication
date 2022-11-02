export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValuexDsmUwA = undefined;
		const _getAllVerticesqsh05CW = [_arrayValuexDsmUwA]
		const _graphDh1WoYy = {
			"getAllVertices": _getAllVerticesqsh05CW
	}
		const _returnValuetgbQmMe = await topologicalSort(_graphDh1WoYy)
	});
})