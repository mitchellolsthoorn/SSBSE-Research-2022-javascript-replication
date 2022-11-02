export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const __isUTCJ78P1AW = undefined;
		const _returnValuey3MF6jc = false;
		const _returnValueOz9CqAr = () => { return _returnValuey3MF6jc };
		const _isValidN0ZEmH = () => { return _returnValueOz9CqAr };
		const _momPAyHcVq = {
			"_isUTC": __isUTCJ78P1AW,
		"isValid": _isValidN0ZEmH
	}
		const _unitx5g2Kh = 5.800549790942167;
		const _returnValueiP8lr44 = await get(_momPAyHcVq, _unitx5g2Kh)
	});
})