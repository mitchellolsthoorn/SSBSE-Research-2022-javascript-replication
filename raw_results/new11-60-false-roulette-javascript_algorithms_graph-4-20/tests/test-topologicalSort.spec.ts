export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueY9BA3wM = {
		
	}
		const _graphW6RPClp = () => { return _returnValueY9BA3wM };
		const _returnValuej9yMs21 = await topologicalSort(_graphW6RPClp)
	});
})