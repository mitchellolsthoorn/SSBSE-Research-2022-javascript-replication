export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _path0XECmf = undefined;
		const _RoutetaeZ9Ku = new Route(_path0XECmf)
		const _returnValueWmX5yrX = null;
		const _routeBxGmjLR = () => { return _returnValueWmX5yrX };
		const _reqJxAeKv = {
			"route": _routeBxGmjLR
	}
		const _resFvVuX7 = undefined;
		const _returnValueJ5n25KB = 2.1410890482524145;
		const _doneu9zWiFA = () => { return _returnValueJ5n25KB };
		const _returnValueYpTupBr = await _RoutetaeZ9Ku.dispatch(_reqJxAeKv, _resFvVuX7, _doneu9zWiFA)
		const _methodOM2PnG = -0.11894610923905446;
		const _returnValuevNVbG7 = await _RoutetaeZ9Ku._handles_method(_methodOM2PnG)
	});

	it('test for Route', async () => {
		const _arrayValuePbDy9RK = null;
		const _arrayValueOWRulW5 = "vZC6rc";
		const _pathKt3FhR = [_arrayValuePbDy9RK, _arrayValueOWRulW5]
		const _Routezcm6jD5 = new Route(_pathKt3FhR)
		const _returnValuelBLeJXp = await _Routezcm6jD5.all()
		const _returnValueECSw6JR = await _Routezcm6jD5.all()
		const _returnValuej52qPkT = await _Routezcm6jD5._options()
		const _returnValuelUR5cjh = true;
		const _routeSPlqVBa = () => { return _returnValuelUR5cjh };
		const _reqSFzUbjd = {
			"route": _routeSPlqVBa
	}
		const _arrayValue7Ii2Yv = "nVrvMaXAGGgftj2GeDNxal3tvptOMTOrnavw6BovDejJDgPzNe";
		const _resHPbzG08 = [_arrayValue7Ii2Yv]
		const _donebbth1u = undefined;
		const _returnValueEFxlg93 = await _Routezcm6jD5.dispatch(_reqSFzUbjd, _resHPbzG08, _donebbth1u)
	});

	it('test for Route', async () => {
		const _pathZiUyNyw = false;
		const _Routej8Y04fB = new Route(_pathZiUyNyw)
		const _returnValueFKpK6Xk = undefined;
		const _toLowerCasegxsPkJt = () => { return _returnValueFKpK6Xk };
		const _methodA4vU2g = {
			"toLowerCase": _toLowerCasegxsPkJt
	}
		const _returnValueQIvebeZ = await _Routej8Y04fB._handles_method(_methodA4vU2g)
		const _returnValueuTJO1rT = await _Routej8Y04fB._options()
	});
})