export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValuejt8gZqA = -9.045769017707366;
		const _isValidV5kggz2 = () => { return _returnValuejt8gZqA };
		const _returnValuezz8WXMG = undefined;
		const _localesXQ3cXc = () => { return _returnValuezz8WXMG };
		const _returnValueIOfFBY8 = "HEnixbdv46iQOky8h4";
		const _localeDataTzhMRQf = () => { return _returnValueIOfFBY8 };
		const _momnMtuZ1X = {
			"isValid": _isValidV5kggz2,
		"locale": _localesXQ3cXc,
		"localeData": _localeDataTzhMRQf
	}
		const _unitXJlEaVd = -8.206628086551868;
		const _returnValuey3ql5wp = await get(_momnMtuZ1X, _unitXJlEaVd)
	});
})