export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _arrayValuemHkgEUb = 5.249432303428218;
		const _arrayValueN54BAe9 = [_arrayValuemHkgEUb]
		const _arrayValuekwWOhh8 = null;
		const _pathLq2dcEz = [_arrayValueN54BAe9, _arrayValuekwWOhh8]
		const _Routemo15g4T = new Route(_pathLq2dcEz)
		const _returnValuejD07Yxj = await _Routemo15g4T.all()
		const _returnValueTjeInJW = await _Routemo15g4T._options()
		const _returnValuekMCboSp = await _Routemo15g4T._options()
	});

	it('test for Route', async () => {
		const _pathUXBfJwC = 4.354606189408001;
		const _RouteC5vzka5 = new Route(_pathUXBfJwC)
		const _reqvWuGfOX = {
		
	}
		const _resIgcTZxk = undefined;
		const _donefu8dZoE = null;
		const _returnValueGYHEdHE = await _RouteC5vzka5.dispatch(_reqvWuGfOX, _resIgcTZxk, _donefu8dZoE)
		const _returnValuemNEF7IK = await _RouteC5vzka5.all()
		const _returnValueTpDsUw8 = await _RouteC5vzka5._options()
		const _returnValueRuKGCdf = await _RouteC5vzka5._options()
	});

	it('test for Route', async () => {
		const _pathJaemcNS = undefined;
		const _RouteJWATyB = new Route(_pathJaemcNS)
		const _method76slVa = null;
		const _returnValueTwHfhZb = await _RouteJWATyB._handles_method(_method76slVa)
	});

	it('test for Route', async () => {
		const _arrayValueKLcShH3 = undefined;
		const _arrayValueMpvaKHZ = undefined;
		const _arrayValuehHuU3WR = false;
		const _arrayValueHQFbTTN = undefined;
		const _pathCsPYRNb = [_arrayValueKLcShH3, _arrayValueMpvaKHZ, _arrayValuehHuU3WR, _arrayValueHQFbTTN]
		const _RoutepCC0qn = new Route(_pathCsPYRNb)
		const _methodqo8NFny = "6L0z2fNIzBzj7kOasLqmpJ6VjrN5uvVurSPoGhaHqbaBObGIDazyUFZd2NCrNEFmf8vwLVqKMJfFbpJwjBgb";
		const _returnValueb9rKcH3 = await _RoutepCC0qn._handles_method(_methodqo8NFny)
		const _returnValueBy3ICRF = null;
		const _methodBizEfjs = () => { return _returnValueBy3ICRF };
		const _returnValuegsIkZVO = await _RoutepCC0qn._handles_method(_methodBizEfjs)
		const _methodI4PQA4K = true;
		const _returnValueheVz6hN = await _RoutepCC0qn._handles_method(_methodI4PQA4K)
		const _returnValueGeoRur7 = await _RoutepCC0qn.all()
		const _returnValueKvgc6RB = await _RoutepCC0qn.all()
	});
})