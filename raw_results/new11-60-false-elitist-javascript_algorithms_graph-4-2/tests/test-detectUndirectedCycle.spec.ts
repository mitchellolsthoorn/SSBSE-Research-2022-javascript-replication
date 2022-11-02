export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuevHVMNO6 = null;
		const _getAllVerticeso24yCOR = () => { return _returnValuevHVMNO6 };
		const _graph8OJnBO = {
			"getAllVertices": _getAllVerticeso24yCOR
	}
		const _returnValue1wSysD = await detectUndirectedCycle(_graph8OJnBO)
	});
})