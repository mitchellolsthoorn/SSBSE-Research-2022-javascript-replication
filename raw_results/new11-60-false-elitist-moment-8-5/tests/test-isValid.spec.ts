export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputYrunpP3 = "ANmj6deQJuGOAtku7lUJQ7TBpuMYRHLogODJjHY";
		const _arrayValueQ4pI2jq = null;
		const _formatHtJvKz = [_arrayValueQ4pI2jq]
		const _localeead0FYs = null;
		const _isUTCYqOrXZb = {
		
	}
		const _strictyGWgPLb = undefined;
		const __iwuSGaZv = true;
		const __fxSiNwVL = undefined;
		const __localeUyPGw6y = -6.701206317869407;
		const _arrayValueON12YKV = null;
		const _arrayValuezYYq6Z = null;
		const __isUTCTviNpYj = [_arrayValueON12YKV, _arrayValuezYYq6Z]
		const __strictqmqHXFd = null;
		const _mqYBiQo = {
			"input": _inputYrunpP3,
		"format": _formatHtJvKz,
		"locale": _localeead0FYs,
		"isUTC": _isUTCYqOrXZb,
		"strict": _strictyGWgPLb,
		"_i": __iwuSGaZv,
		"_f": __fxSiNwVL,
		"_locale": __localeUyPGw6y,
		"_isUTC": __isUTCTviNpYj,
		"_strict": __strictqmqHXFd
	}
		const _returnValueeRHV3HE = await isValid(_mqYBiQo)
	});
})