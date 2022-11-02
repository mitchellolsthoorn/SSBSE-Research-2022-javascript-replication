export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuewf0HtfC = 9.322308694726885;
		const _getAllVerticesiGE07s4 = () => { return _returnValuewf0HtfC };
		const _graphaY4LbfY = {
			"getAllVertices": _getAllVerticesiGE07s4
	}
		const _returnValuet05cKPn = await detectDirectedCycle(_graphaY4LbfY)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueNvcaPZ0 = []
		const _getAllVerticesOYDCqWW = () => { return _returnValueNvcaPZ0 };
		const _graphslgcoCg = {
			"getAllVertices": _getAllVerticesOYDCqWW
	}
		const _returnValueRs8gOBs = await detectDirectedCycle(_graphslgcoCg)
	});
})