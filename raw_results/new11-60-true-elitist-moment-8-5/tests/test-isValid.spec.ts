export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputKLjEFMA = false;
		const _arrayValueqA8pTa9 = 2.393611009063676;
		const _arrayValueMs4ClGy = true;
		const _arrayValuey9gUGjk = undefined;
		const _returnValueN5akgLS = [_arrayValueqA8pTa9, _arrayValueMs4ClGy, _arrayValuey9gUGjk]
		const _formatTnyNZWw = () => { return _returnValueN5akgLS };
		const _localeOOfJsdS = -9.789060479454562;
		const _isUTCxGT4kXZ = undefined;
		const _stricteThWHqg = 6.121320661759203;
		const __inK6FgA = undefined;
		const __fvw3wkHQ = null;
		const __localeP3c7hIB = null;
		const __isUTCcmpxmpd = -0.8391725623458637;
		const __stricthYskch1 = true;
		const _mcUu86m9 = {
			"input": _inputKLjEFMA,
		"format": _formatTnyNZWw,
		"locale": _localeOOfJsdS,
		"isUTC": _isUTCxGT4kXZ,
		"strict": _stricteThWHqg,
		"_i": __inK6FgA,
		"_f": __fvw3wkHQ,
		"_locale": __localeP3c7hIB,
		"_isUTC": __isUTCcmpxmpd,
		"_strict": __stricthYskch1
	}
		const _returnValueCESs5hJ = await isValid(_mcUu86m9)
	});
})