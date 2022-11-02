export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueHCoZOTI = 8.68383000823335;
		const _getAllVerticeskUAEzrU = () => { return _returnValueHCoZOTI };
		const _returnValueYtPOWL2 = -4.679665483275148;
		const _findEdgefmbbwbm = () => { return _returnValueYtPOWL2 };
		const _graphMt1mVkx = {
			"getAllVertices": _getAllVerticeskUAEzrU,
		"findEdge": _findEdgefmbbwbm
	}
		const _returnValueA7BHbRg = await graphBridges(_graphMt1mVkx)
	});
})