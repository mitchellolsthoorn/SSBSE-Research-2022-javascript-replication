export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputWfl8ZBU = {
		
	}
		const _returnValueDkzLIPE = -4.85018713761233;
		const _formatZfmpvgW = () => { return _returnValueDkzLIPE };
		const _localeWt37AjF = {
		
	}
		const _isUTCL8hYtzi = "NJDqSJhRJnh5lhNFMFhoObvg5WLYMyoMf26mfEJHa7hrvYPhPoNg4mvrA3c18Tekm2qm9nl";
		const _strictdUZA1OR = null;
		const __iadlk6rI = null;
		const __ff1eIMbo = {
		
	}
		const __localez5TS31D = true;
		const __isUTCQaAg99V = false;
		const __strictu5iDT4q = 2.9237572726609944;
		const _configccSLQ3a = {
			"input": _inputWfl8ZBU,
		"format": _formatZfmpvgW,
		"locale": _localeWt37AjF,
		"isUTC": _isUTCL8hYtzi,
		"strict": _strictdUZA1OR,
		"_i": __iadlk6rI,
		"_f": __ff1eIMbo,
		"_locale": __localez5TS31D,
		"_isUTC": __isUTCQaAg99V,
		"_strict": __strictu5iDT4q
	}
		const _returnValuecnUc4DX = await configFromObject(_configccSLQ3a)
	});
})