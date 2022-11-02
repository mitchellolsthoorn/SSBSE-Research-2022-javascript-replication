export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputQm8mADQ = true;
		const _formatjoxQfQX = -7.539203585676695;
		const _returnValueJi1rs3G = "7f1N1eCEIYm4v1js5pOtxHTvvc8MsjFF5oh29WNFthJNzek3nlQsk66XNBbZghWpbzBVW";
		const _localenzo8qzj = () => { return _returnValueJi1rs3G };
		const _isUTCWnq0jo2 = -1.3961582791207992;
		const _returnValueA4SixYc = undefined;
		const _strictEb38WtW = () => { return _returnValueA4SixYc };
		const __iuM3GHFd = undefined;
		const __fo7PyqKq = undefined;
		const __localeDrUOC3y = "yf80cLsvyZJgCbBoAp0jAtajKAqwXKlTAgYm";
		const __isUTCsjy8xjI = true;
		const __strict4KEnoj = "giT1d6WFwznpMBYYLiDUp2v69JXN7ZaK5Fr4JTdW91Ir27YTUV1xmgGZzvrwZS6ARu5OSYnct67sIAU4idYw";
		const _muqFLhaS = {
			"input": _inputQm8mADQ,
		"format": _formatjoxQfQX,
		"locale": _localenzo8qzj,
		"isUTC": _isUTCWnq0jo2,
		"strict": _strictEb38WtW,
		"_i": __iuM3GHFd,
		"_f": __fo7PyqKq,
		"_locale": __localeDrUOC3y,
		"_isUTC": __isUTCsjy8xjI,
		"_strict": __strict4KEnoj
	}
		const _returnValuePrkueRB = await isValid(_muqFLhaS)
	});
})