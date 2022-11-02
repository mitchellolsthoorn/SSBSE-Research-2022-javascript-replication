export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuekZuW9MK = "Q";
		const _getAllVerticesSaM9hxe = () => { return _returnValuekZuW9MK };
		const _graphCABsF6H = {
			"getAllVertices": _getAllVerticesSaM9hxe
	}
		const _returnValueJ0rfVI2 = await topologicalSort(_graphCABsF6H)
	});
})