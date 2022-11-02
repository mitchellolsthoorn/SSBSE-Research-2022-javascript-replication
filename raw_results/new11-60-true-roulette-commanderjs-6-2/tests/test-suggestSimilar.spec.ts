export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValuepWTKST = 3.308681003532204;
		const _startsWithXHdQi47 = () => { return _returnValuepWTKST };
		const _returnValueSi8TRVI = []
		const _returnValueF4HLJTV = () => { return _returnValueSi8TRVI };
		const _sliceBZZwM0T = () => { return _returnValueF4HLJTV };
		const _lengthhUpqpcq = -0.1694244308112971;
		const _wordtXnYM8C = {
			"startsWith": _startsWithXHdQi47,
		"slice": _sliceBZZwM0T,
		"length": _lengthhUpqpcq
	}
		const _returnValue5JhOUm = undefined;
		const _candidatesfCzx7cG = () => { return _returnValue5JhOUm };
		const _returnValuej3PgoiS = await suggestSimilar(_wordtXnYM8C, _candidatesfCzx7cG)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValuegN1qn89 = true;
		const _wordl4oYEdB = [_arrayValuegN1qn89]
		const _lengthAYu4VNa = -5.132242626630609;
		const _returnValuetMuSCz = 6.277932085031345;
		const _mapY0DXZbL = () => { return _returnValuetMuSCz };
		const _returnValueNl2bY3i = "0UF3TVMmBbcmAxvHrlkNQiUFgK2s";
		const _forEachQedey1j = () => { return _returnValueNl2bY3i };
		const _candidatesa1uS5N = {
			"length": _lengthAYu4VNa,
		"map": _mapY0DXZbL,
		"forEach": _forEachQedey1j
	}
		const _returnValueURZJICB = await suggestSimilar(_wordl4oYEdB, _candidatesa1uS5N)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuei9fAv16 = []
		const _startsWithe94cp9k = () => { return _returnValuei9fAv16 };
		const _returnValueexRQKJJ = 6.7435748964392985;
		const _sliceyecafu = () => { return _returnValueexRQKJJ };
		const _length2MPrPR = 7.276047453900365;
		const _wordQXZPYjE = {
			"startsWith": _startsWithe94cp9k,
		"slice": _sliceyecafu,
		"length": _length2MPrPR
	}
		const _candidatesJpg3FZn = "oD6gfgnEB2jjv6bKnoorzaTuLBTA3WcwBMsHZWABuN1ncOcP1RAA7DhvI4LTvnCEJpp7rPZi5";
		const _returnValueiLawBGM = await suggestSimilar(_wordQXZPYjE, _candidatesJpg3FZn)
	});

	it('test for suggestSimilar', async () => {
		const _wordCGYh8XZ = "ExiDIPiBvxkSvUt8d9tnW7yNHoiVm7RiOuYZmlTWNJQASJIUfA2oOvywP7c3o4PvUQFOPLagICx1LnGdyD5hxmBXafK9wrutha";
		const _arrayValuegWcgcSr = -7.890707349443435;
		const _arrayValuevOI1uPq = false;
		const _candidatescgqQFPP = [_arrayValuegWcgcSr, _arrayValuevOI1uPq]
		const _returnValuecAXruI0 = await suggestSimilar(_wordCGYh8XZ, _candidatescgqQFPP)
	});

	it('test for suggestSimilar', async () => {
		const _wordZkg1F0V = "ztBKgps19WybY9143G1xzliy7wwuzcmQh6AAnG5Ekb4BDT9IQQN7ttX";
		const _arrayValueweSW9k0 = true;
		const _arrayValueCuiItNA = null;
		const _arrayValueUFHwy7 = undefined;
		const _arrayValuecB3oeNb = [_arrayValueweSW9k0, _arrayValueCuiItNA, _arrayValueUFHwy7]
		const _candidatesd4yGwkD = [_arrayValuecB3oeNb]
		const _returnValueso6BPWZ = await suggestSimilar(_wordZkg1F0V, _candidatesd4yGwkD)
	});

	it('test for suggestSimilar', async () => {
		const _wordsR5BREX = "TgPlBzALaGg82sMPvoaY";
		const _arrayValuelHiAyGY = "Y1eqPULwE1kDFVt1Q";
		const _arrayValueLWOLCy5 = false;
		const _candidatesSuxNsEC = [_arrayValuelHiAyGY, _arrayValueLWOLCy5]
		const _returnValuelOc0EYZ = await suggestSimilar(_wordsR5BREX, _candidatesSuxNsEC)
	});
})