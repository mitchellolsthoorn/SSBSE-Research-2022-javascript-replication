export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueN388V1Q = undefined;
		const _graphyyNNhsm = () => { return _returnValueN388V1Q };
		const _returnValueJqsDu9l = await topologicalSort(_graphyyNNhsm)
	});
})