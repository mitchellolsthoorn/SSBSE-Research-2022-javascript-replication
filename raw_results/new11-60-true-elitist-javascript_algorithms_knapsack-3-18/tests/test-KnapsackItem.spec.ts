export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternPM4tDn0 = false;
		const _KnapsackItemsRE9Hox = new KnapsackItem(_objectPatternPM4tDn0)
		const _returnValueGz40X6 = await _KnapsackItemsRE9Hox.totalWeight()
		const _returnValueSC8OyW = await _KnapsackItemsRE9Hox.valuePerWeightRatio()
		const _returnValueJ8JbyiT = await _KnapsackItemsRE9Hox.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValueKwdLYEB = true;
		const _arrayValueNYFFnv1 = null;
		const _arrayValuevtuBXHR = undefined;
		const _objectPatternb2Ma6a6 = [_arrayValueKwdLYEB, _arrayValueNYFFnv1, _arrayValuevtuBXHR]
		const _KnapsackItemYBWSyU = new KnapsackItem(_objectPatternb2Ma6a6)
		const _returnValueC56ANIb = await _KnapsackItemYBWSyU.toString()
		const _returnValuekbYYkVV = await _KnapsackItemYBWSyU.valuePerWeightRatio()
		const _returnValuequUzSJY = await _KnapsackItemYBWSyU.totalWeight()
		const _returnValueGQ5wUs = await _KnapsackItemYBWSyU.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternT1WrcRr = -3.109729640103069;
		const _KnapsackItemBI1uZs0 = new KnapsackItem(_objectPatternT1WrcRr)
		const _returnValueH7iLjlY = await _KnapsackItemBI1uZs0.totalValue()
		const _returnValuewxU0ggg = await _KnapsackItemBI1uZs0.totalWeight()
		const _returnValuezNgBztA = await _KnapsackItemBI1uZs0.totalWeight()
	});
})