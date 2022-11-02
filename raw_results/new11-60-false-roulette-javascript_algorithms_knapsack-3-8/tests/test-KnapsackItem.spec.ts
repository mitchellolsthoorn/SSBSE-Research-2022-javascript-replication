export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternuVA7o64 = "DaF7p1gW3duQL7GvuZF0Oe7IxnzQ";
		const _KnapsackItemKoMI75K = new KnapsackItem(_objectPatternuVA7o64)
		const _returnValueMtYrW3T = await _KnapsackItemKoMI75K.valuePerWeightRatio()
		const _returnValueGIJRhxn = await _KnapsackItemKoMI75K.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternJXgZvgE = false;
		const _KnapsackItemxTJfusK = new KnapsackItem(_objectPatternJXgZvgE)
		const _returnValuegq4TQDc = await _KnapsackItemxTJfusK.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternRoN1gBi = "zpWOEzIoDTXACYm9t3C6";
		const _KnapsackItemPvHQKYl = new KnapsackItem(_objectPatternRoN1gBi)
		const _returnValuenDaBl7c = await _KnapsackItemPvHQKYl.toString()
		const _returnValueWgn0yR = await _KnapsackItemPvHQKYl.totalValue()
	});
})