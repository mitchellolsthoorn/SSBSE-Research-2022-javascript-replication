export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _pathYuD2YCs = {
		
	}
		const _RouteDE9lly = new Route(_pathYuD2YCs)
		const _returnValuezPU7c3W = 4.732882620493882;
		const _toLowerCaseUBmRmzg = () => { return _returnValuezPU7c3W };
		const _methodiK7yKdv = {
			"toLowerCase": _toLowerCaseUBmRmzg
	}
		const _returnValuevaKgVG8 = await _RouteDE9lly._handles_method(_methodiK7yKdv)
		const _returnValueGGYVCMY = true;
		const _toLowerCaseXiE9LB = () => { return _returnValueGGYVCMY };
		const _methodriY1zsA = {
			"toLowerCase": _toLowerCaseXiE9LB
	}
		const _returnValue3zzrgD = await _RouteDE9lly._handles_method(_methodriY1zsA)
		const _returnValueos9RIY = "lV8ScoY0Vq4W";
		const _routey7i5xnX = () => { return _returnValueos9RIY };
		const _reqlwaONYq = {
			"route": _routey7i5xnX
	}
		const _resuIBRDk2 = "3fj";
		const _returnValueBerRQmi = -3.398598142611312;
		const _donetuXpUh = () => { return _returnValueBerRQmi };
		const _returnValueLFEfPWs = await _RouteDE9lly.dispatch(_reqlwaONYq, _resuIBRDk2, _donetuXpUh)
		const _arrayValueHWsUffM = {
		
	}
		const _returnValueC0piuBj = "hkaWfXsq4Xkktef5kSYrxrUHgGNRB3JzJtvu90bX0zwA2nO";
		const _arrayValuerGKKelw = () => { return _returnValueC0piuBj };
		const _arrayValueEjqtu6 = [_arrayValueHWsUffM, _arrayValuerGKKelw]
		const _arrayValuequukr6 = -6.2353118180945675;
		const _arrayValuenA1UY2k = undefined;
		const _returnValuefh0YVg7 = [_arrayValueEjqtu6, _arrayValuequukr6, _arrayValuenA1UY2k]
		const _routeMTE2xST = () => { return _returnValuefh0YVg7 };
		const _reqrY4Pa1S = {
			"route": _routeMTE2xST
	}
		const _resMOLyYny = false;
		const _returnValueFLXAgiz = "PNUhHuxgWnNzoYX8hOBTKgPSLU3UMM9lIWdd";
		const _donej3nEsNL = () => { return _returnValueFLXAgiz };
		const _returnValueF4vm1Ad = await _RouteDE9lly.dispatch(_reqrY4Pa1S, _resMOLyYny, _donej3nEsNL)
	});

	it('test for Route', async () => {
		const _pathnuoOcwu = "ojxtCd9CDkbfLw1JD8Cs7XsyLLWBIyPhMVWK99j0srWhDWeIjsEyK8CdI0yIGBTaLtJTyHqTNiYwiGO33xmejKJfWl4ic";
		const _RouteLC9Q8aO = new Route(_pathnuoOcwu)
		const _returnValuegYSR8oH = await _RouteLC9Q8aO._options()
		const _returnValuea0Vq3Wl = await _RouteLC9Q8aO._options()
	});

	it('test for Route', async () => {
		const _patha5GedP = 7.211417872035732;
		const _RouteqwBLqku = new Route(_patha5GedP)
		const _returnValueLqTMVaY = await _RouteqwBLqku.all()
		const _returnValueoQ43sq6 = undefined;
		const _routepGPK1F3 = () => { return _returnValueoQ43sq6 };
		const _reqfrBW1op = {
			"route": _routepGPK1F3
	}
		const _resaXKykfV = false;
		const _donegUaQDO = undefined;
		const _returnValueQU6aeDu = await _RouteqwBLqku.dispatch(_reqfrBW1op, _resaXKykfV, _donegUaQDO)
		const _returnValuereFoJm5 = await _RouteqwBLqku._options()
	});
})