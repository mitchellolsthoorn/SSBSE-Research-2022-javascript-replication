export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternpQmPA9 = -0.3658300525488958;
		const _KnapsackItemXo5T3NO = new KnapsackItem(_objectPatternpQmPA9)
		const _returnValueGbRuF7k = await _KnapsackItemXo5T3NO.toString()
		const _returnValuegJWtJkI = await _KnapsackItemXo5T3NO.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _returnValueFeppkGO = -5.873075746898808;
		const _objectPatternG1ownAL = () => { return _returnValueFeppkGO };
		const _KnapsackItemr6ltbB = new KnapsackItem(_objectPatternG1ownAL)
		const _returnValueelHlu40 = await _KnapsackItemr6ltbB.valuePerWeightRatio()
		const _returnValuei79z8bv = await _KnapsackItemr6ltbB.totalWeight()
		const _returnValueRwws66i = await _KnapsackItemr6ltbB.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValueX9QQBPi = undefined;
		const _arrayValuezRn0IJ = true;
		const _objectPatternI9NopZH = [_arrayValueX9QQBPi, _arrayValuezRn0IJ]
		const _KnapsackItemouuJpob = new KnapsackItem(_objectPatternI9NopZH)
		const _returnValueauhqmsc = await _KnapsackItemouuJpob.totalValue()
		const _returnValueFPLcR0s = await _KnapsackItemouuJpob.toString()
		const _returnValueyoT0Jgy = await _KnapsackItemouuJpob.totalWeight()
	});
})