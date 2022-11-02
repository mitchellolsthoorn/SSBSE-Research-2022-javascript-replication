export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueOArkMel = undefined;
		const _getAllVerticesgRiIfwz = () => { return _returnValueOArkMel };
		const _graph0zEZHc = {
			"getAllVertices": _getAllVerticesgRiIfwz
	}
		const _returnValuerTepQf = await topologicalSort(_graph0zEZHc)
	});
})