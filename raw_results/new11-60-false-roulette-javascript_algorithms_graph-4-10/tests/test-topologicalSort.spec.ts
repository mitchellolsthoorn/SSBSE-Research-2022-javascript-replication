export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueIDb7C8H = true;
		const _getAllVerticesrX91oow = () => { return _returnValueIDb7C8H };
		const _graphpNCOxLE = {
			"getAllVertices": _getAllVerticesrX91oow
	}
		const _returnValueQ4ircgE = await topologicalSort(_graphpNCOxLE)
	});
})