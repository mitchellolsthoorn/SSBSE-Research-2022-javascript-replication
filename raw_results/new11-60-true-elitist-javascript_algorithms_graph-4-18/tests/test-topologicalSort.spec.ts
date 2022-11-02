export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValue5t8jWy = undefined;
		const _getAllVertices3UzFX0 = () => { return _returnValue5t8jWy };
		const _graphQs6TgX4 = {
			"getAllVertices": _getAllVertices3UzFX0
	}
		const _returnValuepjDJLDI = await topologicalSort(_graphQs6TgX4)
	});
})