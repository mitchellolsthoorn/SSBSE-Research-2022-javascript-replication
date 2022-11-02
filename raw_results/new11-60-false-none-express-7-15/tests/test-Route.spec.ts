export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _arrayValueuO8QR1j = null;
		const _arrayValuewIP9FcT = [_arrayValueuO8QR1j]
		const _arrayValueREc50GA = false;
		const _arrayValuejJffVaK = "OWgGOITsmDJtL0hLPDvr5CP5YeQfYC8BOiGMfxzIDYxtPTPaX6DW425f123uSpRp6";
		const _pathmQvgszu = [_arrayValuewIP9FcT, _arrayValueREc50GA, _arrayValuejJffVaK]
		const _Routeh5RdaOK = new Route(_pathmQvgszu)
		const _reqGqo7klI = undefined;
		const _resAnE8lKD = null;
		const _returnValuecfaqqZG = undefined;
		const _donePYNEJ5E = () => { return _returnValuecfaqqZG };
		const _returnValueMlO46wF = await _Routeh5RdaOK.dispatch(_reqGqo7klI, _resAnE8lKD, _donePYNEJ5E)
	});

	it('test for Route', async () => {
		const _pathyWXTRpB = undefined;
		const _RoutecSfrMea = new Route(_pathyWXTRpB)
		const _returnValueB0EIrAV = await _RoutecSfrMea.all()
		const _returnValuefspLDWQ = await _RoutecSfrMea._options()
		const _returnValuepAklegC = await _RoutecSfrMea._options()
		const _arrayValuekDdSxyE = undefined;
		const _methodtMsctbF = [_arrayValuekDdSxyE]
		const _returnValueXA8XWWE = await _RoutecSfrMea._handles_method(_methodtMsctbF)
	});

	it('test for Route', async () => {
		const _pathU1SmbV = null;
		const _RouteMVjj4r1 = new Route(_pathU1SmbV)
		const _methodiCY6cN1 = "zuL9avzlwMzPDOO8saXO4WEHM47mm";
		const _returnValuelhMSJxn = await _RouteMVjj4r1._handles_method(_methodiCY6cN1)
		const _returnValuel8tG8ST = undefined;
		const _reqY5eDxB9 = () => { return _returnValuel8tG8ST };
		const _resSbdap7R = null;
		const _doneeVT3NQu = "gf1jMcHyU5yHeK3vUX9jWWbBfgCvKL3wFjO5CXAIOpVSGDFu3dcet6AuMH6LZaTBCke8qu9mLspm1WBAdALJpiXp9";
		const _returnValueLmHu8s9 = await _RouteMVjj4r1.dispatch(_reqY5eDxB9, _resSbdap7R, _doneeVT3NQu)
		const _returnValueBXTdDxE = await _RouteMVjj4r1._options()
		const _returnValuejUrdv6f = await _RouteMVjj4r1._options()
		const _arrayValuevpvB3JH = 8.443128075424944;
		const _arrayValuenAbCsiI = "AJqSfaRFu";
		const _reqKHumHoc = [_arrayValuevpvB3JH, _arrayValuenAbCsiI]
		const _resvMpnuvA = undefined;
		const _doneP3VmLBM = null;
		const _returnValueANOPpHh = await _RouteMVjj4r1.dispatch(_reqKHumHoc, _resvMpnuvA, _doneP3VmLBM)
	});
})