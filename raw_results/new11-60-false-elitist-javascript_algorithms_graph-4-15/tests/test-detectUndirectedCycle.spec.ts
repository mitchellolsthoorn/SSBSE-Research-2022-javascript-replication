export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuejEnox4 = null;
		const _returnValueYZRtqeC = () => { return _returnValuejEnox4 };
		const _getAllVerticesvenVXOj = () => { return _returnValueYZRtqeC };
		const _graphdMyvgFw = {
			"getAllVertices": _getAllVerticesvenVXOj
	}
		const _returnValuepSEvhP = await detectUndirectedCycle(_graphdMyvgFw)
	});
})