export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValueyAN2et = "okXbsHcs37cP1P4csHGj3gO7RBvvVsCs9Ke3nnPYetlpFD3SrmCLZRl";
		const _returnValueyKn6Kuo = undefined;
		const _arrayValue7IZ8II = () => { return _returnValueyKn6Kuo };
		const _inputObMbutT = [_arrayValueyAN2et, _arrayValue7IZ8II]
		const _returnValueG0XQf0n = "V0N8GgbQ8kPMw9ZqSNRsNc1fYspA3WyBSOW1rYszXZtMzDD5BJL16IHOchsU7hX5ajpxhnAYGNBGzP";
		const _formatCjn60AO = () => { return _returnValueG0XQf0n };
		const _localeIzoaIAA = -0.3570974298597527;
		const _isUTCiDn4mh4 = false;
		const _strictrOZrTxK = "d6O9HS7TAf0EpcvK";
		const __ipuTiGz6 = -5.549043898995617;
		const __fl8H4xJ = false;
		const __localetMs7FP = "QcY9CLViv5U6udQRB1JJyWWrmn1Uy7TkN1diV7uCwyNouoioEiKx1t";
		const _returnValuemX2YY4t = null;
		const __isUTCSbeGWf = () => { return _returnValuemX2YY4t };
		const __strictiplFVTz = null;
		const _mf0fXWqI = {
			"input": _inputObMbutT,
		"format": _formatCjn60AO,
		"locale": _localeIzoaIAA,
		"isUTC": _isUTCiDn4mh4,
		"strict": _strictrOZrTxK,
		"_i": __ipuTiGz6,
		"_f": __fl8H4xJ,
		"_locale": __localetMs7FP,
		"_isUTC": __isUTCSbeGWf,
		"_strict": __strictiplFVTz
	}
		const _returnValueD4Copge = await isValid(_mf0fXWqI)
	});
})