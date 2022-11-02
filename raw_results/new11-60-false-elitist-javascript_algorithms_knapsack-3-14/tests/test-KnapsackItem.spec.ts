export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _arrayValueKPpfe9I = "hyAD3sLEY1axN8AM6AofRM2M8zJYOy6nyO7vxCOran7Dtj9Ygfw";
		const _arrayValueGHTjW6O = undefined;
		const _objectPatternZVYXUUw = [_arrayValueKPpfe9I, _arrayValueGHTjW6O]
		const _KnapsackItemQCrJaFt = new KnapsackItem(_objectPatternZVYXUUw)
		const _returnValueTP1hiB = await _KnapsackItemQCrJaFt.valuePerWeightRatio()
		const _returnValuelnq9cnc = await _KnapsackItemQCrJaFt.totalWeight()
		const _returnValueT1IoQ4P = await _KnapsackItemQCrJaFt.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternBYn73OX = false;
		const _KnapsackItemt0FyX9q = new KnapsackItem(_objectPatternBYn73OX)
		const _returnValueVcJejVu = await _KnapsackItemt0FyX9q.totalWeight()
		const _returnValueuMwymcZ = await _KnapsackItemt0FyX9q.totalWeight()
		const _returnValuejN0gRRK = await _KnapsackItemt0FyX9q.valuePerWeightRatio()
		const _returnValueo0jQOCB = await _KnapsackItemt0FyX9q.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternDfSnhH6 = false;
		const _KnapsackItemVJD0EU1 = new KnapsackItem(_objectPatternDfSnhH6)
		const _returnValuerc2zxbR = await _KnapsackItemVJD0EU1.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternp8UpymV = "d94ED4xOk4ota";
		const _KnapsackItemJ1pYSO6 = new KnapsackItem(_objectPatternp8UpymV)
		const _returnValueRM0Hbjj = await _KnapsackItemJ1pYSO6.toString()
		const _returnValueqhCbnir = await _KnapsackItemJ1pYSO6.valuePerWeightRatio()
	});
})