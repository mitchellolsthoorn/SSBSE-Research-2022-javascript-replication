export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValueOZgKUxV = true;
		const _returnValuekl41MYL = [_arrayValueOZgKUxV]
		const _graphPHFAHw4 = () => { return _returnValuekl41MYL };
		const _returnValuevEk5TWN = await topologicalSort(_graphPHFAHw4)
	});
})