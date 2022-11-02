export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuegH3WJuX = {
		
	}
		const _getAllVerticesNakV2Sl = () => { return _returnValuegH3WJuX };
		const _graphX0cx86C = {
			"getAllVertices": _getAllVerticesNakV2Sl
	}
		const _returnValueINx9Tx1 = await topologicalSort(_graphX0cx86C)
	});
})