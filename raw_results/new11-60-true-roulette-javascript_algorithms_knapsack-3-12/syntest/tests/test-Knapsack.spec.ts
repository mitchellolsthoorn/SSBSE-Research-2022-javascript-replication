export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemspoHnZhR = "N";
		const _weightLimitGUUHW08 = {
		
	}
		const _KnapsackiNEIFmM = new Knapsack(_possibleItemspoHnZhR, _weightLimitGUUHW08)
		const _returnValueOnBGCp = await _KnapsackiNEIFmM.sortPossibleItemsByValue()
		const _returnValueqiu7Ndb = await _KnapsackiNEIFmM.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueTuymoG = await _KnapsackiNEIFmM.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsoJTlS0K = []
		const _weightLimitblj3vT = {
		
	}
		const _KnapsackA8rE0LZ = new Knapsack(_possibleItemsoJTlS0K, _weightLimitblj3vT)
		const _returnValueaun7Cgi = await _KnapsackA8rE0LZ.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuezm8EkOX = await _KnapsackA8rE0LZ.solveZeroOneKnapsackProblem()
		const _returnValueWHScd5i = await _KnapsackA8rE0LZ.solveUnboundedKnapsackProblem()
		const _returnValueigVWEm9 = await _KnapsackA8rE0LZ.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _arrayValue1RZDbf = true;
		const _arrayValueN3BhwyB = null;
		const _arrayValuepLwiDao = -2.382900629514209;
		const _arrayValuegbvJVtu = [_arrayValueN3BhwyB, _arrayValuepLwiDao]
		const _arrayValueh2L8w0p = []
		const _possibleItemsVfXHy1E = [_arrayValue1RZDbf, _arrayValuegbvJVtu, _arrayValueh2L8w0p]
		const _weightLimitASgiosu = null;
		const _KnapsackdQGhQh = new Knapsack(_possibleItemsVfXHy1E, _weightLimitASgiosu)
		const _returnValueTg6Uya = await _KnapsackdQGhQh.sortPossibleItemsByValue()
		const _returnValueVZc5Jeb = await _KnapsackdQGhQh.solveZeroOneKnapsackProblem()
		const _returnValueAU6RNTF = await _KnapsackdQGhQh.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _possibleItemssPDy6sv = "qETJ5aAtANlAM9BNkqDgTIYDUWKti6wVi9G7yVNpkJbbAeAKQ2ci5eSq9JyPx8oqRF2myqRA";
		const _weightLimitOEI1uv4 = 0.7148401646344524;
		const _KnapsackKJbJaPr = new Knapsack(_possibleItemssPDy6sv, _weightLimitOEI1uv4)
		const _returnValueyQ00z6s = await _KnapsackKJbJaPr.solveUnboundedKnapsackProblem()
		const _returnValuedpk8hXp = await _KnapsackKJbJaPr.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _returnValuesTKFOrw = null;
		const _possibleItemsD7NRTZO = () => { return _returnValuesTKFOrw };
		const _weightLimitxnNelWB = "nbjq";
		const _KnapsackH45joJb = new Knapsack(_possibleItemsD7NRTZO, _weightLimitxnNelWB)
		const _returnValueEsd7eGK = await _KnapsackH45joJb.solveZeroOneKnapsackProblem()
		const _returnValueBuVFAVa = await _KnapsackH45joJb.totalValue()
		const _returnValueqpg2krG = await _KnapsackH45joJb.sortPossibleItemsByValue()
		const _returnValuexEjprwp = await _KnapsackH45joJb.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueoNhWogN = true;
		const _arrayValuehndVJPv = null;
		const _arrayValueN1he8eN = true;
		const _returnValuepgqANA3 = [_arrayValueoNhWogN, _arrayValuehndVJPv, _arrayValueN1he8eN]
		const _possibleItemsbmqV30f = () => { return _returnValuepgqANA3 };
		const _weightLimitlU5GQQM = 9.014255433147373;
		const _KnapsackaHsv3g = new Knapsack(_possibleItemsbmqV30f, _weightLimitlU5GQQM)
		const _returnValueGkR40vG = await _KnapsackaHsv3g.solveZeroOneKnapsackProblem()
		const _returnValuecj46t0v = await _KnapsackaHsv3g.sortPossibleItemsByValue()
		const _returnValueFQeRuti = await _KnapsackaHsv3g.totalValue()
		const _returnValueYMEbeq6 = await _KnapsackaHsv3g.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsEZQsQaR = "RwMULBysrM7LC9w0VB8FsWmrsmiWWrAXB4fXJNeCK9LDpI6Y5x4ysoGA5A9REFNqCVCIfnNz";
		const _weightLimitC1GuoEE = true;
		const _KnapsackvbCq7jT = new Knapsack(_possibleItemsEZQsQaR, _weightLimitC1GuoEE)
		const _returnValueg5bjpKx = await _KnapsackvbCq7jT.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuePuH5IS5 = await _KnapsackvbCq7jT.solveZeroOneKnapsackProblem()
		const _returnValueT9pRzqQ = await _KnapsackvbCq7jT.totalValue()
	});
})