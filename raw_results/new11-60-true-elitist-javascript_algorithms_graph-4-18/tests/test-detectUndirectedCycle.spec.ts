export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuePEGjUnV = true;
		const _getAllVerticesPsYSSeq = () => { return _returnValuePEGjUnV };
		const _graphqy9MQHJ = {
			"getAllVertices": _getAllVerticesPsYSSeq
	}
		const _returnValueyK46DUL = await detectUndirectedCycle(_graphqy9MQHJ)
	});
})