export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuedkotx6P = undefined;
		const _getAllVerticesJsoz7Yv = () => { return _returnValuedkotx6P };
		const _graphy1mRsga = {
			"getAllVertices": _getAllVerticesJsoz7Yv
	}
		const _returnValuenOmtP2K = await topologicalSort(_graphy1mRsga)
	});
})