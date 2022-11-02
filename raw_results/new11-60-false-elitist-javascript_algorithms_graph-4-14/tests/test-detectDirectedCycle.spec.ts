export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueZYp1up = false;
		const _getAllVerticesIg9PwBP = () => { return _returnValueZYp1up };
		const _graphBP9KPI = {
			"getAllVertices": _getAllVerticesIg9PwBP
	}
		const _returnValuen9KFFVX = await detectDirectedCycle(_graphBP9KPI)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueadbpfhz = []
		const _getAllVerticesKlxp3aR = () => { return _returnValueadbpfhz };
		const _graphJpAuhjQ = {
			"getAllVertices": _getAllVerticesKlxp3aR
	}
		const _returnValueNah9Ae5 = await detectDirectedCycle(_graphJpAuhjQ)
	});
})