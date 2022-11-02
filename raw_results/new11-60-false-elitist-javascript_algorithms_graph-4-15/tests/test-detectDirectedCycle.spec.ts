export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValuekFtYPLT = 3.6073177497846096;
		const _returnValuetAXmPQ = "XhFGJhNvq7dTSNehJsy9EVsBqtuXF5UwyWkMZdsw5XRgguLiBaqkcwUs4";
		const _arrayValued2Wh5mv = () => { return _returnValuetAXmPQ };
		const _arrayValueOtdLnJg = null;
		const _graphPR47Qm8 = [_arrayValuekFtYPLT, _arrayValued2Wh5mv, _arrayValueOtdLnJg]
		const _returnValueTnPXXIh = await detectDirectedCycle(_graphPR47Qm8)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValuePzj3pmu = []
		const _getAllVerticesDnabQLv = () => { return _returnValuePzj3pmu };
		const _graphPX9vWgC = {
			"getAllVertices": _getAllVerticesDnabQLv
	}
		const _returnValuejN1zHR7 = await detectDirectedCycle(_graphPX9vWgC)
	});
})