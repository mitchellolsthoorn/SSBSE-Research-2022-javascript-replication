export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternbkvC8uW = false;
		const _KnapsackItemJCLDtWd = new KnapsackItem(_objectPatternbkvC8uW)
		const _returnValuevmHTP2 = await _KnapsackItemJCLDtWd.totalWeight()
		const _returnValueMqH7tIc = await _KnapsackItemJCLDtWd.valuePerWeightRatio()
		const _returnValueemmnz7n = await _KnapsackItemJCLDtWd.totalWeight()
		const _returnValueW1U00ug = await _KnapsackItemJCLDtWd.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternuoyhPvS = 5.070273679298873;
		const _KnapsackItemKoTDl5Q = new KnapsackItem(_objectPatternuoyhPvS)
		const _returnValuewccFDQ9 = await _KnapsackItemKoTDl5Q.toString()
		const _returnValueSkBulB = await _KnapsackItemKoTDl5Q.totalWeight()
		const _returnValueRHnqYzT = await _KnapsackItemKoTDl5Q.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternmHuFQlm = 0.6629893482977263;
		const _KnapsackItemBoLrRkX = new KnapsackItem(_objectPatternmHuFQlm)
		const _returnValueWW9VWa = await _KnapsackItemBoLrRkX.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternmIOhJzE = {
		
	}
		const _KnapsackItemXQwnfEH = new KnapsackItem(_objectPatternmIOhJzE)
		const _returnValuev1jgtdg = await _KnapsackItemXQwnfEH.valuePerWeightRatio()
		const _returnValuenWeoDmg = await _KnapsackItemXQwnfEH.totalWeight()
	});
})