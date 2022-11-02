export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueZwcK2l9 = null;
		const _graphmn7ZkgF = () => { return _returnValueZwcK2l9 };
		const _returnValueMEMnbW = await topologicalSort(_graphmn7ZkgF)
	});
})