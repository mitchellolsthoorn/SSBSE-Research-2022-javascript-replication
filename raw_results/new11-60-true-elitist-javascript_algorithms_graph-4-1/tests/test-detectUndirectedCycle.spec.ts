export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueB6Mk361 = null;
		const _getAllVerticespVQsGye = () => { return _returnValueB6Mk361 };
		const _grapherPSwiC = {
			"getAllVertices": _getAllVerticespVQsGye
	}
		const _returnValueCKjHLBp = await detectUndirectedCycle(_grapherPSwiC)
	});
})