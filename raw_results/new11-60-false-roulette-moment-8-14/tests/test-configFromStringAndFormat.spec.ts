export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _arrayValuezy6p6LC = null;
		const _arrayValueJL7bmtJ = true;
		const _arrayValueVGK8vuN = [_arrayValuezy6p6LC, _arrayValueJL7bmtJ]
		const _returnValueTlOzxUd = true;
		const _arrayValuewrrNpF0 = () => { return _returnValueTlOzxUd };
		const _returnValuejCesjuA = [_arrayValueVGK8vuN, _arrayValuewrrNpF0]
		const _configzx2G5wr = () => { return _returnValuejCesjuA };
		const _returnValueeFzeUYO = await configFromStringAndFormat(_configzx2G5wr)
	});

	it('test for configFromStringAndFormat', async () => {
		const _arrayValuenAg5syh = "HurvMdhIZ9SuE87kb6j2";
		const _arrayValuee5yLF0I = "n3e";
		const _arrayValueaS2UhoH = [_arrayValuee5yLF0I]
		const _arrayValueenXsk9 = [_arrayValueaS2UhoH]
		const _arrayValuewl8ehSt = 1.9817408846328792;
		const _inputaM4Mjo0 = [_arrayValuenAg5syh, _arrayValueenXsk9, _arrayValuewl8ehSt]
		const _formatiO71NER = "RH";
		const _localei0wq4EY = -2.153425544860994;
		const _isUTCiBg0mPU = {
		
	}
		const _stricttHElMU = true;
		const __iL1WSPDD = -7.37671883033671;
		const __fhK8lN3S = "quxv116xm4y";
		const __locale0cfnza = {
		
	}
		const __isUTCF8AZPV8 = null;
		const __stricthHG0tRR = 8.02926177111248;
		const _configlMF14Dc = {
			"input": _inputaM4Mjo0,
		"format": _formatiO71NER,
		"locale": _localei0wq4EY,
		"isUTC": _isUTCiBg0mPU,
		"strict": _stricttHElMU,
		"_i": __iL1WSPDD,
		"_f": __fhK8lN3S,
		"_locale": __locale0cfnza,
		"_isUTC": __isUTCF8AZPV8,
		"_strict": __stricthHG0tRR
	}
		const _returnValueLLJt8EB = await configFromStringAndFormat(_configlMF14Dc)
	});
})