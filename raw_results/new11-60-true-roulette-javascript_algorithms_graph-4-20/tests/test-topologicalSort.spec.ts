export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphzECe8SS = "Cm60oNNrInmBREnyUyLYV2twuqMQparBMi3O";
		const _returnValueTBnFbhW = await topologicalSort(_graphzECe8SS)
	});
})