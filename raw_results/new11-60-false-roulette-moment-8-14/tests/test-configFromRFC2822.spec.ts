export {}
import {configFromRFC2822} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromRFC2822', () => {
	it('test for configFromRFC2822', async () => {
		const _inputYVJjKv2 = -3.980866641065724;
		const _formathyfKnzm = false;
		const _locale0o8WgF = false;
		const _isUTCScbpVTb = null;
		const _strictYrd2Vem = true;
		const __iQZaEfI = false;
		const __fkuatqxv = null;
		const __localeytjHPBj = 5.998396945203536;
		const _returnValueKKnQcaH = false;
		const __isUTCrmMtpc9 = () => { return _returnValueKKnQcaH };
		const __strictk39jlCG = "bInL4HH9KVbyRwuzqI07mRQCWWhiWcJTXGw54KlL8Wwz";
		const _configoAZo7p5 = {
			"input": _inputYVJjKv2,
		"format": _formathyfKnzm,
		"locale": _locale0o8WgF,
		"isUTC": _isUTCScbpVTb,
		"strict": _strictYrd2Vem,
		"_i": __iQZaEfI,
		"_f": __fkuatqxv,
		"_locale": __localeytjHPBj,
		"_isUTC": __isUTCrmMtpc9,
		"_strict": __strictk39jlCG
	}
		const _returnValueTCjg386 = await configFromRFC2822(_configoAZo7p5)
	});

	it('test for configFromRFC2822', async () => {
		const _returnValuefJdvUp8 = undefined;
		const _utcOffsetTYFDUtr = () => { return _returnValuefJdvUp8 };
		const __tzmTwLvnBi = 6.039767635711154;
		const __iMioH4xi = "D8ZOqmEnhcRzhzWuKmuwzyGyGfcdjnDC4axVbNzC6qSBcMW8tGeSejMxiL1Hrxf2GKz3I0wQ";
		const _configzDtMmQ = {
			"utcOffset": _utcOffsetTYFDUtr,
		"_tzm": __tzmTwLvnBi,
		"_i": __iMioH4xi
	}
		const _returnValueyUNQbB5 = await configFromRFC2822(_configzDtMmQ)
	});
})