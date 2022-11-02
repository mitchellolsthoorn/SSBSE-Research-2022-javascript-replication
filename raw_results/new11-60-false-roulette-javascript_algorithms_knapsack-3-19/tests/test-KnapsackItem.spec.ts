export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _returnValueN8hdKmv = null;
		const _objectPatterntMEeZM = () => { return _returnValueN8hdKmv };
		const _KnapsackItempZEKHdj = new KnapsackItem(_objectPatterntMEeZM)
		const _returnValueRNW2mQM = await _KnapsackItempZEKHdj.valuePerWeightRatio()
		const _returnValueKX0dLlI = await _KnapsackItempZEKHdj.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternsLqjOsL = "VI7aS";
		const _KnapsackItemCku77tv = new KnapsackItem(_objectPatternsLqjOsL)
		const _returnValueGQfozfS = await _KnapsackItemCku77tv.toString()
		const _returnValueapbZtc = await _KnapsackItemCku77tv.totalValue()
		const _returnValueJPwNhWA = await _KnapsackItemCku77tv.toString()
		const _returnValuexeZQYui = await _KnapsackItemCku77tv.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternXqR00YK = -1.678251983354004;
		const _KnapsackItempYpbQGg = new KnapsackItem(_objectPatternXqR00YK)
		const _returnValueydvR8zz = await _KnapsackItempYpbQGg.totalWeight()
		const _returnValueF5cVhK0 = await _KnapsackItempYpbQGg.toString()
		const _returnValuecilLTeC = await _KnapsackItempYpbQGg.totalWeight()
	});
})