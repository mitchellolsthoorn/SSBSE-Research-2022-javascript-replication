export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuenP6JgfI = 1.8475315099300147;
		const _getAllVerticesfpbJXCm = () => { return _returnValuenP6JgfI };
		const _graphV4Ah72q = {
			"getAllVertices": _getAllVerticesfpbJXCm
	}
		const _returnValueN0b1yBi = await topologicalSort(_graphV4Ah72q)
	});
})