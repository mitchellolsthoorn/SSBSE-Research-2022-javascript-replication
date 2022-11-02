export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputF8Z0Es1 = null;
		const _formatTTc9SJB = null;
		const _localeuvxHg4L = true;
		const _isUTC2VLLfD = false;
		const _returnValuevarrEKi = 3.2856844549119515;
		const _strictPk8271f = () => { return _returnValuevarrEKi };
		const __iXIF5rLI = null;
		const __fR2uytl8 = true;
		const __localeWJsz3Gu = 8.376112300912542;
		const _arrayValueGlqRKQq = true;
		const _arrayValuexhDdd5n = true;
		const __isUTCFaU7Tkq = [_arrayValueGlqRKQq, _arrayValuexhDdd5n]
		const __strictXIESSsw = {
		
	}
		const _configWuce6y = {
			"input": _inputF8Z0Es1,
		"format": _formatTTc9SJB,
		"locale": _localeuvxHg4L,
		"isUTC": _isUTC2VLLfD,
		"strict": _strictPk8271f,
		"_i": __iXIF5rLI,
		"_f": __fR2uytl8,
		"_locale": __localeWJsz3Gu,
		"_isUTC": __isUTCFaU7Tkq,
		"_strict": __strictXIESSsw
	}
		const _returnValueCDNLLSy = await configFromObject(_configWuce6y)
	});
})