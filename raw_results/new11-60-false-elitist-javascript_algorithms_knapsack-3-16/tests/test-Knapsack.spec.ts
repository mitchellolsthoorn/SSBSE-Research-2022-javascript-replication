export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemsLXM0Qol = {
		
	}
		const _weightLimitwgMZ9lu = -5.551624813904693;
		const _KnapsackUUYPhj = new Knapsack(_possibleItemsLXM0Qol, _weightLimitwgMZ9lu)
		const _returnValueaJn39L = await _KnapsackUUYPhj.totalWeight()
		const _returnValuemHelFvm = await _KnapsackUUYPhj.solveZeroOneKnapsackProblem()
		const _returnValueaJZuGbw = await _KnapsackUUYPhj.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsNne6kI0 = {
		
	}
		const _weightLimitO62Oid1 = -8.733019340981528;
		const _KnapsacknalKjIM = new Knapsack(_possibleItemsNne6kI0, _weightLimitO62Oid1)
		const _returnValueBoZzQ6 = await _KnapsacknalKjIM.sortPossibleItemsByValue()
		const _returnValueZwQIVev = await _KnapsacknalKjIM.totalValue()
		const _returnValueyMtkFa = await _KnapsacknalKjIM.totalValue()
		const _returnValueXVPowf0 = await _KnapsacknalKjIM.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _possibleItemslB0aQRn = {
		
	}
		const _arrayValueKIiRlD8 = -1.1128945151942897;
		const _arrayValueX9J71eq = null;
		const _weightLimitPtBYzpk = [_arrayValueKIiRlD8, _arrayValueX9J71eq]
		const _KnapsackctnuCRt = new Knapsack(_possibleItemslB0aQRn, _weightLimitPtBYzpk)
		const _returnValuegtGSC6N = await _KnapsackctnuCRt.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueGdoTwaL = await _KnapsackctnuCRt.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsFdO5o1c = {
		
	}
		const _weightLimitoq76giq = 9.077694750723438;
		const _KnapsackGr4aZyE = new Knapsack(_possibleItemsFdO5o1c, _weightLimitoq76giq)
		const _returnValuevVlBbU = await _KnapsackGr4aZyE.sortPossibleItemsByWeight()
		const _returnValuehRxa2BU = await _KnapsackGr4aZyE.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuePhcq9aG = await _KnapsackGr4aZyE.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemskVx5BpF = {
		
	}
		const _weightLimitWivHWtc = -6.117037726169768;
		const _KnapsackIJMZEWj = new Knapsack(_possibleItemskVx5BpF, _weightLimitWivHWtc)
		const _returnValueVr51028 = await _KnapsackIJMZEWj.solveZeroOneKnapsackProblem()
		const _returnValueZUl9MCo = await _KnapsackIJMZEWj.totalValue()
		const _returnValueCs8kKV = await _KnapsackIJMZEWj.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsmmEcD7V = {
		
	}
		const _weightLimitU61uhBP = 5.824867296070543;
		const _KnapsackW5kePgw = new Knapsack(_possibleItemsmmEcD7V, _weightLimitU61uhBP)
		const _returnValueNMJIn6 = await _KnapsackW5kePgw.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemspDGWwhE = null;
		const _weightLimitwYrI8Lc = -4.7613927643225775;
		const _KnapsackufoVbiE = new Knapsack(_possibleItemspDGWwhE, _weightLimitwYrI8Lc)
		const _returnValue1hfxSo = await _KnapsackufoVbiE.solveUnboundedKnapsackProblem()
		const _returnValueKsKxEpB = await _KnapsackufoVbiE.sortPossibleItemsByWeight()
		const _returnValueeEEUAZ = await _KnapsackufoVbiE.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsviQmk1J = "mhlu3aAuSOzY2dBnNBhyqzdXjozJxJ7bU5KzUP75CB1zKxuW54KgVs4zv";
		const _weightLimitdfXq7F0 = 4.062693572402614;
		const _KnapsackiWlFax = new Knapsack(_possibleItemsviQmk1J, _weightLimitdfXq7F0)
		const _returnValueIA6cEAW = await _KnapsackiWlFax.solveZeroOneKnapsackProblem()
		const _returnValueX22CnI = await _KnapsackiWlFax.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _arrayValueyzOsdMM = false;
		const _arrayValueZrPwNRY = undefined;
		const _arrayValue97mo3M = {
		
	}
		const _returnValued2CFIdE = [_arrayValueZrPwNRY, _arrayValue97mo3M]
		const _returnValueorY8LFC = () => { return _returnValued2CFIdE };
		const _arrayValueoDzekPB = () => { return _returnValueorY8LFC };
		const _possibleItemsN3Ml7bU = [_arrayValueyzOsdMM, _arrayValueoDzekPB]
		const _weightLimitWaHNK9 = -8.332295610537393;
		const _Knapsackz47dNVi = new Knapsack(_possibleItemsN3Ml7bU, _weightLimitWaHNK9)
		const _returnValueucr0OD7 = await _Knapsackz47dNVi.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueAhUUuR6 = await _Knapsackz47dNVi.sortPossibleItemsByValue()
		const _returnValuenoo48Uv = await _Knapsackz47dNVi.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueK8U8xYb = -8.91725408099412;
		const _arrayValuemcjg7vC = 1.0364763448107936;
		const _arrayValueQvLtasc = false;
		const _arrayValuew9BqPp = [_arrayValuemcjg7vC, _arrayValueQvLtasc]
		const _possibleItemsQ757ZPn = [_arrayValueK8U8xYb, _arrayValuew9BqPp]
		const _weightLimitKiydxCF = 4.183667651976538;
		const _KnapsackjAdu7ny = new Knapsack(_possibleItemsQ757ZPn, _weightLimitKiydxCF)
		const _returnValueVBDRsv = await _KnapsackjAdu7ny.solveUnboundedKnapsackProblem()
		const _returnValueBnYsBAE = await _KnapsackjAdu7ny.solveZeroOneKnapsackProblem()
		const _returnValuezdOGBfi = await _KnapsackjAdu7ny.totalValue()
		const _returnValuezxO7o3W = await _KnapsackjAdu7ny.totalValue()
		const _returnValueK519lGr = await _KnapsackjAdu7ny.totalWeight()
	});

	it('test for Knapsack', async () => {
		const _returnValuencdb8mN = "zM3WyjAdM6l7aPwvVBGLcToUaSSdBl7IPn1D8fn1hrTFp05b0TkFwHfslpWpnGlqmsjH4mCVgciLo3PcM2mvkAPyM1KXWK3p6P";
		const _possibleItemstdH9ok = () => { return _returnValuencdb8mN };
		const _weightLimitzWvr48 = -2.1487136447347224;
		const _KnapsackfOFrxXg = new Knapsack(_possibleItemstdH9ok, _weightLimitzWvr48)
		const _returnValueCiJ5Jv8 = await _KnapsackfOFrxXg.sortPossibleItemsByValue()
		const _returnValueAM12fY3 = await _KnapsackfOFrxXg.solveZeroOneKnapsackProblem()
		const _returnValueWeUbnWT = await _KnapsackfOFrxXg.totalWeight()
		const _returnValueGBxDaI = await _KnapsackfOFrxXg.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _returnValueFFulFg2 = {
		
	}
		const _possibleItemsDA0HfCM = () => { return _returnValueFFulFg2 };
		const _weightLimitUQ8G1x8 = 1.4793644178699914;
		const _KnapsackjqZTl1g = new Knapsack(_possibleItemsDA0HfCM, _weightLimitUQ8G1x8)
		const _returnValueZ7MwXay = await _KnapsackjqZTl1g.sortPossibleItemsByValue()
		const _returnValuegDpSyF5 = await _KnapsackjqZTl1g.sortPossibleItemsByWeight()
		const _returnValueNAGvgaT = await _KnapsackjqZTl1g.sortPossibleItemsByWeight()
		const _returnValueH4gxVHH = await _KnapsackjqZTl1g.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueAEb5hYl = false;
		const _possibleItemsePgD4Cr = [_arrayValueAEb5hYl]
		const _weightLimitPEXsRoz = null;
		const _KnapsackhAFAZv0 = new Knapsack(_possibleItemsePgD4Cr, _weightLimitPEXsRoz)
		const _returnValue0kbcnA = await _KnapsackhAFAZv0.solveUnboundedKnapsackProblem()
		const _returnValueattJFJ6 = await _KnapsackhAFAZv0.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsly5f2gn = "ptLQSh6ynbpEFBrV3KFmB4OMRf1TE";
		const _weightLimitPsDpXoi = {
		
	}
		const _KnapsackTwXYkCa = new Knapsack(_possibleItemsly5f2gn, _weightLimitPsDpXoi)
		const _returnValueZSZhkI3 = await _KnapsackTwXYkCa.solveUnboundedKnapsackProblem()
		const _returnValuel8N4RSL = await _KnapsackTwXYkCa.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueocFt7fx = await _KnapsackTwXYkCa.solveZeroOneKnapsackProblem()
	});
})