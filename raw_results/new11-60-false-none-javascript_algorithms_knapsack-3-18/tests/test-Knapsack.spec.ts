export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _arrayValueVUL8qvc = 4.117558070209055;
		const _arrayValuedgTfKW4 = null;
		const _arrayValuewWnMGRZ = null;
		const _possibleItemsxzWZTkW = [_arrayValueVUL8qvc, _arrayValuedgTfKW4, _arrayValuewWnMGRZ]
		const _weightLimitBMYeisd = null;
		const _Knapsacky82q2Xq = new Knapsack(_possibleItemsxzWZTkW, _weightLimitBMYeisd)
		const _returnValuehMlL9RT = await _Knapsacky82q2Xq.solveUnboundedKnapsackProblem()
		const _returnValuer6yW4U6 = await _Knapsacky82q2Xq.solveUnboundedKnapsackProblem()
		const _returnValuejmX9Ipn = await _Knapsacky82q2Xq.totalWeight()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsvJxiXBW = undefined;
		const _returnValueqLGFM9N = undefined;
		const _weightLimitYJ1bAF = () => { return _returnValueqLGFM9N };
		const _KnapsackubOGvR = new Knapsack(_possibleItemsvJxiXBW, _weightLimitYJ1bAF)
		const _returnValueq4KmWil = await _KnapsackubOGvR.solveZeroOneKnapsackProblem()
		const _returnValuetP14qIN = await _KnapsackubOGvR.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsLfjXMlr = null;
		const _weightLimitjRSN6UJ = false;
		const _KnapsackjBQvETd = new Knapsack(_possibleItemsLfjXMlr, _weightLimitjRSN6UJ)
		const _returnValueyX5T0fV = await _KnapsackjBQvETd.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsNzgsfTh = null;
		const _weightLimitT3mquMr = 5.504992961840154;
		const _KnapsacknmXN7s = new Knapsack(_possibleItemsNzgsfTh, _weightLimitT3mquMr)
		const _returnValueJs1wuW6 = await _KnapsacknmXN7s.sortPossibleItemsByWeight()
		const _returnValueIwUGKEj = await _KnapsacknmXN7s.solveUnboundedKnapsackProblem()
		const _returnValueESdn2ZU = await _KnapsacknmXN7s.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueb2t2tEO = await _KnapsacknmXN7s.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsHodintI = {
		
	}
		const _weightLimitLUCcwiO = null;
		const _KnapsackjkrQnpE = new Knapsack(_possibleItemsHodintI, _weightLimitLUCcwiO)
		const _returnValue190efr = await _KnapsackjkrQnpE.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueeCrLo6 = await _KnapsackjkrQnpE.totalWeight()
		const _returnValuekjZGHFw = await _KnapsackjkrQnpE.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueFQardK = await _KnapsackjkrQnpE.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuegcVc56t = await _KnapsackjkrQnpE.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _returnValueWiGFVIb = false;
		const _possibleItemsU0qxQki = () => { return _returnValueWiGFVIb };
		const _returnValueSbRcl0e = undefined;
		const _weightLimitaQGjrMT = () => { return _returnValueSbRcl0e };
		const _KnapsackwmelzD = new Knapsack(_possibleItemsU0qxQki, _weightLimitaQGjrMT)
		const _returnValuewgx3gg = await _KnapsackwmelzD.totalWeight()
		const _returnValuep2f7Y4 = await _KnapsackwmelzD.sortPossibleItemsByValue()
		const _returnValueUDr2aH1 = await _KnapsackwmelzD.solveZeroOneKnapsackProblem()
		const _returnValueDJkNEd6 = await _KnapsackwmelzD.sortPossibleItemsByValue()
		const _returnValueUrjyWJv = await _KnapsackwmelzD.totalValue()
	});

	it('test for Knapsack', async () => {
		const _returnValuezGCpXQ2 = undefined;
		const _possibleItemsJHOKcud = () => { return _returnValuezGCpXQ2 };
		const _weightLimitJHbEgmY = -1.0549373609015547;
		const _KnapsackOC5VlP1 = new Knapsack(_possibleItemsJHOKcud, _weightLimitJHbEgmY)
		const _returnValueBB8Ei5l = await _KnapsackOC5VlP1.solveUnboundedKnapsackProblem()
		const _returnValuej0ZU1zZ = await _KnapsackOC5VlP1.solveUnboundedKnapsackProblem()
		const _returnValuehn1JlnU = await _KnapsackOC5VlP1.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueVnmA1tD = []
		const _arrayValueI8RWqdE = "t16Dx6vw2OdQziQGSjjeg8h3ATe8X5iiPf8Gizp7pmAXBicfm";
		const _possibleItemsNoPDczI = [_arrayValueVnmA1tD, _arrayValueI8RWqdE]
		const _weightLimitq2nFUg4 = null;
		const _Knapsackjyqz9HK = new Knapsack(_possibleItemsNoPDczI, _weightLimitq2nFUg4)
		const _returnValueKHp7F8C = await _Knapsackjyqz9HK.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueLgX0Oy0 = {
		
	}
		const _arrayValueUzDqdsx = "NAghvUEWgdMA2z6J6Rt1RQ9LeQaNjhsH3TFxncjk5rws4BcAx6RanRyTnBmArNRNd29faJv4";
		const _arrayValueGxtuFnv = false;
		const _possibleItemsfKHYOu = [_arrayValueLgX0Oy0, _arrayValueUzDqdsx, _arrayValueGxtuFnv]
		const _weightLimitQM9I2pX = null;
		const _Knapsacku07jOOs = new Knapsack(_possibleItemsfKHYOu, _weightLimitQM9I2pX)
		const _returnValueeQeFWk3 = await _Knapsacku07jOOs.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuesmsGQxh = await _Knapsacku07jOOs.solveZeroOneKnapsackProblem()
		const _returnValuerzcidsw = await _Knapsacku07jOOs.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuexnP5qeq = await _Knapsacku07jOOs.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueX8pvm6J = "npKwLdkPktfyp7iqvCZBBV8Et5ifG3PKay4geIQcBWx48Jbvxd2vursqUBYROvAkc7x6E9m1LGJlsAtmQGg";
		const _possibleItemssg9h6LG = [_arrayValueX8pvm6J]
		const _weightLimitQXcnwc2 = 0.4807490944284183;
		const _KnapsackCeqheXI = new Knapsack(_possibleItemssg9h6LG, _weightLimitQXcnwc2)
		const _returnValueHyytZ5x = await _KnapsackCeqheXI.solveUnboundedKnapsackProblem()
		const _returnValuesj9a7c0 = await _KnapsackCeqheXI.solveZeroOneKnapsackProblem()
		const _returnValueksqx6a0 = await _KnapsackCeqheXI.solveUnboundedKnapsackProblem()
		const _returnValuesVF6BFA = await _KnapsackCeqheXI.totalWeight()
	});

	it('test for Knapsack', async () => {
		const _returnValueVWPVFA4 = true;
		const _possibleItemsd7nBXhp = () => { return _returnValueVWPVFA4 };
		const _weightLimitfG0iI2A = 2.8949848339416313;
		const _Knapsackr6T8id = new Knapsack(_possibleItemsd7nBXhp, _weightLimitfG0iI2A)
		const _returnValueVknz78y = await _Knapsackr6T8id.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuenvG8PxU = await _Knapsackr6T8id.solveZeroOneKnapsackProblem()
		const _returnValueeS0hyLe = await _Knapsackr6T8id.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemspP9gfGf = "VVuavNJKj1NSi6sh5aLHaLveqBwu90wz4zTBUrXBwcn5IpQ";
		const _weightLimitRGhPQna = true;
		const _KnapsackZrPBdNj = new Knapsack(_possibleItemspP9gfGf, _weightLimitRGhPQna)
		const _returnValuesnGk732 = await _KnapsackZrPBdNj.sortPossibleItemsByWeight()
		const _returnValueHusl4sS = await _KnapsackZrPBdNj.sortPossibleItemsByWeight()
		const _returnValuewQ4LxMu = await _KnapsackZrPBdNj.solveZeroOneKnapsackProblem()
	});
})