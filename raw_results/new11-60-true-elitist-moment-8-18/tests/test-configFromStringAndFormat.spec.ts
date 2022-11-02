export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _inputNWoawyu = "ooOYSaMmInZVyyCaDFhky2eE8qLUB1SI";
		const _arrayValueYCtJq5s = "xVeDYzMFiNuHW1bOrjnWMgIL1Ok3sPfEWsp";
		const _formatudAEpew = [_arrayValueYCtJq5s]
		const _localeunMerIu = false;
		const _isUTCF2h8Lkf = null;
		const _strictbWp093J = undefined;
		const __ivXwCP2R = -1.3055430938411927;
		const __fYMVgVbC = {
		
	}
		const __localeqWpKhnu = {
		
	}
		const __isUTCdna8M4s = "JGViPXdS6gOHwQMCyvqYl9QjpPBPTEo";
		const __strictuCdUTuL = -0.6354913289668911;
		const _configBVw5mDd = {
			"input": _inputNWoawyu,
		"format": _formatudAEpew,
		"locale": _localeunMerIu,
		"isUTC": _isUTCF2h8Lkf,
		"strict": _strictbWp093J,
		"_i": __ivXwCP2R,
		"_f": __fYMVgVbC,
		"_locale": __localeqWpKhnu,
		"_isUTC": __isUTCdna8M4s,
		"_strict": __strictuCdUTuL
	}
		const _returnValue4csSl6 = await configFromStringAndFormat(_configBVw5mDd)
	});

	it('test for configFromStringAndFormat', async () => {
		const _inputAlzillA = false;
		const _formate1CQv8b = true;
		const _arrayValueg1DymPk = undefined;
		const _arrayValueBK7Q9g = -8.780067069332521;
		const _arrayValuey86DzrV = null;
		const _localeSfQusZ = [_arrayValueg1DymPk, _arrayValueBK7Q9g, _arrayValuey86DzrV]
		const _isUTCiYLHkrW = null;
		const _strictEY8cJA6 = 9.439737461851784;
		const __ipp0luJb = -2.156761127810417;
		const __fnKeU2pk = "heuP75brWqCcNd4UaRUV0aV9XgB5nHNGUNt1";
		const __localetVUgNXF = {
		
	}
		const __isUTCqj96fO6 = false;
		const __strictnM1zD4o = undefined;
		const _configLPPyFWE = {
			"input": _inputAlzillA,
		"format": _formate1CQv8b,
		"locale": _localeSfQusZ,
		"isUTC": _isUTCiYLHkrW,
		"strict": _strictEY8cJA6,
		"_i": __ipp0luJb,
		"_f": __fnKeU2pk,
		"_locale": __localetVUgNXF,
		"_isUTC": __isUTCqj96fO6,
		"_strict": __strictnM1zD4o
	}
		const _returnValuegKiaJrt = await configFromStringAndFormat(_configLPPyFWE)
	});
})