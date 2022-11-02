export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueQboiZq = "TSW2svCQH";
		const _graphM1rzWfh = () => { return _returnValueQboiZq };
		const _returnValueRl1KoUz = await topologicalSort(_graphM1rzWfh)
	});
})