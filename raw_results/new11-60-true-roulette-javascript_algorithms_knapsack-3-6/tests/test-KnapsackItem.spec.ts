export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _returnValueXsHC0wm = undefined;
		const _objectPatternMNfc7Z = () => { return _returnValueXsHC0wm };
		const _KnapsackItemQ4rzhbZ = new KnapsackItem(_objectPatternMNfc7Z)
		const _returnValuemy2iI3e = await _KnapsackItemQ4rzhbZ.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatterndkc9dyQ = 2.4570842961802004;
		const _KnapsackItemBZxd4v1 = new KnapsackItem(_objectPatterndkc9dyQ)
		const _returnValueHqdC6Gs = await _KnapsackItemBZxd4v1.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternc7qMklP = true;
		const _KnapsackItemxMH4uTC = new KnapsackItem(_objectPatternc7qMklP)
		const _returnValueCQ8f8vj = await _KnapsackItemxMH4uTC.totalValue()
		const _returnValuel6cSvo = await _KnapsackItemxMH4uTC.totalWeight()
		const _returnValuex2MRyBX = await _KnapsackItemxMH4uTC.totalWeight()
		const _returnValuej4N6kuH = await _KnapsackItemxMH4uTC.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternm5nGM8h = -2.586025033040481;
		const _KnapsackItemOiqqpo9 = new KnapsackItem(_objectPatternm5nGM8h)
		const _returnValuecwKaZwg = await _KnapsackItemOiqqpo9.toString()
	});
})