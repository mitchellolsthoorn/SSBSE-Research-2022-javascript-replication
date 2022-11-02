export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueCZaU6MZ = -3.5119032580102294;
		const _getAllVerticesn3VodZ = () => { return _returnValueCZaU6MZ };
		const _graphinHz56j = {
			"getAllVertices": _getAllVerticesn3VodZ
	}
		const _returnValueqYfDVl0 = await detectDirectedCycle(_graphinHz56j)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueuVkm7Vy = []
		const _getAllVerticesj31PVoO = () => { return _returnValueuVkm7Vy };
		const _graphWGyTQ2x = {
			"getAllVertices": _getAllVerticesj31PVoO
	}
		const _returnValuevoUGDcv = await detectDirectedCycle(_graphWGyTQ2x)
	});
})