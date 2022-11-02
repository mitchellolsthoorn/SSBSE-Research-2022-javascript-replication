export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueIYsZXAO = false;
		const _getAllVerticesf9mWTxi = () => { return _returnValueIYsZXAO };
		const _graphXAdzFug = {
			"getAllVertices": _getAllVerticesf9mWTxi
	}
		const _returnValueekJecb = await detectUndirectedCycle(_graphXAdzFug)
	});
})