export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueJNhjJ8 = 6.427975471856687;
		const _getAllVerticesmRHcqlY = () => { return _returnValueJNhjJ8 };
		const _graphPDhrIbF = {
			"getAllVertices": _getAllVerticesmRHcqlY
	}
		const _returnValueYR6ABHm = await topologicalSort(_graphPDhrIbF)
	});
})