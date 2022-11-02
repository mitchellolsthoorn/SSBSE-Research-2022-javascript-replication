export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputeAwFc0k = "dtE7iqzNE";
		const _formatSm34RF3 = true;
		const _arrayValueKcwZJxg = {
		
	}
		const _arrayValueOjt3EvT = null;
		const _localeUlf6eGK = [_arrayValueKcwZJxg, _arrayValueOjt3EvT]
		const _isUTCGWRqXyw = {
		
	}
		const _strictkqycjnT = false;
		const __izIc2JgC = "laqAFzigGYTDfDmXNea8WqEdp0QV3LgQhCUaV0IXtotmWX6bDotLItU9yrCCJPfkTCoqQN2KgV87hU2i15Ndn7";
		const __fal2dZa = "PaSQbklBxJqcmiB0DIRl5RjItgVyKE2GqINMETfGRfHpc4d6PZsWmFzsTk4GRd8xUH1rCd8toxh";
		const _returnValueQtaAF4g = -0.5175542790066316;
		const _returnValueUCjgiZS = () => { return _returnValueQtaAF4g };
		const __localesVSgpNU = () => { return _returnValueUCjgiZS };
		const __isUTCIpqAF6f = {
		
	}
		const __strictODcLYh = -0.8278787995811889;
		const _configqjJY17C = {
			"input": _inputeAwFc0k,
		"format": _formatSm34RF3,
		"locale": _localeUlf6eGK,
		"isUTC": _isUTCGWRqXyw,
		"strict": _strictkqycjnT,
		"_i": __izIc2JgC,
		"_f": __fal2dZa,
		"_locale": __localesVSgpNU,
		"_isUTC": __isUTCIpqAF6f,
		"_strict": __strictODcLYh
	}
		const _returnValueLcoAOpJ = await configFromObject(_configqjJY17C)
	});
})