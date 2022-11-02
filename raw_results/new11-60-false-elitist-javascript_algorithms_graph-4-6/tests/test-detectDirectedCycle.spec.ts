export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueSUvNEX = null;
		const _getAllVerticesEZr2fXR = () => { return _returnValueSUvNEX };
		const _graphTAYq51k = {
			"getAllVertices": _getAllVerticesEZr2fXR
	}
		const _returnValuegKugVEP = await detectDirectedCycle(_graphTAYq51k)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueLX4Lpb6 = []
		const _getAllVerticesdZOhVa5 = () => { return _returnValueLX4Lpb6 };
		const _graphmkoa3o4 = {
			"getAllVertices": _getAllVerticesdZOhVa5
	}
		const _returnValueNrKgqGt = await detectDirectedCycle(_graphmkoa3o4)
	});
})