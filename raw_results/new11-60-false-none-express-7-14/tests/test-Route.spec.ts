export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _arrayValueeuAWcb9 = "ZlpSSQw3hWG4oeTTcsOc6BDvTxdXfvQTfkDEpV4vaEJhoRkVOtDHpm3GMOhHF43L";
		const _returnValuezB1Zh5 = 2.1594040051883994;
		const _arrayValueIoCbsmN = () => { return _returnValuezB1Zh5 };
		const _arrayValueShZqK87 = true;
		const _pathAkBkxB = [_arrayValueeuAWcb9, _arrayValueIoCbsmN, _arrayValueShZqK87]
		const _Routep8WE2Gv = new Route(_pathAkBkxB)
		const _methodciYFCwj = "OS9d97RNiFJyFPq1aQHygT9rCxsD23tMD7owJK4RlhZUm0UDtfU4a2FOrNNqlkoFUF4Nnri2p6lKdEvYAgEuNRxBkxbmvc";
		const _returnValueYq2gLUr = await _Routep8WE2Gv._handles_method(_methodciYFCwj)
		const _returnValueiO5ZmIF = await _Routep8WE2Gv.all()
		const _reqfxDSPFG = "N5tOtPaz0sQQebLom6irihaSOKet9M0tf4jl7";
		const _respshScZ = true;
		const _returnValueZvysXEo = 4.240685110711874;
		const _doneWQnnpS2 = () => { return _returnValueZvysXEo };
		const _returnValueJ2QbVt7 = await _Routep8WE2Gv.dispatch(_reqfxDSPFG, _respshScZ, _doneWQnnpS2)
	});

	it('test for Route', async () => {
		const _pathrCq69o5 = null;
		const _RoutebjluGdp = new Route(_pathrCq69o5)
		const _returnValueFgOKzaI = await _RoutebjluGdp._options()
		const _returnValuemHyGdIv = await _RoutebjluGdp.all()
		const _reqjYlYlVq = null;
		const _res2cbTiA = true;
		const _doneRib8E3P = {
		
	}
		const _returnValuehCgPsBf = await _RoutebjluGdp.dispatch(_reqjYlYlVq, _res2cbTiA, _doneRib8E3P)
	});
})