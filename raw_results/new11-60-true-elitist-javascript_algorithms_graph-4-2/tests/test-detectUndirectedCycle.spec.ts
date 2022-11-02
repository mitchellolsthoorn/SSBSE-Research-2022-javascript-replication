export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueocbJbj = undefined;
		const _getAllVerticesPxqAAtr = () => { return _returnValueocbJbj };
		const _graphfadlCRJ = {
			"getAllVertices": _getAllVerticesPxqAAtr
	}
		const _returnValueYUCeZPL = await detectUndirectedCycle(_graphfadlCRJ)
	});
})