export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphRVMERqm = "NHWThuKEDGSR7h9nko4luMjGUE1ZkHrW1qwR8xalXTAvL4fd3DsQapjfi2Mw8sCEYHl5VzbRcBNgtgFmFg7580QP";
		const _returnValueU6zUa3X = await detectUndirectedCycle(_graphRVMERqm)
	});
})