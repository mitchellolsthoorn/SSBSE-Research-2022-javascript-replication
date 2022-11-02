export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputCLNpVyk = "xV7P3beHmQ4UhtSui";
		const _formatJb7cq7 = undefined;
		const _arrayValueE4KfWGu = undefined;
		const _arrayValuekIORuP = undefined;
		const _arrayValues2w7rY2 = [_arrayValuekIORuP]
		const _localep7E3nSn = [_arrayValueE4KfWGu, _arrayValues2w7rY2]
		const _isUTCKQIRO6U = "KK8zxSPKwNaKcdRHoW1U";
		const _strictZTRxLCO = 7.179358496134629;
		const __ib6YeIVz = undefined;
		const __fypex1lp = false;
		const __localeCB7e2yp = "J";
		const __isUTCKaIDT6A = false;
		const __strictArzDC7U = "IoyHtmYGxGoWUDElOhdSxh9JNnLRleWEouM2r4XsIfajMJHHoweCxkWFmco56y491h4T8KRnW";
		const _mbz8S529 = {
			"input": _inputCLNpVyk,
		"format": _formatJb7cq7,
		"locale": _localep7E3nSn,
		"isUTC": _isUTCKQIRO6U,
		"strict": _strictZTRxLCO,
		"_i": __ib6YeIVz,
		"_f": __fypex1lp,
		"_locale": __localeCB7e2yp,
		"_isUTC": __isUTCKaIDT6A,
		"_strict": __strictArzDC7U
	}
		const _returnValueWex1Ns8 = await isValid(_mbz8S529)
	});
})