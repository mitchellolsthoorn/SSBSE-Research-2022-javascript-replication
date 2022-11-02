export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _arrayValueKpZ1oyv = 0.9820492234684881;
		const _arrayValueqCvMgsn = false;
		const _arrayValueFj4gMG3 = [_arrayValueqCvMgsn]
		const _arrayValuefeIyT82 = [_arrayValueKpZ1oyv, _arrayValueFj4gMG3]
		const _objectPatternaMpHEe6 = [_arrayValuefeIyT82]
		const _KnapsackItemouQwi2 = new KnapsackItem(_objectPatternaMpHEe6)
		const _returnValueZffKQVy = await _KnapsackItemouQwi2.totalValue()
		const _returnValueMIAxQDC = await _KnapsackItemouQwi2.toString()
		const _returnValueBc1fdAI = await _KnapsackItemouQwi2.totalWeight()
		const _returnValuefABBYlf = await _KnapsackItemouQwi2.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternXTwLTx6 = "wPezJWv51m6YSwIlUiWzfhtdxBk5hEHIQBPtByiI21vPJvRp67D7fytHiaspzfGgF9v70IXgItzoIjzKDTn";
		const _KnapsackItemrfEx6gu = new KnapsackItem(_objectPatternXTwLTx6)
		const _returnValueF4LMmro = await _KnapsackItemrfEx6gu.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternRyObX3u = "ayO13TTgqyGb7lSLciJSQXui2oKKu8qlO6nISsxpUGXMfEwyTA";
		const _KnapsackItemAY0chiC = new KnapsackItem(_objectPatternRyObX3u)
		const _returnValueOgksf9L = await _KnapsackItemAY0chiC.valuePerWeightRatio()
		const _returnValueLoiojoK = await _KnapsackItemAY0chiC.totalWeight()
		const _returnValueNk01wba = await _KnapsackItemAY0chiC.totalWeight()
		const _returnValueylO8UQK = await _KnapsackItemAY0chiC.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternmHiKK9U = "Le9nBxuRijLGBBdiZlabFOhdWEEPKbkH";
		const _KnapsackItemOePTqNQ = new KnapsackItem(_objectPatternmHiKK9U)
		const _returnValueSc9DAHd = await _KnapsackItemOePTqNQ.toString()
		const _returnValueMZdhbj7 = await _KnapsackItemOePTqNQ.totalWeight()
	});
})