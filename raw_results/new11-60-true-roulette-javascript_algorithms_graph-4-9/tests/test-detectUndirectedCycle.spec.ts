export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuelhP4Fgx = false;
		const _getAllVerticesbeINX4g = () => { return _returnValuelhP4Fgx };
		const _graphnqCGDl = {
			"getAllVertices": _getAllVerticesbeINX4g
	}
		const _returnValuedBN3t0j = await detectUndirectedCycle(_graphnqCGDl)
	});
})