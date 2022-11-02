export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueu4wNeTh = 5.931478255601444;
		const _getAllVerticesOfx9R2Q = () => { return _returnValueu4wNeTh };
		const _graphXLQONDX = {
			"getAllVertices": _getAllVerticesOfx9R2Q
	}
		const _returnValueseo4StU = await detectUndirectedCycle(_graphXLQONDX)
	});
})