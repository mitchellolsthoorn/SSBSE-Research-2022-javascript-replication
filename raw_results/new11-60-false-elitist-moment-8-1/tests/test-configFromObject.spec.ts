export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputG72F81e = "lQ5jhawGbtyX7rGjaaHGXu1AkxP3LxalxJVMWL3n9MDk2";
		const _formatVZ8qodM = null;
		const _localeHYaTR0i = null;
		const _isUTCDXso2jj = null;
		const _strict1YVc0x = false;
		const _returnValueAQhCXZL = false;
		const __iNmxGRR = () => { return _returnValueAQhCXZL };
		const _arrayValueBkouoF1 = true;
		const __fo2ka99 = [_arrayValueBkouoF1]
		const __localeMX9QjjI = null;
		const _returnValueTmTLh07 = true;
		const _arrayValuevGVxoGm = () => { return _returnValueTmTLh07 };
		const _arrayValuez7d6lVH = 6.482167808729933;
		const _arrayValueUBqvpa = false;
		const _arrayValueRjP54Ry = [_arrayValuez7d6lVH, _arrayValueUBqvpa]
		const __isUTCAMnCdV = [_arrayValuevGVxoGm, _arrayValueRjP54Ry]
		const __stricteN4RuDI = null;
		const _configagURtZ = {
			"input": _inputG72F81e,
		"format": _formatVZ8qodM,
		"locale": _localeHYaTR0i,
		"isUTC": _isUTCDXso2jj,
		"strict": _strict1YVc0x,
		"_i": __iNmxGRR,
		"_f": __fo2ka99,
		"_locale": __localeMX9QjjI,
		"_isUTC": __isUTCAMnCdV,
		"_strict": __stricteN4RuDI
	}
		const _returnValuevf7Wc02 = await configFromObject(_configagURtZ)
	});
})