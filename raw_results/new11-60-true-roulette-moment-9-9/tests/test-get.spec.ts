export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValuethY0ffC = undefined;
		const _returnValuefBobxu = () => { return _returnValuethY0ffC };
		const _isValidZieui9S = () => { return _returnValuefBobxu };
		const _localeDataKuklwPD = null;
		const _returnValueFaN8KlT = -0.15207657316089396;
		const _returnValueMcoRaB = () => { return _returnValueFaN8KlT };
		const _dayK9Dc4f6 = () => { return _returnValueMcoRaB };
		const _momPQ1IJHl = {
			"isValid": _isValidZieui9S,
		"localeData": _localeDataKuklwPD,
		"day": _dayK9Dc4f6
	}
		const _unituqLcgOa = "waqMi8bgziGuOJKHXff4zoWImy9WJmsVWrM6uWKM52zNgFgu2q72Non";
		const _returnValue50YhC2 = await get(_momPQ1IJHl, _unituqLcgOa)
	});
})