export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValueRqBKpRE = true;
		const _arrayValueWzGgsE = undefined;
		const _arrayValueTavIHAj = {
		
	}
		const _graphyFdFT1Y = [_arrayValueRqBKpRE, _arrayValueWzGgsE, _arrayValueTavIHAj]
		const _returnValueYKgn8S9 = await topologicalSort(_graphyFdFT1Y)
	});
})