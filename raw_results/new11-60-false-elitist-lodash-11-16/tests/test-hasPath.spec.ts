export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthqDhkr97 = "FLqSO2C1fHUa4KuGNQajBp4drLzEvIY7mjaOywsghCrHPQKDKiuAkGmxNmBJS7dqloYSiT3VbuiRQq9PuaOktSgx89AHRV6o";
		const _objecttxxc9sz = {
			"length": _lengthqDhkr97
	}
		const _pathRho8WXx = {
		
	}
		const _returnValueXAa1TL = await hasPath(_objecttxxc9sz, _pathRho8WXx)
	});

	it('test for hasPath', async () => {
		const _objectnomXGBo = undefined;
		const _returnValuePBnPWov = "KDTlpYIT9hdSbklG3xV8fSy2HyyS0mJ22";
		const _pathMpTjHA = () => { return _returnValuePBnPWov };
		const _returnValuepBpHJk = await hasPath(_objectnomXGBo, _pathMpTjHA)
	});
})