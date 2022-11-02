export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputJZXLQeJ = undefined;
		const _formatlZXriXw = 2.917194147289969;
		const _localecZqWDC = false;
		const _isUTCi2z1hIi = {
		
	}
		const _strictwZeJ8O = false;
		const _returnValuevnsxULk = "bubZQv64T8kzRhveJIpSRkJMvR1XDSS6cKEri";
		const __iTkkb1Vc = () => { return _returnValuevnsxULk };
		const __fjCyBikp = true;
		const __localevaT5FcD = null;
		const __isUTCHJXkbe = null;
		const __strictp2lRir4 = "GQaf9iuaHHbOfoTqCdc3moXrJkp9EDtirEKRFlaNMJs3d7UknQ";
		const _configndTwL0p = {
			"input": _inputJZXLQeJ,
		"format": _formatlZXriXw,
		"locale": _localecZqWDC,
		"isUTC": _isUTCi2z1hIi,
		"strict": _strictwZeJ8O,
		"_i": __iTkkb1Vc,
		"_f": __fjCyBikp,
		"_locale": __localevaT5FcD,
		"_isUTC": __isUTCHJXkbe,
		"_strict": __strictp2lRir4
	}
		const _returnValueLQj4zS5 = await configFromObject(_configndTwL0p)
	});
})