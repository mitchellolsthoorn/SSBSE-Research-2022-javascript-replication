export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueiVniJI4 = "pWGvRdaS2IxRd3AzqLMCC";
		const _getAllVerticeslKxaXGm = () => { return _returnValueiVniJI4 };
		const _graph6yoWE5 = {
			"getAllVertices": _getAllVerticeslKxaXGm
	}
		const _returnValueL5Umxg4 = await detectUndirectedCycle(_graph6yoWE5)
	});
})