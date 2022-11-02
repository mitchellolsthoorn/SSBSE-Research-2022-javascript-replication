export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueiLgyyeT = undefined;
		const _arrayValueqrr1g6Q = -1.3948953634527808;
		const _arrayValueMSHL24T = -4.084417730270156;
		const _arrayValueYNjLEsE = undefined;
		const _arrayValueUIlI2m = null;
		const _arrayValueZmlIp8n = 2.3874334640286;
		const _arrayValueW5NEoQ = [_arrayValueYNjLEsE, _arrayValueUIlI2m, _arrayValueZmlIp8n]
		const _arrayValuelYxM1zO = [_arrayValueMSHL24T, _arrayValueW5NEoQ]
		const _arrayValueRpDLQVC = [_arrayValueiLgyyeT, _arrayValueqrr1g6Q, _arrayValuelYxM1zO]
		const _arrayValuez5l7ehr = {
		
	}
		const _getAllVerticesjCXBpSL = [_arrayValueRpDLQVC, _arrayValuez5l7ehr]
		const _graphzY88AWM = {
			"getAllVertices": _getAllVerticesjCXBpSL
	}
		const _returnValueRPW2I8n = await detectUndirectedCycle(_graphzY88AWM)
	});
})