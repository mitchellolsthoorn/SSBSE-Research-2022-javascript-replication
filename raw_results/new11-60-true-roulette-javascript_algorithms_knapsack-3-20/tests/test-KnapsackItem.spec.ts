export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternv08cAK4 = -4.743594780310673;
		const _KnapsackItemY1wxCDs = new KnapsackItem(_objectPatternv08cAK4)
		const _returnValueZ0cdH7r = await _KnapsackItemY1wxCDs.toString()
		const _returnValueu8XRXFX = await _KnapsackItemY1wxCDs.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternyBRiE4N = "nM61VKjeMKMnCVgTy3QxVUg0T25CYEQ9avIRI52T4T48jXcL3OaRPbS3H1RAwVm17hWRsLTwEvNHh2fet353awJigo4b";
		const _KnapsackItemOTpDa2 = new KnapsackItem(_objectPatternyBRiE4N)
		const _returnValuevWfQVkO = await _KnapsackItemOTpDa2.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternmn31ZzE = -0.282482529128778;
		const _KnapsackItemdxYQBQ = new KnapsackItem(_objectPatternmn31ZzE)
		const _returnValueGIhxWhc = await _KnapsackItemdxYQBQ.totalValue()
		const _returnValues1QxcWC = await _KnapsackItemdxYQBQ.totalWeight()
	});
})