export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValuetkmjEAS = null;
		const _startsWithgGosxby = () => { return _returnValuetkmjEAS };
		const _arrayValueYAL0d8c = undefined;
		const _returnValueqbyuh6x = "5h9cA7sRUtVS9B3Krb6r5yTR9HU7xwJoejyke8MuSEyyrrpEympWwlIvtAEgOGB2qknN1rSXcCdmSXs3V";
		const _arrayValueqDpBiV = () => { return _returnValueqbyuh6x };
		const _arrayValueVekiI4 = undefined;
		const _returnValueLMG2zXi = [_arrayValueYAL0d8c, _arrayValueqDpBiV, _arrayValueVekiI4]
		const _sliceIq48XX9 = () => { return _returnValueLMG2zXi };
		const _lengthAsxrr9 = -5.1962759079391345;
		const _wordBM4fk5E = {
			"startsWith": _startsWithgGosxby,
		"slice": _sliceIq48XX9,
		"length": _lengthAsxrr9
	}
		const _lengthGhjreV8 = 4.878233562178963;
		const _returnValueNjD7X99 = undefined;
		const _mapoXdylV6 = () => { return _returnValueNjD7X99 };
		const _returnValueQyMnsKW = true;
		const _forEachCKQHFK = () => { return _returnValueQyMnsKW };
		const _candidatesXJsyjcT = {
			"length": _lengthGhjreV8,
		"map": _mapoXdylV6,
		"forEach": _forEachCKQHFK
	}
		const _returnValueYquWCKu = await suggestSimilar(_wordBM4fk5E, _candidatesXJsyjcT)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuedcejUaz = true;
		const _startsWitheiOCovZ = () => { return _returnValuedcejUaz };
		const _returnValuetV0lVy = null;
		const _sliceQ1cKv5C = () => { return _returnValuetV0lVy };
		const _lengthzACZhf = 5.846837414478589;
		const _wordpOhzbzR = {
			"startsWith": _startsWitheiOCovZ,
		"slice": _sliceQ1cKv5C,
		"length": _lengthzACZhf
	}
		const _candidateskrna60j = "MzNuOShNs1xEOAqUkTq8DXuybg0PtURhnK7CUTVhKzUdbHU3qSDDjaoBDw2kVRVUT6Qp9bpp";
		const _returnValueIaJi9Rf = await suggestSimilar(_wordpOhzbzR, _candidateskrna60j)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValueZGPCiDn = []
		const _arrayValuekRlUKTm = null;
		const _arrayValuevoDL4kQ = [_arrayValueZGPCiDn, _arrayValuekRlUKTm]
		const _arrayValueyVqko0y = true;
		const _arrayValueftLxFK5 = undefined;
		const _returnValueCuKN8On = [_arrayValuevoDL4kQ, _arrayValueyVqko0y, _arrayValueftLxFK5]
		const _startsWithZencH7Z = () => { return _returnValueCuKN8On };
		const _slicenEel9fw = false;
		const _lengtheTQipml = 7.459983472044701;
		const _wordGWEJGe3 = {
			"startsWith": _startsWithZencH7Z,
		"slice": _slicenEel9fw,
		"length": _lengtheTQipml
	}
		const _candidatesohmjQQ = false;
		const _returnValueigqxoG6 = await suggestSimilar(_wordGWEJGe3, _candidatesohmjQQ)
	});

	it('test for suggestSimilar', async () => {
		const _word2OlWeI = "sS4HwEVIMrmGherToR1IOS5F1X7CelkG799O6ejJgFYzaqDrMv8qmACFurzGUqNP9mKyemLnkYdLemtPjOjF";
		const _arrayValuedqcXFRC = -5.860315302135397;
		const _arrayValueEpmhLll = {
		
	}
		const _arrayValueiRSONJS = null;
		const _candidatesTs6fGhv = [_arrayValuedqcXFRC, _arrayValueEpmhLll, _arrayValueiRSONJS]
		const _returnValuepdo1EUD = await suggestSimilar(_word2OlWeI, _candidatesTs6fGhv)
	});

	it('test for suggestSimilar', async () => {
		const _wordYPP7jQQ = "2eAkKLTI";
		const _returnValuehB4LMtD = true;
		const _arrayValuedjJ0PX3 = () => { return _returnValuehB4LMtD };
		const _arrayValuezrTFxAo = [_arrayValuedjJ0PX3]
		const _arrayValueG5eNDHo = false;
		const _returnValueEzApT63 = "BflnJpihbf6qoR7GqlnhX9e13aFoG7hV46ooCz9lZ";
		const _arrayValueIRovN56 = () => { return _returnValueEzApT63 };
		const _arrayValuev76FoK2 = "nmLjIcL";
		const _arrayValuetxmFS9t = false;
		const _arrayValueOmCGhRn = null;
		const _arrayValueSsiQSD = [_arrayValuev76FoK2, _arrayValuetxmFS9t, _arrayValueOmCGhRn]
		const _candidatesMwE0BtU = [_arrayValuezrTFxAo, _arrayValueG5eNDHo, _arrayValueIRovN56, _arrayValueSsiQSD]
		const _returnValuepCe31cY = await suggestSimilar(_wordYPP7jQQ, _candidatesMwE0BtU)
	});
})