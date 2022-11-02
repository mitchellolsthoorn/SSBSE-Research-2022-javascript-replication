export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternU0xzIKl = -5.801806087392303;
		const _KnapsackItemHoPO2wN = new KnapsackItem(_objectPatternU0xzIKl)
		const _returnValueeVZkleL = await _KnapsackItemHoPO2wN.totalWeight()
		const _returnValueOXobz2n = await _KnapsackItemHoPO2wN.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternbxFsFzV = {
		
	}
		const _KnapsackItemJ7XSnzy = new KnapsackItem(_objectPatternbxFsFzV)
		const _returnValueFf0IdXS = await _KnapsackItemJ7XSnzy.valuePerWeightRatio()
		const _returnValueOFiSm1K = await _KnapsackItemJ7XSnzy.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternMgdQHv = 5.372000167753924;
		const _KnapsackItemDYMUgB3 = new KnapsackItem(_objectPatternMgdQHv)
		const _returnValueaWc0OVO = await _KnapsackItemDYMUgB3.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternWnJw2jL = 2.7648236832986974;
		const _KnapsackItemGn3pZ8 = new KnapsackItem(_objectPatternWnJw2jL)
		const _returnValueGfBAFi8 = await _KnapsackItemGn3pZ8.toString()
		const _returnValueHToKUA = await _KnapsackItemGn3pZ8.totalWeight()
		const _returnValuextLmn8Z = await _KnapsackItemGn3pZ8.totalValue()
	});
})