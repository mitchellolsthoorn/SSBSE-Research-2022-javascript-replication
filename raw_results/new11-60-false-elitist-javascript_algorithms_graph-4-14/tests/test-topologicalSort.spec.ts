export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueoVO9kMv = {
		
	}
		const _getAllVerticesc9RATuJ = () => { return _returnValueoVO9kMv };
		const _graphMh4yhB4 = {
			"getAllVertices": _getAllVerticesc9RATuJ
	}
		const _returnValuex65mcey = await topologicalSort(_graphMh4yhB4)
	});
})