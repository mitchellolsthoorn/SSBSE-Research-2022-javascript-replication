export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _arrayValuemja2dko = true;
		const _arrayValueLmL2r9 = 5.355865836654505;
		const _possibleItemset8VDzA = [_arrayValuemja2dko, _arrayValueLmL2r9]
		const _weightLimit6IROmR = 0.29799643964410905;
		const _KnapsackhoRjbiy = new Knapsack(_possibleItemset8VDzA, _weightLimit6IROmR)
		const _returnValue4y615G = await _KnapsackhoRjbiy.totalValue()
		const _returnValueq6qo6DW = await _KnapsackhoRjbiy.sortPossibleItemsByWeight()
		const _returnValuegV0QbWI = await _KnapsackhoRjbiy.sortPossibleItemsByWeight()
		const _returnValueRMLTG5J = await _KnapsackhoRjbiy.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemssNUvg6m = "l9K6zML7f4xBqUMhje5xwT8hfYYHDr8so7qGhPijHepbjSmUHlMCppopsmle8ndEmhwwYE55rdF2MRrlTapw";
		const _weightLimitbVzJd1W = 0.4200746974687153;
		const _KnapsackAYzLPU = new Knapsack(_possibleItemssNUvg6m, _weightLimitbVzJd1W)
		const _returnValueaRQ8OeN = await _KnapsackAYzLPU.sortPossibleItemsByWeight()
		const _returnValue9rrfqX = await _KnapsackAYzLPU.solveZeroOneKnapsackProblem()
		const _returnValueebnRba8 = await _KnapsackAYzLPU.solveUnboundedKnapsackProblem()
		const _returnValueDPeJU3Y = await _KnapsackAYzLPU.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _returnValuejE2EdXx = false;
		const _possibleItemsdf7bcCr = () => { return _returnValuejE2EdXx };
		const _weightLimitb0F2ijH = 8.290927476920753;
		const _KnapsackbAnBTJ = new Knapsack(_possibleItemsdf7bcCr, _weightLimitb0F2ijH)
		const _returnValueKh2yqyt = await _KnapsackbAnBTJ.solveUnboundedKnapsackProblem()
		const _returnValueWBZP8I = await _KnapsackbAnBTJ.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsGwBFSI9 = []
		const _weightLimitTHVCu1Z = -5.1966252105787785;
		const _KnapsackXvcRkCV = new Knapsack(_possibleItemsGwBFSI9, _weightLimitTHVCu1Z)
		const _returnValuejKQXWo = await _KnapsackXvcRkCV.solveZeroOneKnapsackProblem()
		const _returnValuepE6pI7J = await _KnapsackXvcRkCV.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsWKUkaFz = "oBwcqFMQsboqcbQR2MqYeK15yglFlS32i44Cl2HlgAtHTGLbPBgPKNj5EClgH96Yt9ljUEDK8kPa8";
		const _weightLimitgzyluJb = "7lIuTBmoJPudhcudegHBawStt3G4EGkYrDOwdmdwwlTlnp1lJ8QATYCUel3KTx8x1PHRNMUG17wQBEBsUZ";
		const _Knapsack2gskjD = new Knapsack(_possibleItemsWKUkaFz, _weightLimitgzyluJb)
		const _returnValuexh9l0Cl = await _Knapsack2gskjD.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueMV10Pp = await _Knapsack2gskjD.totalWeight()
		const _returnValueKfLFb0 = await _Knapsack2gskjD.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemskcE5EX = "nrJ";
		const _weightLimitC752g7g = 1.9286179354691253;
		const _Knapsackmxyo8yt = new Knapsack(_possibleItemskcE5EX, _weightLimitC752g7g)
		const _returnValueHiFBQqK = await _Knapsackmxyo8yt.solveUnboundedKnapsackProblem()
		const _returnValueMwD4UiY = await _Knapsackmxyo8yt.totalWeight()
		const _returnValueDIgEGnK = await _Knapsackmxyo8yt.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _returnValue0S15h7 = false;
		const _possibleItemsCKDjl3i = () => { return _returnValue0S15h7 };
		const _weightLimitNQEuEf3 = 4.187624872662354;
		const _KnapsackWxv9FbY = new Knapsack(_possibleItemsCKDjl3i, _weightLimitNQEuEf3)
		const _returnValueNj2ra2P = await _KnapsackWxv9FbY.solveUnboundedKnapsackProblem()
		const _returnValueUgF7KSJ = await _KnapsackWxv9FbY.sortPossibleItemsByWeight()
		const _returnValuehns9bev = await _KnapsackWxv9FbY.solveZeroOneKnapsackProblem()
		const _returnValueTNIcNih = await _KnapsackWxv9FbY.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsUSSjpt = "z95mN6zM8I1W1qSvtGPm9Q4wtdKxoLXsKCiOlSTC3puvg6a7aEN9sxwEjg4q0iMulyREfNUj9ScP5Ofhc";
		const _weightLimitwzyMlMS = {
		
	}
		const _KnapsackT6HXIdK = new Knapsack(_possibleItemsUSSjpt, _weightLimitwzyMlMS)
		const _returnValueKhowqk = await _KnapsackT6HXIdK.solveZeroOneKnapsackProblem()
		const _returnValuee4SaA9H = await _KnapsackT6HXIdK.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _arrayValuezU56xiH = false;
		const _arrayValueQ91x37T = {
		
	}
		const _arrayValueGKs2OGd = undefined;
		const _returnValuetbhxGOz = 7.535911843392206;
		const _arrayValuecSlFvN = () => { return _returnValuetbhxGOz };
		const _arrayValueBzufJVJ = true;
		const _arrayValueEkhRcLh = [_arrayValueGKs2OGd, _arrayValuecSlFvN, _arrayValueBzufJVJ]
		const _arrayValueaPsWxvl = [_arrayValuezU56xiH, _arrayValueQ91x37T, _arrayValueEkhRcLh]
		const _returnValueaWtHiP0 = "7M92s48GCq031cDok2Jd1cPjLeQRymjWBzbFbQDMXGVBQ4gkcMalVuH3NOVMi";
		const _arrayValueh1V0t8T = () => { return _returnValueaWtHiP0 };
		const _arrayValuemiLnBwH = [_arrayValueaPsWxvl, _arrayValueh1V0t8T]
		const _possibleItemsTCZF7ey = [_arrayValuemiLnBwH]
		const _weightLimitQr4j1mn = true;
		const _KnapsackCBUPDkW = new Knapsack(_possibleItemsTCZF7ey, _weightLimitQr4j1mn)
		const _returnValueyiFhBvW = await _KnapsackCBUPDkW.solveZeroOneKnapsackProblem()
		const _returnValuellg5rvu = await _KnapsackCBUPDkW.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueH8Mg5I7 = "tOftVt15VY2zRTrvB6xH0YfumUBLOE";
		const _arrayValueQHlCQYp = "uvWtRP";
		const _possibleItemscfZfjCr = [_arrayValueH8Mg5I7, _arrayValueQHlCQYp]
		const _weightLimitwgXfxGc = true;
		const _KnapsackKMnwnR = new Knapsack(_possibleItemscfZfjCr, _weightLimitwgXfxGc)
		const _returnValuecQecIM0 = await _KnapsackKMnwnR.solveZeroOneKnapsackProblem()
		const _returnValueMc7BdPc = await _KnapsackKMnwnR.totalValue()
	});
})