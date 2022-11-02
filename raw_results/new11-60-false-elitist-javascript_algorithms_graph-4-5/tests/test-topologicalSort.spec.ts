export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueWW54H8a = "7DSDbQKk2cRdTvtP0wgGUnEwdPnQdevsi";
		const _getAllVerticeslhExQ0b = () => { return _returnValueWW54H8a };
		const _graphD61WUSg = {
			"getAllVertices": _getAllVerticeslhExQ0b
	}
		const _returnValueSNt1SEM = await topologicalSort(_graphD61WUSg)
	});
})