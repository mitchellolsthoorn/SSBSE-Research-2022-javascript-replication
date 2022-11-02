export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphJyfDu47 = "6MIRcddIuwoO1CXDQtvNP5ZrDbDFauKc3x4QmkHnxOzXSrB3WlYLGwvC5RqILfu4bojVb";
		const _returnValueNpCmvFf = await detectUndirectedCycle(_graphJyfDu47)
	});
})