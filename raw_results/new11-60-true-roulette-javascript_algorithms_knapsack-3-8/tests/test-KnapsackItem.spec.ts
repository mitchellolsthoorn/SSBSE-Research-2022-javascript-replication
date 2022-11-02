export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _arrayValuePVBOZC = null;
		const _arrayValueLLtjY45 = -4.381764442122535;
		const _objectPatternneLen8U = [_arrayValuePVBOZC, _arrayValueLLtjY45]
		const _KnapsackItemNZpyjm = new KnapsackItem(_objectPatternneLen8U)
		const _returnValueIeyWeAg = await _KnapsackItemNZpyjm.totalValue()
		const _returnValueYv62HJd = await _KnapsackItemNZpyjm.toString()
		const _returnValuezd20I5j = await _KnapsackItemNZpyjm.toString()
		const _returnValueCg0YqnG = await _KnapsackItemNZpyjm.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternqxgEoin = -8.048690727091186;
		const _KnapsackItemN3NB3Il = new KnapsackItem(_objectPatternqxgEoin)
		const _returnValueoVzv9eD = await _KnapsackItemN3NB3Il.totalWeight()
		const _returnValueuKrwEj = await _KnapsackItemN3NB3Il.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternrNxZFpt = false;
		const _KnapsackItemtsQJibc = new KnapsackItem(_objectPatternrNxZFpt)
		const _returnValueXVgtfG = await _KnapsackItemtsQJibc.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatterniX64FLr = true;
		const _KnapsackIteml7LNNTM = new KnapsackItem(_objectPatterniX64FLr)
		const _returnValuesPZcZlt = await _KnapsackIteml7LNNTM.toString()
		const _returnValuenEXprPf = await _KnapsackIteml7LNNTM.totalValue()
		const _returnValueHBvl5nA = await _KnapsackIteml7LNNTM.totalValue()
		const _returnValueUVuVyaa = await _KnapsackIteml7LNNTM.valuePerWeightRatio()
	});
})