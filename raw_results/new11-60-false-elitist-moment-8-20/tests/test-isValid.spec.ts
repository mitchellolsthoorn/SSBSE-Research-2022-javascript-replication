export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputUwHVT1Y = "RJmXLt3RcvNZduWrEC3XTFFN6LpI34sGVxmNw6PfvhYQKq0bwOpYNcotOXKxgPFWOFkUqfbr6r4";
		const _formatZNtMK6h = null;
		const _localedkmpDLT = "NH6rMSPaGXCbqXGm73o63QULUczif1nHJChAc9d6G9kpLuH7KiBx8eBedrvtjJboe6yHDc8p5Vq8IU8Sd6Wzv7P9I1wipIYati";
		const _isUTClp116X = {
		
	}
		const _strictbRwzOpq = null;
		const _arrayValueSo1BFrF = true;
		const __iApz9S3p = [_arrayValueSo1BFrF]
		const __fDdKn5Sd = 7.805419392708071;
		const _arrayValuexPuxS7 = 3.8719407725431303;
		const _arrayValueGXULwLv = {
		
	}
		const _arrayValueF9AhpnH = null;
		const __localeAifEniq = [_arrayValuexPuxS7, _arrayValueGXULwLv, _arrayValueF9AhpnH]
		const __isUTCcdzuyWN = 2.652255628837409;
		const __strictGKWh6ab = -5.099237751065026;
		const _myVHxscq = {
			"input": _inputUwHVT1Y,
		"format": _formatZNtMK6h,
		"locale": _localedkmpDLT,
		"isUTC": _isUTClp116X,
		"strict": _strictbRwzOpq,
		"_i": __iApz9S3p,
		"_f": __fDdKn5Sd,
		"_locale": __localeAifEniq,
		"_isUTC": __isUTCcdzuyWN,
		"_strict": __strictGKWh6ab
	}
		const _returnValuepwGzUNO = await isValid(_myVHxscq)
	});
})