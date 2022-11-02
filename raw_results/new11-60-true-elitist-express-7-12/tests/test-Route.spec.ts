export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");

describe('Route', () => {
	it('test for Route', async () => {
		const _pathLpP2KhE = "5zuhLFjzs4egCw19ReKhFc6wpqjazBFrhYL2WCRyrvbzXaBgjmq9inuO";
		const _RouteFRD4FRM = new Route(_pathLpP2KhE)
		const _returnValueYjIK7mp = false;
		const _toLowerCaseCKOMWbB = () => { return _returnValueYjIK7mp };
		const _methodmnXiTdI = {
			"toLowerCase": _toLowerCaseCKOMWbB
	}
		const _returnValueO8Ejw6w = await _RouteFRD4FRM._handles_method(_methodmnXiTdI)
		const _returnValueuRsetGh = await _RouteFRD4FRM._options()
	});

	it('test for Route', async () => {
		const _pathsT25UOr = null;
		const _RoutePlgvicS = new Route(_pathsT25UOr)
		const _routegOw9F6D = undefined;
		const _reqm6s9xHO = {
			"route": _routegOw9F6D
	}
		const _resnFvZ3C0 = null;
		const _returnValueRx5hSUo = 8.688915242239332;
		const _donewv0tDkq = () => { return _returnValueRx5hSUo };
		const _returnValueSlUSqlZ = await _RoutePlgvicS.dispatch(_reqm6s9xHO, _resnFvZ3C0, _donewv0tDkq)
		const _returnValueMzb1Uir = await _RoutePlgvicS._options()
		const _returnValueoC7bAJD = await _RoutePlgvicS._options()
	});

	it('test for Route', async () => {
		const _pathDO4E05o = 7.980210980558855;
		const _RouteyltvcCD = new Route(_pathDO4E05o)
		const _returnValuerYqskFG = await _RouteyltvcCD.all()
	});
})