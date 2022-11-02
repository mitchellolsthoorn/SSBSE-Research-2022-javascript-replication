export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueAZGhixb = {
		
	}
		const _returnValuebYPK11D = () => { return _returnValueAZGhixb };
		const _getAllVerticesHiWALn = () => { return _returnValuebYPK11D };
		const _grapheJhNxt6 = {
			"getAllVertices": _getAllVerticesHiWALn
	}
		const _returnValueVyboB14 = await topologicalSort(_grapheJhNxt6)
	});
})