export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueuB33zdb = null;
		const _getAllVerticesuWDtfTV = () => { return _returnValueuB33zdb };
		const _graphDnVr8T = {
			"getAllVertices": _getAllVerticesuWDtfTV
	}
		const _returnValuenguurKj = await detectUndirectedCycle(_graphDnVr8T)
	});
})