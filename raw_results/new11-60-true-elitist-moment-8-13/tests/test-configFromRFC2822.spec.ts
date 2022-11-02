export {}
import {configFromRFC2822} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromRFC2822', () => {
	it('test for configFromRFC2822', async () => {
		const _inputa0yc6VO = "u";
		const _formatry4bRVR = 7.4568015020969725;
		const _localeooqykpI = null;
		const _isUTCWqnZ5ss = -8.406519890733858;
		const _strictAJm6Fav = 2.0966162597057565;
		const __iWm8ty0 = {
		
	}
		const __fFKYAiWl = undefined;
		const __localeiXjGGPh = undefined;
		const _returnValuevbA5GXA = {
		
	}
		const _returnValueRfgmxqe = () => { return _returnValuevbA5GXA };
		const _arrayValuejMmdk7i = () => { return _returnValueRfgmxqe };
		const _arrayValueIwUnU6F = null;
		const _arrayValuenqaAaJA = 0.9955467640587674;
		const __isUTCSWqRX1t = [_arrayValuejMmdk7i, _arrayValueIwUnU6F, _arrayValuenqaAaJA]
		const __strictmeRyfIq = true;
		const _configJBf4T7o = {
			"input": _inputa0yc6VO,
		"format": _formatry4bRVR,
		"locale": _localeooqykpI,
		"isUTC": _isUTCWqnZ5ss,
		"strict": _strictAJm6Fav,
		"_i": __iWm8ty0,
		"_f": __fFKYAiWl,
		"_locale": __localeiXjGGPh,
		"_isUTC": __isUTCSWqRX1t,
		"_strict": __strictmeRyfIq
	}
		const _returnValuesoruHcg = await configFromRFC2822(_configJBf4T7o)
	});

	it('test for configFromRFC2822', async () => {
		const _inputYt5Zws = undefined;
		const _formatVj0gr4C = {
		
	}
		const _localemR2oMrM = false;
		const _isUTCO1JGwAx = false;
		const _returnValue0E34aM = "TGFvHgFBjs5MgLAmvNXoO22xdhchrsKzQ6bFllliaIAtA1IGrRldluxklgw3ICbBD8K6LBS7WridyBEJPR2uAtSW7FeF";
		const _strict9svk38 = () => { return _returnValue0E34aM };
		const __iIIQdhSx = "C6cvL5SOfatcdg47ZfZIY8grSR58G7chHMfx";
		const __fjtrT2BT = true;
		const __localeI1OTE8K = null;
		const __isUTCzSLgwy = null;
		const __strictv3cvEA2 = 1.4403950972702884;
		const _configI8mO0xY = {
			"input": _inputYt5Zws,
		"format": _formatVj0gr4C,
		"locale": _localemR2oMrM,
		"isUTC": _isUTCO1JGwAx,
		"strict": _strict9svk38,
		"_i": __iIIQdhSx,
		"_f": __fjtrT2BT,
		"_locale": __localeI1OTE8K,
		"_isUTC": __isUTCzSLgwy,
		"_strict": __strictv3cvEA2
	}
		const _returnValueFC6RzYb = await configFromRFC2822(_configI8mO0xY)
	});
})