export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputgHWeEal = false;
		const _returnValuevS8d7hi = null;
		const _formatrT6bPt = () => { return _returnValuevS8d7hi };
		const _localezpFT7lS = undefined;
		const _isUTCAvqwM4 = null;
		const _strictQjXp9bT = "kuBKcb1";
		const __iNRG30NY = true;
		const __fVVRe2O = true;
		const __localeuRv8AKK = false;
		const __isUTCTMkHFsW = null;
		const __strictZ0NGQ4b = undefined;
		const _configRD72zpv = {
			"input": _inputgHWeEal,
		"format": _formatrT6bPt,
		"locale": _localezpFT7lS,
		"isUTC": _isUTCAvqwM4,
		"strict": _strictQjXp9bT,
		"_i": __iNRG30NY,
		"_f": __fVVRe2O,
		"_locale": __localeuRv8AKK,
		"_isUTC": __isUTCTMkHFsW,
		"_strict": __strictZ0NGQ4b
	}
		const _returnValueNvXgHP = await configFromObject(_configRD72zpv)
	});
})