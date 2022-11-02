export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuel8GoSzl = true;
		const _getAllVerticesua1pmeZ = () => { return _returnValuel8GoSzl };
		const _graphR42wr6n = {
			"getAllVertices": _getAllVerticesua1pmeZ
	}
		const _returnValuegRKO2KK = await topologicalSort(_graphR42wr6n)
	});
})