export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatterngZNhK5S = 4.143032601368759;
		const _KnapsackIteml3GPjvE = new KnapsackItem(_objectPatterngZNhK5S)
		const _returnValuesqYSAo9 = await _KnapsackIteml3GPjvE.valuePerWeightRatio()
		const _returnValuePYo6bM5 = await _KnapsackIteml3GPjvE.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValuel73S7Dw = undefined;
		const _objectPatternVxLOWtn = [_arrayValuel73S7Dw]
		const _KnapsackItemxgNrxN2 = new KnapsackItem(_objectPatternVxLOWtn)
		const _returnValueWIlchzj = await _KnapsackItemxgNrxN2.toString()
		const _returnValueEmRuWVW = await _KnapsackItemxgNrxN2.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternv4VkMnI = true;
		const _KnapsackItemMYNdNpi = new KnapsackItem(_objectPatternv4VkMnI)
		const _returnValuekSaJVV6 = await _KnapsackItemMYNdNpi.totalValue()
		const _returnValuezRxT0TZ = await _KnapsackItemMYNdNpi.totalValue()
		const _returnValuegGXq3Du = await _KnapsackItemMYNdNpi.totalWeight()
	});
})