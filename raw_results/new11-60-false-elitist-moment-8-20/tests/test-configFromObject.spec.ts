export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputXW3fufK = -2.3361690526983754;
		const _formatFl3Bfn = "d5VVQABbuiRvuU7dM";
		const _localeegfWnKh = false;
		const _isUTCTuOzBB = false;
		const _strictD4KOQuX = -3.184720395726737;
		const __iy86vbxj = true;
		const _returnValueABerog1 = null;
		const _returnValuefHjWB95 = () => { return _returnValueABerog1 };
		const __fZ4ppmIr = () => { return _returnValuefHjWB95 };
		const __localeq6ZW3eB = "qvwse63OYMth82qQJyGfSlurY7K6F2AA5HOfB12WFBNT8sjKJm0cSEFEqZSmF3lfXm9OADBrLueypCUKHGW";
		const __isUTCR79HmDC = undefined;
		const _returnValueQvoy9NC = false;
		const __strictHiJSr1q = () => { return _returnValueQvoy9NC };
		const _configMmULFNI = {
			"input": _inputXW3fufK,
		"format": _formatFl3Bfn,
		"locale": _localeegfWnKh,
		"isUTC": _isUTCTuOzBB,
		"strict": _strictD4KOQuX,
		"_i": __iy86vbxj,
		"_f": __fZ4ppmIr,
		"_locale": __localeq6ZW3eB,
		"_isUTC": __isUTCR79HmDC,
		"_strict": __strictHiJSr1q
	}
		const _returnValuedTgDEXm = await configFromObject(_configMmULFNI)
	});
})