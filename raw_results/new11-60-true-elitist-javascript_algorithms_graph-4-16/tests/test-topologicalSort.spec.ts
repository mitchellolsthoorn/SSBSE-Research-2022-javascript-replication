export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueccYKcwA = undefined;
		const _getAllVerticesud3wVbx = () => { return _returnValueccYKcwA };
		const _graphryamSf = {
			"getAllVertices": _getAllVerticesud3wVbx
	}
		const _returnValueYkp5MMh = await topologicalSort(_graphryamSf)
	});
})