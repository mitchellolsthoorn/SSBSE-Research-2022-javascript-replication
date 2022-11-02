export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueDe4wXyg = 4.622710721211456;
		const _getAllVerticesnPZGFGT = () => { return _returnValueDe4wXyg };
		const _graphZpXi3W5 = {
			"getAllVertices": _getAllVerticesnPZGFGT
	}
		const _returnValueXaX9sN2 = await detectDirectedCycle(_graphZpXi3W5)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValuePJyyWjk = []
		const _getAllVerticesvCEty17 = () => { return _returnValuePJyyWjk };
		const _graphGARiCpZ = {
			"getAllVertices": _getAllVerticesvCEty17
	}
		const _returnValuerVevGKX = await detectDirectedCycle(_graphGARiCpZ)
	});
})