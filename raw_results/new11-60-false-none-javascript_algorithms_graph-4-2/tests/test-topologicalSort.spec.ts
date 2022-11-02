export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuez8OfIBa = -7.263190103339397;
		const _graphGIw4Fe4 = () => { return _returnValuez8OfIBa };
		const _returnValueUhmdFx8 = await topologicalSort(_graphGIw4Fe4)
	});
})