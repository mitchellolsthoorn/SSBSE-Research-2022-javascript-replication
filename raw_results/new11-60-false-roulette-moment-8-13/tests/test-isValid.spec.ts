export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputG8gjfG6 = undefined;
		const _formatXyI55vz = false;
		const _localeTCZZtdF = "l4PP0QubKurOPYkxPkuckaGN643R3T3VfQXTaoIk8T12n335UUqdupLinuQQoiga1uiG9AymFmTie1Gpu97ATnOg";
		const _arrayValueWKVxP2R = true;
		const _arrayValueelQdt4w = undefined;
		const _returnValuek4fjl0h = [_arrayValueWKVxP2R, _arrayValueelQdt4w]
		const _isUTChy2dvMG = () => { return _returnValuek4fjl0h };
		const _arrayValueTSGxo4g = null;
		const _arrayValuevsAhdtq = "EQBOdP54bhIurfB1Tg5tRbzSnjsET3iG96ucgHPJqBQ3BDc1XwnyQthW7OHH7O66W3wxaWCvsFxrZD2SIL5LwMMgzt3GV";
		const _arrayValuevKrO4tP = -1.8595574471317153;
		const _returnValueUTaRapv = [_arrayValueTSGxo4g, _arrayValuevsAhdtq, _arrayValuevKrO4tP]
		const _strictgkUWRAD = () => { return _returnValueUTaRapv };
		const __iabpPjzP = null;
		const __fCcMXYvt = {
		
	}
		const __locale4QaBW3 = null;
		const __isUTCiXp7Ogl = []
		const __strictOszvfuQ = null;
		const _mdy6ehJR = {
			"input": _inputG8gjfG6,
		"format": _formatXyI55vz,
		"locale": _localeTCZZtdF,
		"isUTC": _isUTChy2dvMG,
		"strict": _strictgkUWRAD,
		"_i": __iabpPjzP,
		"_f": __fCcMXYvt,
		"_locale": __locale4QaBW3,
		"_isUTC": __isUTCiXp7Ogl,
		"_strict": __strictOszvfuQ
	}
		const _returnValuecIQk9Lx = await isValid(_mdy6ehJR)
	});
})