export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _returnValuez5jD9sP = undefined;
		const _inputKOhz6w = () => { return _returnValuez5jD9sP };
		const _arrayValueKG4miWT = "zEcsnWxmgLYe6BUfBC94cAYbsqQhFMlUcRde13WmGFF4JN";
		const _arrayValuevo60Cm2 = 1.6638747582072213;
		const _formatpsFkPt = [_arrayValueKG4miWT, _arrayValuevo60Cm2]
		const _localel8Mau0g = true;
		const _isUTCBrUmgBC = undefined;
		const _returnValuey5UXq0y = {
		
	}
		const _arrayValuegdzpF9W = () => { return _returnValuey5UXq0y };
		const _arrayValueEQPVwX6 = undefined;
		const _strictOxgYfw = [_arrayValuegdzpF9W, _arrayValueEQPVwX6]
		const __ia2lZuDN = "wyzA3oxBEbkl32C4ZXsrmgMOlBirAMoFu7AMfQZ1k";
		const _arrayValuePzTKthQ = -8.578682990244864;
		const __flY0l5YQ = [_arrayValuePzTKthQ]
		const __localeUbjgvd = null;
		const __isUTCrEkzYXh = undefined;
		const __strictKPnm3Fy = []
		const _mTEORdoi = {
			"input": _inputKOhz6w,
		"format": _formatpsFkPt,
		"locale": _localel8Mau0g,
		"isUTC": _isUTCBrUmgBC,
		"strict": _strictOxgYfw,
		"_i": __ia2lZuDN,
		"_f": __flY0l5YQ,
		"_locale": __localeUbjgvd,
		"_isUTC": __isUTCrEkzYXh,
		"_strict": __strictKPnm3Fy
	}
		const _returnValueKR3iGLy = await isValid(_mTEORdoi)
	});
})