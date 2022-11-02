export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueqjE03Sx = -8.57734940410546;
		const _getAllVerticesHmu2Lfa = () => { return _returnValueqjE03Sx };
		const _graphV5rYRNe = {
			"getAllVertices": _getAllVerticesHmu2Lfa
	}
		const _returnValuehbGByC4 = await topologicalSort(_graphV5rYRNe)
	});
})