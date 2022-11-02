export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternOnxb3w = 9.36187446224034;
		const _KnapsackItemms3CHKa = new KnapsackItem(_objectPatternOnxb3w)
		const _returnValueYIMhDWN = await _KnapsackItemms3CHKa.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternbj1adb9 = false;
		const _KnapsackItemmct7GGD = new KnapsackItem(_objectPatternbj1adb9)
		const _returnValuek7OrfxJ = await _KnapsackItemmct7GGD.toString()
		const _returnValueJyb4fUU = await _KnapsackItemmct7GGD.totalWeight()
		const _returnValuepITKC9E = await _KnapsackItemmct7GGD.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternNH9QZ4D = -5.179465196122978;
		const _KnapsackItemSCP9rw = new KnapsackItem(_objectPatternNH9QZ4D)
		const _returnValueE8Uoj8 = await _KnapsackItemSCP9rw.valuePerWeightRatio()
		const _returnValueC9LyZ0l = await _KnapsackItemSCP9rw.totalWeight()
		const _returnValueW5evnzc = await _KnapsackItemSCP9rw.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternngbUwsp = "IN3MDYpsflzBwgtIwac";
		const _KnapsackItemiYjQ9tl = new KnapsackItem(_objectPatternngbUwsp)
		const _returnValueK1R1kfc = await _KnapsackItemiYjQ9tl.totalValue()
		const _returnValueJzaoZjG = await _KnapsackItemiYjQ9tl.totalWeight()
	});
})