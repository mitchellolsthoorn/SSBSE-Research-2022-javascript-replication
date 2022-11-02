export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemsHsi6mqe = undefined;
		const _weightLimitI2tUsD5 = "JNSlJEV7s8";
		const _KnapsackyURGDkI = new Knapsack(_possibleItemsHsi6mqe, _weightLimitI2tUsD5)
		const _returnValuebMEENhp = await _KnapsackyURGDkI.solveZeroOneKnapsackProblem()
		const _returnValueWIY7Z2s = await _KnapsackyURGDkI.totalValue()
		const _returnValueHK6F8oH = await _KnapsackyURGDkI.sortPossibleItemsByWeight()
		const _returnValuesVYdu98 = await _KnapsackyURGDkI.totalWeight()
		const _returnValuenlUHgws = await _KnapsackyURGDkI.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsD7oxD6J = 2.0886954045843638;
		const _weightLimitooVqv3B = 2.901027044119349;
		const _KnapsackCJnitfk = new Knapsack(_possibleItemsD7oxD6J, _weightLimitooVqv3B)
		const _returnValueRwQ8wR = await _KnapsackCJnitfk.totalValue()
		const _returnValueMWbXnz4 = await _KnapsackCJnitfk.solveZeroOneKnapsackProblem()
		const _returnValuejmjPRkJ = await _KnapsackCJnitfk.solveUnboundedKnapsackProblem()
		const _returnValueDY5jmVk = await _KnapsackCJnitfk.solveUnboundedKnapsackProblem()
		const _returnValueG8qr4xf = await _KnapsackCJnitfk.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsO0cDVWu = true;
		const _weightLimitfWJEwH1 = true;
		const _Knapsacke6MOIMz = new Knapsack(_possibleItemsO0cDVWu, _weightLimitfWJEwH1)
		const _returnValueYR8eTKg = await _Knapsacke6MOIMz.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueE0Kf5WJ = await _Knapsacke6MOIMz.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsyRg93qQ = undefined;
		const _weightLimitx59fBHI = null;
		const _KnapsackOE0FYng = new Knapsack(_possibleItemsyRg93qQ, _weightLimitx59fBHI)
		const _returnValueR3aWR31 = await _KnapsackOE0FYng.solveUnboundedKnapsackProblem()
		const _returnValuexzq7Kiw = await _KnapsackOE0FYng.sortPossibleItemsByWeight()
		const _returnValueSAifBbp = await _KnapsackOE0FYng.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _arrayValueli4yU6l = true;
		const _arrayValuepBnMRyQ = {
		
	}
		const _possibleItemspvoKyOr = [_arrayValueli4yU6l, _arrayValuepBnMRyQ]
		const _weightLimitCZTykoD = "Dvm9";
		const _KnapsackwVfaP9Y = new Knapsack(_possibleItemspvoKyOr, _weightLimitCZTykoD)
		const _returnValueAX9eIK = await _KnapsackwVfaP9Y.solveUnboundedKnapsackProblem()
		const _returnValueHkG9tmx = await _KnapsackwVfaP9Y.sortPossibleItemsByValue()
		const _returnValueIWQDPUw = await _KnapsackwVfaP9Y.solveUnboundedKnapsackProblem()
		const _returnValueB0IgLx = await _KnapsackwVfaP9Y.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsTYXZLBW = "Ugy5Ods9uItvKf24SP5L6";
		const _weightLimitxCdSIZ6 = true;
		const _KnapsackR7AWR11 = new Knapsack(_possibleItemsTYXZLBW, _weightLimitxCdSIZ6)
		const _returnValuei3AUsI = await _KnapsackR7AWR11.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueT0UZg2O = true;
		const _arrayValueYLtEfX = -7.3089347332736665;
		const _possibleItemscWJkHUx = [_arrayValueT0UZg2O, _arrayValueYLtEfX]
		const _weightLimitWls7sFR = true;
		const _KnapsackSg7UAr0 = new Knapsack(_possibleItemscWJkHUx, _weightLimitWls7sFR)
		const _returnValueJ5EjayS = await _KnapsackSg7UAr0.sortPossibleItemsByValue()
		const _returnValueEGouYT3 = await _KnapsackSg7UAr0.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuewAIrILQ = await _KnapsackSg7UAr0.solveUnboundedKnapsackProblem()
	});
})