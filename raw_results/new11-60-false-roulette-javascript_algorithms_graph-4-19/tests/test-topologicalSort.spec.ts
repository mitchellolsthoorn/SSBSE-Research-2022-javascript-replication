export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueZJ78XnS = true;
		const _getAllVerticesQDDMHh0 = () => { return _returnValueZJ78XnS };
		const _graphvy0n77J = {
			"getAllVertices": _getAllVerticesQDDMHh0
	}
		const _returnValueVnISbLC = await topologicalSort(_graphvy0n77J)
	});
})