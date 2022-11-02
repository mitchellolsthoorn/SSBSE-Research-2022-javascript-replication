export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");

describe('Route', () => {
	it('test for Route', async () => {
		const _pathCtk94IN = "zi3oAl2H97K9rfGRQKmaOBaOkmaqYnKUSoXj8SAa23ae1FuWFA5olCoRqp9eCw0heYCl1gJ2R";
		const _RouteM09acNP = new Route(_pathCtk94IN)
		const _returnValueCzdMX8I = await _RouteM09acNP._options()
		const _returnValueKVG2p2t = await _RouteM09acNP.all()
		const _returnValuetyljxcv = true;
		const _routeOKkJRwN = () => { return _returnValuetyljxcv };
		const _reqWxUrrg7 = {
			"route": _routeOKkJRwN
	}
		const _arrayValueCuc3YTz = undefined;
		const _resvnGiTmz = [_arrayValueCuc3YTz]
		const _returnValueQYq9RoS = -7.2922801105065345;
		const _returnValueo8pKsoy = () => { return _returnValueQYq9RoS };
		const _doneAWbtFZw = () => { return _returnValueo8pKsoy };
		const _returnValuedQxXPnd = await _RouteM09acNP.dispatch(_reqWxUrrg7, _resvnGiTmz, _doneAWbtFZw)
	});

	it('test for Route', async () => {
		const _pathmUDwj1z = false;
		const _RouteHsM2BGd = new Route(_pathmUDwj1z)
		const _returnValueh5zWvpU = await _RouteHsM2BGd._options()
		const _returnValueCSGbBa9 = {
		
	}
		const _toLowerCaseZxgfndb = () => { return _returnValueCSGbBa9 };
		const _methodtZrU4bK = {
			"toLowerCase": _toLowerCaseZxgfndb
	}
		const _returnValueumSP1Q6 = await _RouteHsM2BGd._handles_method(_methodtZrU4bK)
	});
})