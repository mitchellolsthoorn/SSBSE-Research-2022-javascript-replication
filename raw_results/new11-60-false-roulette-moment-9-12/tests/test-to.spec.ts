export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const __millisecondsNfi7aCm = false;
		const __days3XlhmD = null;
		const _returnValueEeKtESj = null;
		const _isValidqph8IuR = () => { return _returnValueEeKtESj };
		const _returnValuekDw1wau = false;
		const __monthso4K90JD = () => { return _returnValuekDw1wau };
		const _timef0YK70z = {
			"_milliseconds": __millisecondsNfi7aCm,
		"_days": __days3XlhmD,
		"isValid": _isValidqph8IuR,
		"_months": __monthso4K90JD
	}
		const _withoutSuffixkYDVo9U = undefined;
		const _returnValuemnyBxQg = await to(_timef0YK70z, _withoutSuffixkYDVo9U)
	});
})