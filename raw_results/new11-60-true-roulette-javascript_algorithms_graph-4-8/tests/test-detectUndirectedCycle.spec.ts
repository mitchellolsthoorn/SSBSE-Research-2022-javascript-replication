export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphIie1ZaA = "gP3eBjPJeTER44cR4ub9p4pCErHNu3lPqwinX7v0Ap7CnA1GCJOkd5CoKQfvtxFrvlNkbJnyBX0FwQSUfphlCMOvmWrwqBRB5";
		const _returnValueEBTwds5 = await detectUndirectedCycle(_graphIie1ZaA)
	});
})