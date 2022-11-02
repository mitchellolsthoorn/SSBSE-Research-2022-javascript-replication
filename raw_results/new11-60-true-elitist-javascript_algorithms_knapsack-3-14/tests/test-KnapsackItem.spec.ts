export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternl8lRQP = true;
		const _KnapsackItemUVZCdv5 = new KnapsackItem(_objectPatternl8lRQP)
		const _returnValueVzEeOfW = await _KnapsackItemUVZCdv5.toString()
		const _returnValueYvOolgX = await _KnapsackItemUVZCdv5.totalWeight()
		const _returnValuesy2qPys = await _KnapsackItemUVZCdv5.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternixuEnCx = -6.836103133878898;
		const _KnapsackItemLdGeDJq = new KnapsackItem(_objectPatternixuEnCx)
		const _returnValueDfXhE3 = await _KnapsackItemLdGeDJq.toString()
		const _returnValuesLzlZtI = await _KnapsackItemLdGeDJq.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _returnValue2sHDCd = undefined;
		const _objectPatternSvB9O2E = () => { return _returnValue2sHDCd };
		const _KnapsackItemUjwKeJg = new KnapsackItem(_objectPatternSvB9O2E)
		const _returnValueclHHoUG = await _KnapsackItemUjwKeJg.totalValue()
		const _returnValueYoaR24L = await _KnapsackItemUjwKeJg.totalWeight()
	});
})