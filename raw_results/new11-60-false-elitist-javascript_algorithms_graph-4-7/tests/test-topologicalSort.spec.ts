export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuegONUoR4 = true;
		const _getAllVerticesmuonTp = () => { return _returnValuegONUoR4 };
		const _graphDbik0q = {
			"getAllVertices": _getAllVerticesmuonTp
	}
		const _returnValueEycTPW4 = await topologicalSort(_graphDbik0q)
	});
})