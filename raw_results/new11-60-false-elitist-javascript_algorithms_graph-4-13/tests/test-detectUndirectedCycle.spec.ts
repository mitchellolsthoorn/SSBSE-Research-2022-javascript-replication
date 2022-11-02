export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueo7Mt9JP = -3.5951301563510434;
		const _arrayValue415i7w = null;
		const _arrayValueDgJUmr = "67s59kQFkoM0obY2NLy";
		const _arrayValue1X5yWq = null;
		const _returnValuea07vZOP = [_arrayValueo7Mt9JP, _arrayValue415i7w, _arrayValueDgJUmr, _arrayValue1X5yWq]
		const _getAllVerticesUOU31Fo = () => { return _returnValuea07vZOP };
		const _graph7KOVPq = {
			"getAllVertices": _getAllVerticesUOU31Fo
	}
		const _returnValueQIcPtHe = await detectUndirectedCycle(_graph7KOVPq)
	});
})