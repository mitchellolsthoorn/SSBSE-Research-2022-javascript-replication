export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternbSSgLm7 = "ljvrPd4gqQMEDBSDoe6FloB6rsYSLwdO59JjCl4rTcnhMER1TOAmCECzbqedb";
		const _KnapsackItem6paEOY = new KnapsackItem(_objectPatternbSSgLm7)
		const _returnValue52YaeH = await _KnapsackItem6paEOY.totalValue()
		const _returnValueGkbSpd = await _KnapsackItem6paEOY.totalWeight()
		const _returnValueumXPKYm = await _KnapsackItem6paEOY.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternMsrRu2d = "rg6w";
		const _KnapsackItemR3ks8o5 = new KnapsackItem(_objectPatternMsrRu2d)
		const _returnValuej7n0OY = await _KnapsackItemR3ks8o5.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternL1SAhgx = true;
		const _KnapsackItemwVRQXsK = new KnapsackItem(_objectPatternL1SAhgx)
		const _returnValueHhDp7Mj = await _KnapsackItemwVRQXsK.toString()
		const _returnValuexmVuB3G = await _KnapsackItemwVRQXsK.totalWeight()
		const _returnValueUUgh6kl = await _KnapsackItemwVRQXsK.valuePerWeightRatio()
		const _returnValuemrvXgXt = await _KnapsackItemwVRQXsK.valuePerWeightRatio()
	});
})