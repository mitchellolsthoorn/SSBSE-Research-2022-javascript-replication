export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputRxKwySW = false;
		const _formatrQqSYxi = []
		const _localeY14cFsO = true;
		const _isUTCBda9mts = -3.4724814902083248;
		const _strictS4NJvRm = -6.714134432331772;
		const __ilusHviS = true;
		const __fGo1p89a = false;
		const __localecFkuf1X = 8.654377159045623;
		const _returnValuezqucPx = "tVLITvYtdbF7Wu1NbY1et4";
		const __isUTCxR2t82c = () => { return _returnValuezqucPx };
		const __strict1JtyZe = null;
		const _configVHvKVgI = {
			"input": _inputRxKwySW,
		"format": _formatrQqSYxi,
		"locale": _localeY14cFsO,
		"isUTC": _isUTCBda9mts,
		"strict": _strictS4NJvRm,
		"_i": __ilusHviS,
		"_f": __fGo1p89a,
		"_locale": __localecFkuf1X,
		"_isUTC": __isUTCxR2t82c,
		"_strict": __strict1JtyZe
	}
		const _returnValuehjJeQjI = await configFromObject(_configVHvKVgI)
	});
})