export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _pathyCecovU = undefined;
		const _RouteP2yx9ty = new Route(_pathyCecovU)
		const _reqNvSkjb = 8.960754725212073;
		const _resbrlOzqu = "uECJXlxhTdGqQIBXdrtLzAF5wmjrJOzxoxG";
		const _returnValueS4TERAX = {
		
	}
		const _doneKBc3CZT = () => { return _returnValueS4TERAX };
		const _returnValuerXyDaGm = await _RouteP2yx9ty.dispatch(_reqNvSkjb, _resbrlOzqu, _doneKBc3CZT)
		const _returnValueiOQzPMT = 0.5940756421896012;
		const _toLowerCasewVGU3UK = () => { return _returnValueiOQzPMT };
		const _methodG8oQwvl = {
			"toLowerCase": _toLowerCasewVGU3UK
	}
		const _returnValueaTytlUY = await _RouteP2yx9ty._handles_method(_methodG8oQwvl)
		const _routeGJzrvBO = "jezC5RGO0LYf9VEpLOwvoZVnR8V4UyLddgIiI2uvUksCjscYATWUVqhY8EJFr55bFVWsi";
		const _reqVaNTZbN = {
			"route": _routeGJzrvBO
	}
		const _resPHotERV = {
		
	}
		const _doneYiOxrHo = undefined;
		const _returnValuevMcEA1o = await _RouteP2yx9ty.dispatch(_reqVaNTZbN, _resPHotERV, _doneYiOxrHo)
		const _returnValueP9D2GFA = 6.078321997991079;
		const _returnValueP20fndS = () => { return _returnValueP9D2GFA };
		const _routeMrEZEFC = () => { return _returnValueP20fndS };
		const _reqkD15RC2 = {
			"route": _routeMrEZEFC
	}
		const _resUygMffx = undefined;
		const _returnValuebdO8jqC = undefined;
		const _doneLOfotuo = () => { return _returnValuebdO8jqC };
		const _returnValueRxpp7xj = await _RouteP2yx9ty.dispatch(_reqkD15RC2, _resUygMffx, _doneLOfotuo)
	});

	it('test for Route', async () => {
		const _arrayValueW4SLnO2 = 1.8835626371715168;
		const _arrayValueaMgPylQ = {
		
	}
		const _pathBfMgbvF = [_arrayValueW4SLnO2, _arrayValueaMgPylQ]
		const _RouteUs9bUcT = new Route(_pathBfMgbvF)
		const _returnValueCEY3KPw = "EPoC1EgCz4LmO9nJ80V9iCRM6D21ugbGAD869INrxXAGCdyquOJk";
		const _toLowerCasedOKA2R8 = () => { return _returnValueCEY3KPw };
		const _methodvJbjJXJ = {
			"toLowerCase": _toLowerCasedOKA2R8
	}
		const _returnValuefrsbfK3 = await _RouteUs9bUcT._handles_method(_methodvJbjJXJ)
		const _returnValueqSWWga6 = await _RouteUs9bUcT._options()
		const _returnValueFu0RnXY = await _RouteUs9bUcT.all()
		const _returnValuemfqPYDw = await _RouteUs9bUcT._options()
	});
})