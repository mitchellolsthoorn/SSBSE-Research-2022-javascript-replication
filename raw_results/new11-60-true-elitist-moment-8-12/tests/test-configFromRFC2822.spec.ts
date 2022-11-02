export {}
import {configFromRFC2822} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromRFC2822', () => {
	it('test for configFromRFC2822', async () => {
		const _inputhoS0Ow = "BeO7RtibN9EKU5xdYrKf3C2vBYhRrFEW7YS5KGWUquQ9j7V0T";
		const _formatHXaHX8B = null;
		const _localePOhjM2k = false;
		const _arrayValueMTYRv41 = 3.735519345440766;
		const _arrayValueaFKksmC = false;
		const _isUTCVlr1B8u = [_arrayValueMTYRv41, _arrayValueaFKksmC]
		const _strictTKMBbSP = false;
		const __iX6dU92 = -8.743531353463009;
		const _returnValue6RjXdr = {
		
	}
		const __frAHIPnh = () => { return _returnValue6RjXdr };
		const __localeHa6SL3m = -3.9111533444110265;
		const _arrayValueLXVXwUR = undefined;
		const _arrayValueKek2Brz = undefined;
		const _returnValue8jWjnT = null;
		const _arrayValueSF6YukJ = () => { return _returnValue8jWjnT };
		const __isUTCL5qEpsR = [_arrayValueLXVXwUR, _arrayValueKek2Brz, _arrayValueSF6YukJ]
		const _returnValueBfiFZjG = -9.333946287527707;
		const __strictB8omwAK = () => { return _returnValueBfiFZjG };
		const _configez3PAy0 = {
			"input": _inputhoS0Ow,
		"format": _formatHXaHX8B,
		"locale": _localePOhjM2k,
		"isUTC": _isUTCVlr1B8u,
		"strict": _strictTKMBbSP,
		"_i": __iX6dU92,
		"_f": __frAHIPnh,
		"_locale": __localeHa6SL3m,
		"_isUTC": __isUTCL5qEpsR,
		"_strict": __strictB8omwAK
	}
		const _returnValueLFpJV8n = await configFromRFC2822(_configez3PAy0)
	});

	it('test for configFromRFC2822', async () => {
		const _inputEpnTvfK = null;
		const _arrayValuegwvkYg = "AufoFQiYAKOBUIwRdlgP1tsG98NMVDQBrTufv2dj6bsVdsn19oVXIX0ixnEcVTYbwBzwNu86Q9vH2uGoaB7CLVO";
		const _arrayValueQvufu1P = null;
		const _formatdDefUwE = [_arrayValuegwvkYg, _arrayValueQvufu1P]
		const _localeO4xJBFV = undefined;
		const _isUTCNPr4dN5 = null;
		const _strictzv9E3B = {
		
	}
		const __iPwdhpLL = "zwQVwcv";
		const __fpqHnj1 = undefined;
		const __localeXzzKu5 = "l3wGp";
		const __isUTCZYGZFcl = undefined;
		const __strictlJUZouA = true;
		const _configHoRVwk = {
			"input": _inputEpnTvfK,
		"format": _formatdDefUwE,
		"locale": _localeO4xJBFV,
		"isUTC": _isUTCNPr4dN5,
		"strict": _strictzv9E3B,
		"_i": __iPwdhpLL,
		"_f": __fpqHnj1,
		"_locale": __localeXzzKu5,
		"_isUTC": __isUTCZYGZFcl,
		"_strict": __strictlJUZouA
	}
		const _returnValueIU4i468 = await configFromRFC2822(_configHoRVwk)
	});
})