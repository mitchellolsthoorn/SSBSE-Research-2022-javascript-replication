export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternKEEQxa9 = -2.681000847045457;
		const _KnapsackItemBf1FDhZ = new KnapsackItem(_objectPatternKEEQxa9)
		const _returnValueeUsiaSG = await _KnapsackItemBf1FDhZ.valuePerWeightRatio()
		const _returnValueb2L1vlT = await _KnapsackItemBf1FDhZ.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternKd3pLJH = "MUX0fEjMnUMQTWQ8Zcpidd6HZYpLpEyf2EurgqjjgS1wG6CSvq";
		const _KnapsackItemO0rQyRf = new KnapsackItem(_objectPatternKd3pLJH)
		const _returnValueJzYFksz = await _KnapsackItemO0rQyRf.toString()
		const _returnValueDSJH16 = await _KnapsackItemO0rQyRf.totalValue()
		const _returnValueyM3Mniq = await _KnapsackItemO0rQyRf.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternSSTIs0O = "rB9iNhDOR9AKvhosIgiADUyLhcXtbkNGkkOdgaCX5wrH2X9Xq9MdSJ5ZIINy4jX2H2yYCHgO87YrRZ7IqcCpsiOk25q1UF8DAr";
		const _KnapsackItemok5awIY = new KnapsackItem(_objectPatternSSTIs0O)
		const _returnValueZP5EFZW = await _KnapsackItemok5awIY.totalWeight()
		const _returnValueQeaaPAd = await _KnapsackItemok5awIY.toString()
		const _returnValueWXP1lEy = await _KnapsackItemok5awIY.valuePerWeightRatio()
	});
})