export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternxq4uLp6 = 3.5741800313804024;
		const _KnapsackItemX98WyRJ = new KnapsackItem(_objectPatternxq4uLp6)
		const _returnValueeP7PkVL = await _KnapsackItemX98WyRJ.totalWeight()
		const _returnValuexkjdQSK = await _KnapsackItemX98WyRJ.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternmKWfm67 = "SijSXGaeCcVod6X3Q";
		const _KnapsackItemMqzMq6z = new KnapsackItem(_objectPatternmKWfm67)
		const _returnValueao8ejBU = await _KnapsackItemMqzMq6z.valuePerWeightRatio()
		const _returnValuekBBSBr7 = await _KnapsackItemMqzMq6z.totalWeight()
		const _returnValuen4tPpCe = await _KnapsackItemMqzMq6z.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternFUS4GS8 = true;
		const _KnapsackItemW0emZG5 = new KnapsackItem(_objectPatternFUS4GS8)
		const _returnValueM18xIHq = await _KnapsackItemW0emZG5.totalValue()
		const _returnValueJHA7yUz = await _KnapsackItemW0emZG5.valuePerWeightRatio()
		const _returnValueXr7zy7 = await _KnapsackItemW0emZG5.toString()
		const _returnValueK0yijlN = await _KnapsackItemW0emZG5.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternXtFglC = false;
		const _KnapsackItemguFZR1N = new KnapsackItem(_objectPatternXtFglC)
		const _returnValueNa2jHQG = await _KnapsackItemguFZR1N.toString()
	});
})