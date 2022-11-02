export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _pathq07Hc6z = -1.724033038770461;
		const _RouteS4fJ03o = new Route(_pathq07Hc6z)
		const _returnValueTfwlPMe = await _RouteS4fJ03o.all()
		const _returnValuemgfVC4L = await _RouteS4fJ03o.all()
		const _methodujnIIP4 = "cc9Wn3U3UX4NC9McVasr9D4Qhi7TYpoZQphXMBjW8gCPY6fe1om4ntBjBa";
		const _returnValueJiTm3Te = await _RouteS4fJ03o._handles_method(_methodujnIIP4)
	});

	it('test for Route', async () => {
		const _pathqIStOSE = -9.659448014475286;
		const _RoutedjPqpiI = new Route(_pathqIStOSE)
		const _returnValuelwqAq7y = await _RoutedjPqpiI._options()
		const _reqN3KooxJ = -4.257769359888139;
		const _returnValuep0d2SN0 = -2.447125276680464;
		const _resqnICHgp = () => { return _returnValuep0d2SN0 };
		const _arrayValueM0ciLFQ = 7.578853510656348;
		const _doneu0Sgr9u = [_arrayValueM0ciLFQ]
		const _returnValuefdjg5WD = await _RoutedjPqpiI.dispatch(_reqN3KooxJ, _resqnICHgp, _doneu0Sgr9u)
		const _reqiygTAf = 8.704600431564366;
		const _resHYt2cjk = undefined;
		const _doneqpaU7jY = null;
		const _returnValueZ45XKOi = await _RoutedjPqpiI.dispatch(_reqiygTAf, _resHYt2cjk, _doneqpaU7jY)
	});
})