export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueUD1Z5LY = undefined;
		const _getAllVerticeseVcghse = () => { return _returnValueUD1Z5LY };
		const _graphwSBaZet = {
			"getAllVertices": _getAllVerticeseVcghse
	}
		const _returnValueNVf8I1I = await detectUndirectedCycle(_graphwSBaZet)
	});
})