export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueGQsYHRH = "cthUZOqVEgkgSiM7muHgG3jp7iBNRUb1QwejkTzqeZ7jGqyMGibB2vH2pH4Y2eGl6Z5RgIbOK7MVxBNgqrv6HluecxegR1edtDg";
		const _isValidMiERVHq = () => { return _returnValueGQsYHRH };
		const _time6nW9V4 = {
			"isValid": _isValidMiERVHq
	}
		const _withoutSuffixROT1Lqm = "H2PuWrXNm4sppz1dVeg6mxmcB";
		const _returnValueA7JRJeE = await to(_time6nW9V4, _withoutSuffixROT1Lqm)
	});
})