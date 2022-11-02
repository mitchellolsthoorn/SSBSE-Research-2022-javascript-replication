export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemscWeA0r = "ECabGoz8Bs3M4y1";
		const _weightLimitKIAyr8z = -9.356809627936375;
		const _KnapsackiHJUM0k = new Knapsack(_possibleItemscWeA0r, _weightLimitKIAyr8z)
		const _returnValueaFfC0tb = await _KnapsackiHJUM0k.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsGl341c6 = "4UCZoAnjH";
		const _weightLimitWhEnq2 = false;
		const _KnapsackeLB1XjW = new Knapsack(_possibleItemsGl341c6, _weightLimitWhEnq2)
		const _returnValuea014LFI = await _KnapsackeLB1XjW.solveZeroOneKnapsackProblem()
		const _returnValuepUsrRnw = await _KnapsackeLB1XjW.sortPossibleItemsByValue()
		const _returnValuetC75vJo = await _KnapsackeLB1XjW.sortPossibleItemsByValue()
		const _returnValueHu4EURO = await _KnapsackeLB1XjW.totalValue()
	});

	it('test for Knapsack', async () => {
		const _arrayValuecO8xaDF = {
		
	}
		const _possibleItemsitixPLz = [_arrayValuecO8xaDF]
		const _weightLimitMRzC7X = 6.086465301538595;
		const _KnapsackoaofqX1 = new Knapsack(_possibleItemsitixPLz, _weightLimitMRzC7X)
		const _returnValueJXrUOJI = await _KnapsackoaofqX1.solveUnboundedKnapsackProblem()
		const _returnValueDDRgYvd = await _KnapsackoaofqX1.solveUnboundedKnapsackProblem()
		const _returnValuel1tT3xi = await _KnapsackoaofqX1.totalWeight()
	});

	it('test for Knapsack', async () => {
		const _arrayValuepcR7jbB = []
		const _arrayValuesQxvGaV = []
		const _arrayValuem3rVMFO = true;
		const _possibleItemsxUv5y2c = [_arrayValuepcR7jbB, _arrayValuesQxvGaV, _arrayValuem3rVMFO]
		const _weightLimitCIEuACp = true;
		const _KnapsackR4kaVjb = new Knapsack(_possibleItemsxUv5y2c, _weightLimitCIEuACp)
		const _returnValueRkHgGe = await _KnapsackR4kaVjb.solveZeroOneKnapsackProblem()
		const _returnValueGEdXKk = await _KnapsackR4kaVjb.sortPossibleItemsByWeight()
	});
})