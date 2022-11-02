export {}
import {configFromString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromString', () => {
	it('test for configFromString', async () => {
		const _returnValueALtaIdl = "HBgtEaFe4XZu6qW4GtC0X5U7z2sSLV9N2WFdoNyT8ysLZTKLtfE9u61EdjONiuRWQvMZaSsdXmHfAZS2Pj4DejTCWHh";
		const _returnValueCLfPGL3 = () => { return _returnValueALtaIdl };
		const _utcOffsetHUQ71NG = () => { return _returnValueCLfPGL3 };
		const _returnValueWZa9IAA = undefined;
		const _arrayValueGKfMonk = () => { return _returnValueWZa9IAA };
		const _arrayValueBE59CwY = "XXfw68t8uH7HfA";
		const _arrayValueLo2cE3Q = "s52QfpftdD1hM89GcoUW1arqqsQpnt6moMVii4VaSNvmZpcDwoaEIL8F1EbzolFk3qlrSTFYJ4HNaUkzDFWgx";
		const _arrayValueDNy6FxC = [_arrayValueBE59CwY, _arrayValueLo2cE3Q]
		const _arrayValueyZuitJ = null;
		const _returnValueSwBINYN = [_arrayValueGKfMonk, _arrayValueDNy6FxC, _arrayValueyZuitJ]
		const __tzmRoCMYdr = () => { return _returnValueSwBINYN };
		const __ij1jGrv = false;
		const _configV0SiCxv = {
			"utcOffset": _utcOffsetHUQ71NG,
		"_tzm": __tzmRoCMYdr,
		"_i": __ij1jGrv
	}
		const _returnValueFJjFVw9 = await configFromString(_configV0SiCxv)
	});

	it('test for configFromString', async () => {
		const _inputwp9VPfn = "WTMaLNA7QewOCgUMc6yuw2A9q8d3oMQutti4yg45";
		const _formatIAyiiB = false;
		const _localewQY7t7k = null;
		const _isUTCoIzvOs = true;
		const _strictKSCOU42 = undefined;
		const __i6XD2qq = "gf7axsbieHi4yiOx";
		const __fEHx7ruw = "03iOvsCl";
		const __localemho31e4 = -7.357747456480135;
		const __isUTCdVB11YD = false;
		const __strictC4Ws023 = {
		
	}
		const _configcOonCU2 = {
			"input": _inputwp9VPfn,
		"format": _formatIAyiiB,
		"locale": _localewQY7t7k,
		"isUTC": _isUTCoIzvOs,
		"strict": _strictKSCOU42,
		"_i": __i6XD2qq,
		"_f": __fEHx7ruw,
		"_locale": __localemho31e4,
		"_isUTC": __isUTCdVB11YD,
		"_strict": __strictC4Ws023
	}
		const _returnValueJ8PvWj = await configFromString(_configcOonCU2)
	});

	it('test for configFromString', async () => {
		const _inputQXZhrgR = "DjMk8X";
		const _formate26KMq = -0.6663032309803931;
		const _returnValuetC0CEfd = {
		
	}
		const _localeDRBRCix = () => { return _returnValuetC0CEfd };
		const _arrayValueIaTGyEZ = true;
		const _arrayValueFn86Qjg = "cwOh4EYZVePBffVUTBheuyj8dWKPgVjRDWIxwPbUzfvnXjnT8rm4YGhzFf4nYIU1uUBXlPEF5CdBt7";
		const _isUTCHOkIaSf = [_arrayValueIaTGyEZ, _arrayValueFn86Qjg]
		const _strictAdE3r0Q = false;
		const __ibSTh8I7 = "t7HHP8QNLr7hTSHB1mTSQJ2V2zDxFObSO1PfbHDzDpQLElYVyhscdudLalLUzcQzBUO9honI7t";
		const __fEYA74x = undefined;
		const __localeMOuxkBy = -0.1685843177117512;
		const __isUTCuSQCBFu = 1.6138747989485651;
		const __strictRSf7VfV = null;
		const _configZXIc48T = {
			"input": _inputQXZhrgR,
		"format": _formate26KMq,
		"locale": _localeDRBRCix,
		"isUTC": _isUTCHOkIaSf,
		"strict": _strictAdE3r0Q,
		"_i": __ibSTh8I7,
		"_f": __fEYA74x,
		"_locale": __localeMOuxkBy,
		"_isUTC": __isUTCuSQCBFu,
		"_strict": __strictRSf7VfV
	}
		const _returnValuehCwWhm = await configFromString(_configZXIc48T)
	});
})