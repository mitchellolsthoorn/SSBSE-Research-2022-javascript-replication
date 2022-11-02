export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputdolVkx9 = null;
		const _returnValueWZyTOQ1 = {
		
	}
		const _returnValueIeQRLNc = () => { return _returnValueWZyTOQ1 };
		const _formatSV01F8 = () => { return _returnValueIeQRLNc };
		const _arrayValueEb8bMVo = undefined;
		const _arrayValueY1N7wDT = [_arrayValueEb8bMVo]
		const _arrayValueKjSZQ1i = -4.432047097600567;
		const _localeGFtrdrq = [_arrayValueY1N7wDT, _arrayValueKjSZQ1i]
		const _returnValuenh87vQK = false;
		const _isUTCw1zYZ4l = () => { return _returnValuenh87vQK };
		const _stricttxH8e8r = undefined;
		const _returnValueVw03kD = null;
		const __ijSjVGEK = () => { return _returnValueVw03kD };
		const __fCPSNBVe = undefined;
		const __localeXhH3LGQ = null;
		const __isUTCttbqBSk = -8.264021062278676;
		const __stricty6kucrT = undefined;
		const _configJe9gQ2d = {
			"input": _inputdolVkx9,
		"format": _formatSV01F8,
		"locale": _localeGFtrdrq,
		"isUTC": _isUTCw1zYZ4l,
		"strict": _stricttxH8e8r,
		"_i": __ijSjVGEK,
		"_f": __fCPSNBVe,
		"_locale": __localeXhH3LGQ,
		"_isUTC": __isUTCttbqBSk,
		"_strict": __stricty6kucrT
	}
		const _returnValueFpkHW2B = await configFromObject(_configJe9gQ2d)
	});
})