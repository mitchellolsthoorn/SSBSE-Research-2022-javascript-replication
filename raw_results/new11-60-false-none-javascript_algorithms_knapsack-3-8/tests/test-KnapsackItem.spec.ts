export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatterntNx3rf = true;
		const _KnapsackItemGwY39w2 = new KnapsackItem(_objectPatterntNx3rf)
		const _returnValueLxSvnMW = await _KnapsackItemGwY39w2.toString()
		const _returnValueRwyTkLS = await _KnapsackItemGwY39w2.totalValue()
		const _returnValueJXJEjWp = await _KnapsackItemGwY39w2.totalWeight()
		const _returnValuesUJZuGa = await _KnapsackItemGwY39w2.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatterndSnEWsQ = false;
		const _KnapsackItemHg6VWcX = new KnapsackItem(_objectPatterndSnEWsQ)
		const _returnValueizAzh15 = await _KnapsackItemHg6VWcX.valuePerWeightRatio()
		const _returnValuepgsl3W = await _KnapsackItemHg6VWcX.valuePerWeightRatio()
		const _returnValueaEGiWdX = await _KnapsackItemHg6VWcX.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValueUbHxVT = -4.303635794529178;
		const _objectPatterngUdWrD = [_arrayValueUbHxVT]
		const _KnapsackItemhbaNit = new KnapsackItem(_objectPatterngUdWrD)
		const _returnValueya99hzO = await _KnapsackItemhbaNit.totalWeight()
		const _returnValueK6HvYrz = await _KnapsackItemhbaNit.totalValue()
		const _returnValueN5ywISo = await _KnapsackItemhbaNit.toString()
	});
})