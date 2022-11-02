export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueFko278D = 0.004263534001651692;
		const _getAllVerticesgzUggew = () => { return _returnValueFko278D };
		const _graphXc94nX = {
			"getAllVertices": _getAllVerticesgzUggew
	}
		const _returnValueGhiHSir = await topologicalSort(_graphXc94nX)
	});
})