export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValueaEbEIo = -4.578639038809436;
		const _arrayValuenJLA7P1 = undefined;
		const _arrayValueDLGUk58 = null;
		const _arrayValueSTvccuL = null;
		const _arrayValueI22ldpX = true;
		const _arrayValuevZCvgka = [_arrayValueSTvccuL, _arrayValueI22ldpX]
		const _arrayValuetbLjnaf = "YuMqcs75SIt0T9Gmcp8bBnHm4";
		const _arrayValueM3tPXP2 = [_arrayValueDLGUk58, _arrayValuevZCvgka, _arrayValuetbLjnaf]
		const _inputkcb9Xwa = [_arrayValueaEbEIo, _arrayValuenJLA7P1, _arrayValueM3tPXP2]
		const _formatEB4lLBy = {
		
	}
		const _localeeC8MDoj = null;
		const _isUTCafoRLIR = null;
		const _strictqZBNxRo = undefined;
		const _arrayValuei0GCnj0 = true;
		const _arrayValueYASxA7M = null;
		const _arrayValueY3oShVn = {
		
	}
		const _returnValueQcSmKPl = [_arrayValuei0GCnj0, _arrayValueYASxA7M, _arrayValueY3oShVn]
		const __is81Ndht = () => { return _returnValueQcSmKPl };
		const __fhAlWbPm = "YdkM4aLiKCQ3boGV8u8GxMGDfEJU3QcIowdeVSfuVDUh";
		const __localeNvHVfJq = undefined;
		const __isUTCv4V0GF8 = undefined;
		const __strictKkNZrLL = []
		const _mbgL4SUl = {
			"input": _inputkcb9Xwa,
		"format": _formatEB4lLBy,
		"locale": _localeeC8MDoj,
		"isUTC": _isUTCafoRLIR,
		"strict": _strictqZBNxRo,
		"_i": __is81Ndht,
		"_f": __fhAlWbPm,
		"_locale": __localeNvHVfJq,
		"_isUTC": __isUTCv4V0GF8,
		"_strict": __strictKkNZrLL
	}
		const _returnValueMtNWFQ = await isValid(_mbgL4SUl)
	});
})