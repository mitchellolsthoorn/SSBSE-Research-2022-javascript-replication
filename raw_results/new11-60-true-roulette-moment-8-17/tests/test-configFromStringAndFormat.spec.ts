export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _arrayValueQbORFBr = "tPsahzsRsLA3wXpwwJUYcWx";
		const _arrayValuenVrEf31 = 5.55296527804359;
		const _arrayValueKywJW17 = "e9TIbA07HccYO3udAhbm8RYEvZphsLBn9sLqL1uQLyfMr1yt7ZEo9EACuDnNwUFkNOzF3hlKaGDyNDC4odC2mtpNJM2";
		const _arrayValuedNOqbCz = [_arrayValueQbORFBr, _arrayValuenVrEf31, _arrayValueKywJW17]
		const _arrayValueEdZeuZL = null;
		const _arrayValueB2ERi6W = true;
		const _arrayValueCb0Vdi9 = [_arrayValueB2ERi6W]
		const _configis9gVzK = [_arrayValuedNOqbCz, _arrayValueEdZeuZL, _arrayValueCb0Vdi9]
		const _returnValuezocBTZU = await configFromStringAndFormat(_configis9gVzK)
	});

	it('test for configFromStringAndFormat', async () => {
		const _inputcGxH3Mj = undefined;
		const _formatgDEPkad = null;
		const _localeKg18En = false;
		const _isUTCykKgW2 = true;
		const _strictuCNH15c = "KvBF7KiKYFmFtq39R7aEKg3ae6guRvGl4tfREgyfdk9wrwD";
		const __iWrJtmAf = -1.6784556967985331;
		const __fDfWbaQT = "x9Ie";
		const __localeCFLygC3 = {
		
	}
		const __isUTCbXQox4H = undefined;
		const _arrayValuehc2j98d = {
		
	}
		const __strictVNBEyjM = [_arrayValuehc2j98d]
		const _configWIqYip1 = {
			"input": _inputcGxH3Mj,
		"format": _formatgDEPkad,
		"locale": _localeKg18En,
		"isUTC": _isUTCykKgW2,
		"strict": _strictuCNH15c,
		"_i": __iWrJtmAf,
		"_f": __fDfWbaQT,
		"_locale": __localeCFLygC3,
		"_isUTC": __isUTCbXQox4H,
		"_strict": __strictVNBEyjM
	}
		const _returnValueMeNXEDa = await configFromStringAndFormat(_configWIqYip1)
	});
})