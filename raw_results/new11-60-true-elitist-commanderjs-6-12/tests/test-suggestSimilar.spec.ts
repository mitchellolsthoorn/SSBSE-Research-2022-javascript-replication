export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValueo1JUzpx = -5.063032418301735;
		const _startsWithozWF8ot = () => { return _returnValueo1JUzpx };
		const _returnValuesNxML04 = undefined;
		const _slicepGqBqtk = () => { return _returnValuesNxML04 };
		const _lengthoSuSNn = 8.732962640457536;
		const _wordSzeC2po = {
			"startsWith": _startsWithozWF8ot,
		"slice": _slicepGqBqtk,
		"length": _lengthoSuSNn
	}
		const _lengthnRC5S4H = 3.004304333774284;
		const _returnValuejJ8zy86 = false;
		const _mapLsukVjq = () => { return _returnValuejJ8zy86 };
		const _returnValuecSZJX2n = "van6FqrLWIMJlEbUJ3hev93mTWMnh7O3f9OMpJGCpIjqhPm3hoq";
		const _forEachIYDKf3d = () => { return _returnValuecSZJX2n };
		const _candidatesq5rcZgj = {
			"length": _lengthnRC5S4H,
		"map": _mapLsukVjq,
		"forEach": _forEachIYDKf3d
	}
		const _returnValueYiOKAPD = await suggestSimilar(_wordSzeC2po, _candidatesq5rcZgj)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuePECYIXv = null;
		const _returnValueGfXfQGx = () => { return _returnValuePECYIXv };
		const _startsWithgvpKqKm = () => { return _returnValueGfXfQGx };
		const _returnValueOXA6AA0 = null;
		const _slicebT2k24 = () => { return _returnValueOXA6AA0 };
		const _lengthtWu2Tg2 = 9.009762915160753;
		const _wordtSu4kqB = {
			"startsWith": _startsWithgvpKqKm,
		"slice": _slicebT2k24,
		"length": _lengthtWu2Tg2
	}
		const _candidatesVGfursa = false;
		const _returnValueDchJEh = await suggestSimilar(_wordtSu4kqB, _candidatesVGfursa)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueU4bEfzC = null;
		const _startsWithY8nXdbV = () => { return _returnValueU4bEfzC };
		const _returnValueT41g4xW = undefined;
		const _sliceiiLtoo = () => { return _returnValueT41g4xW };
		const _lengthF2Rkzpp = -0.8716740204630309;
		const _wordpOhCr1K = {
			"startsWith": _startsWithY8nXdbV,
		"slice": _sliceiiLtoo,
		"length": _lengthF2Rkzpp
	}
		const _arrayValuej6mgXx7 = null;
		const _arrayValuecBBUIgN = []
		const _candidatesCd0VVkF = [_arrayValuej6mgXx7, _arrayValuecBBUIgN]
		const _returnValueUHkfsNH = await suggestSimilar(_wordpOhCr1K, _candidatesCd0VVkF)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuemv98VLr = "MMghiPYtm";
		const _startsWithkq4cP8Z = () => { return _returnValuemv98VLr };
		const _returnValuewECAubX = null;
		const _slicez48K016 = () => { return _returnValuewECAubX };
		const _lengthvkQptsI = -7.961172684466934;
		const _wordXEBH39J = {
			"startsWith": _startsWithkq4cP8Z,
		"slice": _slicez48K016,
		"length": _lengthvkQptsI
	}
		const _candidatesZXgRQCE = "YSb6MeTSEsdh2SMh7Jln6yhIbDkbeYuvCImRhjR4VfEegankggdDaH7HM9No8BOQ4xxjWrC2GDB4dNsoHXLRhoxQQ9tzU";
		const _returnValueTQcaLJs = await suggestSimilar(_wordXEBH39J, _candidatesZXgRQCE)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueIBERlac = null;
		const _startsWithp83e6Un = () => { return _returnValueIBERlac };
		const _returnValuevlJ2Spf = undefined;
		const _slicebnk3dGH = () => { return _returnValuevlJ2Spf };
		const _lengthnsPKmH = 6.89987410538372;
		const _wordqEOISk = {
			"startsWith": _startsWithp83e6Un,
		"slice": _slicebnk3dGH,
		"length": _lengthnsPKmH
	}
		const _arrayValuejJ2BjpH = 7.126742154803885;
		const _candidatescInlbZM = [_arrayValuejJ2BjpH]
		const _returnValuefggZ6sG = await suggestSimilar(_wordqEOISk, _candidatescInlbZM)
	});

	it('test for suggestSimilar', async () => {
		const _wordv3vfeNS = "Zlk2vG92g5LZXmWrEQzMyCKpR4TYX7kcv1MqhYw2k5iVGPCJfSoTs8IgAhEM7JlR6GjKFrPwGl";
		const _arrayValuev05kr6U = false;
		const _arrayValueFVZKn4t = null;
		const _arrayValueLw0hIFp = true;
		const _arrayValue8dqFs5 = [_arrayValueFVZKn4t, _arrayValueLw0hIFp]
		const _arrayValuegeSh7Rn = [_arrayValuev05kr6U, _arrayValue8dqFs5]
		const _candidateseBS9A1p = [_arrayValuegeSh7Rn]
		const _returnValuedmHMaM5 = await suggestSimilar(_wordv3vfeNS, _candidateseBS9A1p)
	});
})