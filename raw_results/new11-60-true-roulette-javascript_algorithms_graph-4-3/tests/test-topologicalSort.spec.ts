export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _getAllVerticesJo5sA2u = -8.531414429076225;
		const _graphjUDBpZ5 = {
			"getAllVertices": _getAllVerticesJo5sA2u
	}
		const _returnValuesjXvaPM = await topologicalSort(_graphjUDBpZ5)
	});
})