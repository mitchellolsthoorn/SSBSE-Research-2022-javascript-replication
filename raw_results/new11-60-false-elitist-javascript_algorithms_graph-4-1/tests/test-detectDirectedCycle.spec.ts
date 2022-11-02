export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuenLIlNmQ = null;
		const _getAllVerticeseFw2Pc2 = () => { return _returnValuenLIlNmQ };
		const _graphJ10F5Eo = {
			"getAllVertices": _getAllVerticeseFw2Pc2
	}
		const _returnValuezfdM8RM = await detectDirectedCycle(_graphJ10F5Eo)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueeD7avrt = []
		const _getAllVerticesXFuiuXg = () => { return _returnValueeD7avrt };
		const _graphf2TyAzM = {
			"getAllVertices": _getAllVerticesXFuiuXg
	}
		const _returnValuelZGtOlf = await detectDirectedCycle(_graphf2TyAzM)
	});
})