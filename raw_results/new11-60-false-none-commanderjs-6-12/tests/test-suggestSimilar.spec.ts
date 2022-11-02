export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _arrayValuemczKlfN = false;
		const _wordyDOHJ5h = [_arrayValuemczKlfN]
		const _returnValuefM2YR4 = false;
		const _returnValuewFPCoVD = () => { return _returnValuefM2YR4 };
		const _candidatesu6XH1sA = () => { return _returnValuewFPCoVD };
		const _returnValueP0cOZzb = await suggestSimilar(_wordyDOHJ5h, _candidatesu6XH1sA)
	});

	it('test for suggestSimilar', async () => {
		const _word3mVc52 = undefined;
		const _candidateshw2Uo3T = "iynzOsiGu";
		const _returnValueRA0BnSj = await suggestSimilar(_word3mVc52, _candidateshw2Uo3T)
	});

	it('test for suggestSimilar', async () => {
		const _wordrDx9arn = "n76qly";
		const _candidateseX7KGUu = "dzW2yhgzYUvIAN1UbkNeV3dKcmBSYXeOaSg3Yp";
		const _returnValueLctn8YF = await suggestSimilar(_wordrDx9arn, _candidateseX7KGUu)
	});

	it('test for suggestSimilar', async () => {
		const _wordrBLWq93 = "qyM7bydSBbd98TkG3z4Ps3jf0FG5qyxCoZGajZYxTHj6mhirkoHIuf3wj3Nu4AgbH48IuKcehPEe5vATnGd9QQB5P";
		const _arrayValuegX0ugVs = "NEXk5rAnwpMERyEU4h9CQsP8ieaGJMBjufFnWMY50oOwpYhopKRblPBOwy2qSW4L2v7D7H";
		const _arrayValueNqHKK8w = undefined;
		const _arrayValueywPpAGj = [_arrayValuegX0ugVs, _arrayValueNqHKK8w]
		const _arrayValueh2JY5DV = undefined;
		const _candidatesd8ZecIk = [_arrayValueywPpAGj, _arrayValueh2JY5DV]
		const _returnValueMBn69R7 = await suggestSimilar(_wordrBLWq93, _candidatesd8ZecIk)
	});

	it('test for suggestSimilar', async () => {
		const _wordcIK2QUY = "DkG";
		const _arrayValueCigz5p4 = {
		
	}
		const _arrayValueCcF6Bm3 = "AS7oHsEw7EMencwcl6yYfBxFmtPV6xruhqhwhnPBEWXpJ1tobSn9suKNFOhn8BaGqMyWzBvrMlgu2f77O";
		const _arrayValueyzTnY4e = null;
		const _arrayValueEUzY92 = undefined;
		const _candidatesJzQHTt = [_arrayValueCigz5p4, _arrayValueCcF6Bm3, _arrayValueyzTnY4e, _arrayValueEUzY92]
		const _returnValueeFmnZbe = await suggestSimilar(_wordcIK2QUY, _candidatesJzQHTt)
	});

	it('test for suggestSimilar', async () => {
		const _wordymahVIi = "3YHlJcnEv9CMKSSDa6axV7XWiMNqQ9y99kjiXikgctOL0xq9JVRMK8ipp7m4QZeyC";
		const _arrayValueoNlyG9V = "z9yLzlV8yNilmqqA61jvaiflLKyw9AfUsp2CTyEFpSskuiTzXcA7S2q7ban7rGs";
		const _arrayValueEgFBbCN = {
		
	}
		const _arrayValuelj9a5TD = -2.62852754748753;
		const _arrayValuesG58hTk = [_arrayValueEgFBbCN, _arrayValuelj9a5TD]
		const _arrayValueTtxxgqD = null;
		const _candidatesX2LxnMw = [_arrayValueoNlyG9V, _arrayValuesG58hTk, _arrayValueTtxxgqD]
		const _returnValuesEyFQnx = await suggestSimilar(_wordymahVIi, _candidatesX2LxnMw)
	});
})