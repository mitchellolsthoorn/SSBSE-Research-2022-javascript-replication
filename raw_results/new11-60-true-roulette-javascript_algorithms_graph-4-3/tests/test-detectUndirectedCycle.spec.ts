export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuei7iiaI = null;
		const _getAllVerticesHlGLHwo = () => { return _returnValuei7iiaI };
		const _graphPvJHC4G = {
			"getAllVertices": _getAllVerticesHlGLHwo
	}
		const _returnValuelAOPHc3 = await detectUndirectedCycle(_graphPvJHC4G)
	});
})