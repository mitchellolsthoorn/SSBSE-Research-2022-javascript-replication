export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _arrayValueaTJeiN6 = -3.0021796177812696;
		const _arrayValueza8gjve = undefined;
		const _arrayValueXIVT6G = -7.757941283419475;
		const _configDHmOOf3 = [_arrayValueaTJeiN6, _arrayValueza8gjve, _arrayValueXIVT6G]
		const _returnValuevs8a5Rw = await configFromStringAndFormat(_configDHmOOf3)
	});

	it('test for configFromStringAndFormat', async () => {
		const _inputa7ldSHr = "jjVG4xNBqUF6tD1S";
		const _formatBUhev9A = true;
		const _localeH8Vmgm0 = -5.269234971633063;
		const _isUTCqdF1Srg = null;
		const _strictw1PmYF = -9.319528233971184;
		const __ilerzATO = 7.999694616563701;
		const __fERSrw5M = "cFdNIkUtyMgoGderg4ntRrTCo";
		const __localeG3B6br = {
		
	}
		const __isUTCRX4sft2 = {
		
	}
		const __strictJnM3Tn = undefined;
		const _config4yO6FH = {
			"input": _inputa7ldSHr,
		"format": _formatBUhev9A,
		"locale": _localeH8Vmgm0,
		"isUTC": _isUTCqdF1Srg,
		"strict": _strictw1PmYF,
		"_i": __ilerzATO,
		"_f": __fERSrw5M,
		"_locale": __localeG3B6br,
		"_isUTC": __isUTCRX4sft2,
		"_strict": __strictJnM3Tn
	}
		const _returnValueEaqqZdZ = await configFromStringAndFormat(_config4yO6FH)
	});
})