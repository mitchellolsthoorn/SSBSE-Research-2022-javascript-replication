export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueGO991NN = 1.3259376765422353;
		const _arrayValueaRtFCg0 = -0.8097095296900712;
		const _arrayValueFKvGdLp = [_arrayValueGO991NN, _arrayValueaRtFCg0]
		const _arrayValuehUvLw2Y = null;
		const _arrayValueyVq2xcp = undefined;
		const _arrayValueHEdbHdw = [_arrayValueFKvGdLp, _arrayValuehUvLw2Y, _arrayValueyVq2xcp]
		const _arrayValueMPilk8O = undefined;
		const _returnValueeeKNes5 = [_arrayValueHEdbHdw, _arrayValueMPilk8O]
		const _getAllVerticesxLErkbu = () => { return _returnValueeeKNes5 };
		const _graphlQ3DWYH = {
			"getAllVertices": _getAllVerticesxLErkbu
	}
		const _returnValueKvALMP = await detectUndirectedCycle(_graphlQ3DWYH)
	});
})