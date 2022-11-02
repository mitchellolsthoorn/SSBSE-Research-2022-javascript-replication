export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValueI41AmyH = "JJTtkLUeTgsBufeswrRpkY3w9lElNExkREr5DUJwjpiea7IE2ITVderrFOCBF0HAqao";
		const _returnValuev8Zce19 = [_arrayValueI41AmyH]
		const _getAllVerticesEcdS0Ti = () => { return _returnValuev8Zce19 };
		const _graphhI2DZl6 = {
			"getAllVertices": _getAllVerticesEcdS0Ti
	}
		const _returnValueqnlHJV4 = await topologicalSort(_graphhI2DZl6)
	});
})