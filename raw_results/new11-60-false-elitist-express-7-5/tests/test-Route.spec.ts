export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _pathQal5QYS = 4.7843432089432625;
		const _RoutechH6jO4 = new Route(_pathQal5QYS)
		const _returnValuenj4H5Tj = null;
		const _routeIkwjlAU = () => { return _returnValuenj4H5Tj };
		const _reqo5RRjKH = {
			"route": _routeIkwjlAU
	}
		const _arrayValueS8y54pp = false;
		const _arrayValuePCDA4HS = {
		
	}
		const _resjDm869 = [_arrayValueS8y54pp, _arrayValuePCDA4HS]
		const _returnValue4xIYjl = "kPdDdvPxniz0vwPtLeLJ8pHzxiqcWddJSZGgyx8ItyOkk77lMjfo7XS7UvHJ2691rrh6";
		const _doneNE6fBTK = () => { return _returnValue4xIYjl };
		const _returnValueWW7srGt = await _RoutechH6jO4.dispatch(_reqo5RRjKH, _resjDm869, _doneNE6fBTK)
		const _returnValueP10vT9Q = await _RoutechH6jO4.all()
		const _returnValuejW2fVsA = null;
		const _arrayValueOzm2HwI = () => { return _returnValuejW2fVsA };
		const _arrayValueNLcoyJ = false;
		const _arrayValueuReTZWF = undefined;
		const _arrayValueTj2Krdy = -0.6340657447252607;
		const _methodKanlG5W = [_arrayValueOzm2HwI, _arrayValueNLcoyJ, _arrayValueuReTZWF, _arrayValueTj2Krdy]
		const _returnValuea3L43bZ = await _RoutechH6jO4._handles_method(_methodKanlG5W)
		const _returnValueCauj5gA = await _RoutechH6jO4._options()
	});

	it('test for Route', async () => {
		const _pathYTNKEqy = null;
		const _RouteDzh6QXu = new Route(_pathYTNKEqy)
		const _returnValue2dVrkS = await _RouteDzh6QXu._options()
		const _arrayValueKFqMORF = {
		
	}
		const _returnValueAqYPO69 = [_arrayValueKFqMORF]
		const _reqfwSdzWN = () => { return _returnValueAqYPO69 };
		const _resZDnkJla = null;
		const _returnValuedWbqarX = 8.703863522587575;
		const _doneCn1n0We = () => { return _returnValuedWbqarX };
		const _returnValueBv8pQb = await _RouteDzh6QXu.dispatch(_reqfwSdzWN, _resZDnkJla, _doneCn1n0We)
		const _returnValuetAWXH4T = null;
		const _toLowerCasedxCYlje = () => { return _returnValuetAWXH4T };
		const _methodHVDfhAo = {
			"toLowerCase": _toLowerCasedxCYlje
	}
		const _returnValueu7ZHRCG = await _RouteDzh6QXu._handles_method(_methodHVDfhAo)
	});
})