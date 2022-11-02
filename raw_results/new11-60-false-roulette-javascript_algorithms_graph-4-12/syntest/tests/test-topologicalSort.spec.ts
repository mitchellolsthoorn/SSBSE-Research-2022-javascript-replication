export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueDwkRPk = undefined;
		const _getAllVerticeswrV4Uc1 = () => { return _returnValueDwkRPk };
		const _grapheChWQsP = {
			"getAllVertices": _getAllVerticeswrV4Uc1
	}
		const _returnValuexkx02hE = await topologicalSort(_grapheChWQsP)
	});
})