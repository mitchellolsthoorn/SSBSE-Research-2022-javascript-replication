export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputB7g1nUz = -2.63464065487638;
		const _arrayValuedel36Ie = null;
		const _arrayValueagkW2L4 = "gumWREr2IhdvT6A9GmLZlvvRGDR0NTVgquIN7DltV8cQrKcYe4ir5bQZWlwUmgqhunsSCx";
		const _formatsOsM6YY = [_arrayValuedel36Ie, _arrayValueagkW2L4]
		const _localeBxjagX = null;
		const _returnValuexETyspR = "BpwCTniJrbcxtgn43jhdvWNCNisNjEB6as1i7QWSCdUWkQ1Sr3Nkl1HzraFJteuNxGfIQPx39cTKEJemjzJvVZEYaIvkM";
		const _isUTCgerS5i = () => { return _returnValuexETyspR };
		const _strictuoDBO1p = null;
		const __iZcbjNce = "j9eVpRFxB32KcQT8CDKPnqkyojVfPcFQ5KJgiYAul5bhjLeDURZAjAicaeyonUoyFmDE3A";
		const __fz4IhCCA = undefined;
		const __localec6yYX2 = "Dyb1cleqIS73zkdXwwSlC50w4K58VK7uOeHwCh53Ut5V2h13u";
		const __isUTCePdTTCk = null;
		const _returnValueSYP1scm = null;
		const _arrayValuefTXTSeU = () => { return _returnValueSYP1scm };
		const _returnValueZmaNBg7 = "fdzuaxRO48LTmPKC5C7AmePwrJDfgLUEXxU24khVJnDqiqdIsxS1WwvnaroPrPYzy6oKioi";
		const _arrayValuePqhUKl = () => { return _returnValueZmaNBg7 };
		const _arrayValueEmVWFMn = true;
		const __strictO3FSOS = [_arrayValuefTXTSeU, _arrayValuePqhUKl, _arrayValueEmVWFMn]
		const _mLdz8amv = {
			"input": _inputB7g1nUz,
		"format": _formatsOsM6YY,
		"locale": _localeBxjagX,
		"isUTC": _isUTCgerS5i,
		"strict": _strictuoDBO1p,
		"_i": __iZcbjNce,
		"_f": __fz4IhCCA,
		"_locale": __localec6yYX2,
		"_isUTC": __isUTCePdTTCk,
		"_strict": __strictO3FSOS
	}
		const _returnValueK31v3Lr = await isValid(_mLdz8amv)
	});
})