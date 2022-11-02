export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueEylF7Z = false;
		const _getAllVerticesSI3SxOp = () => { return _returnValueEylF7Z };
		const _graphfT8IGw = {
			"getAllVertices": _getAllVerticesSI3SxOp
	}
		const _returnValue5gv9zO = await detectUndirectedCycle(_graphfT8IGw)
	});
})