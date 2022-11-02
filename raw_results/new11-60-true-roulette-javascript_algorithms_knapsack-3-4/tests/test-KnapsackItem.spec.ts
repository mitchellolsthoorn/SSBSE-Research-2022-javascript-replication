export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternVymgUM7 = "ZsMS29wdVr4evlUtjM2gbPF12zREPJIyd";
		const _KnapsackItemSGowiSi = new KnapsackItem(_objectPatternVymgUM7)
		const _returnValuezG4X0pA = await _KnapsackItemSGowiSi.totalWeight()
		const _returnValueAS4vLDn = await _KnapsackItemSGowiSi.toString()
		const _returnValueCbLpHl6 = await _KnapsackItemSGowiSi.totalValue()
		const _returnValueEwZ7EV = await _KnapsackItemSGowiSi.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternHJpNG7b = -0.7555151864873295;
		const _KnapsackItemkqA1lgF = new KnapsackItem(_objectPatternHJpNG7b)
		const _returnValuebzLaoC = await _KnapsackItemkqA1lgF.toString()
		const _returnValuetEcBqW7 = await _KnapsackItemkqA1lgF.valuePerWeightRatio()
		const _returnValueRzS2tJX = await _KnapsackItemkqA1lgF.totalWeight()
		const _returnValueJN1og31 = await _KnapsackItemkqA1lgF.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternWD4c5D2 = true;
		const _KnapsackItemQHdOzL8 = new KnapsackItem(_objectPatternWD4c5D2)
		const _returnValueWZKKWqu = await _KnapsackItemQHdOzL8.totalValue()
		const _returnValuefZzZ0yE = await _KnapsackItemQHdOzL8.totalValue()
		const _returnValuezaZxX7Z = await _KnapsackItemQHdOzL8.totalWeight()
	});
})