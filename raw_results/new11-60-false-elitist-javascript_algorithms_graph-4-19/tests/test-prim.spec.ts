export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValuekaOMSM = undefined;
		const _arrayValuei1ZFHan = undefined;
		const _arrayValuennyKm82 = 0.1195087718634511;
		const _arrayValueedjsOyj = 3.2837557487753966;
		const _arrayValueL76Hajb = "nqBkyFzSqhcufNu07zuTdjpjueLuJRXSJ2zzR2md9OwUo7Gwi3RKag";
		const _arrayValueNTfvMC = [_arrayValuei1ZFHan, _arrayValuennyKm82, _arrayValueedjsOyj, _arrayValueL76Hajb]
		const _arrayValueUoPcbz0 = 7.099907321332935;
		const _arrayValueLMjR8Z3 = null;
		const _isDirectedbGtdO4X = [_arrayValuekaOMSM, _arrayValueNTfvMC, _arrayValueUoPcbz0, _arrayValueLMjR8Z3]
		const _arrayValuexrpk6Rf = null;
		const _returnValuekVC4Zks = [_arrayValuexrpk6Rf]
		const _getAllVerticesM7UF5KF = () => { return _returnValuekVC4Zks };
		const _graphvHUyGh = {
			"isDirected": _isDirectedbGtdO4X,
		"getAllVertices": _getAllVerticesM7UF5KF
	}
		const _returnValueZ7nuOz0 = await prim(_graphvHUyGh)
	});
})