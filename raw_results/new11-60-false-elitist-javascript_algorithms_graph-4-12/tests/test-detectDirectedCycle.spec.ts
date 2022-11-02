export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueKkKF5Z = undefined;
		const _getAllVerticesq6dqv1 = () => { return _returnValueKkKF5Z };
		const _graphI5tp01 = {
			"getAllVertices": _getAllVerticesq6dqv1
	}
		const _returnValuemfAtSS = await detectDirectedCycle(_graphI5tp01)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueRemtoh = []
		const _getAllVerticeshIVwSd = () => { return _returnValueRemtoh };
		const _graphyCfN1bd = {
			"getAllVertices": _getAllVerticeshIVwSd
	}
		const _returnValueZKJA1hK = await detectDirectedCycle(_graphyCfN1bd)
	});
})