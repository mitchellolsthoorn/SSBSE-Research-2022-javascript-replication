export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _arrayValueEll2cRf = -6.470127187575105;
		const _arrayValuezpAuLry = 1.8188354668529598;
		const _objectPatternExMCAfv = [_arrayValueEll2cRf, _arrayValuezpAuLry]
		const _KnapsackItemCvv4BW = new KnapsackItem(_objectPatternExMCAfv)
		const _returnValueISnxNnB = await _KnapsackItemCvv4BW.totalWeight()
		const _returnValuez3rEQmd = await _KnapsackItemCvv4BW.toString()
		const _returnValuepqN5chm = await _KnapsackItemCvv4BW.totalWeight()
		const _returnValueoiZan5L = await _KnapsackItemCvv4BW.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternpkT04r = true;
		const _KnapsackItemNKa69NI = new KnapsackItem(_objectPatternpkT04r)
		const _returnValueFSliLK = await _KnapsackItemNKa69NI.valuePerWeightRatio()
		const _returnValueRIMBjDb = await _KnapsackItemNKa69NI.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternoq3b0Ht = []
		const _KnapsackItemP0KrCTb = new KnapsackItem(_objectPatternoq3b0Ht)
		const _returnValuebQg8Nn9 = await _KnapsackItemP0KrCTb.toString()
	});

	it('test for KnapsackItem', async () => {
		const _returnValueumYhMvo = 6.6818583399746565;
		const _objectPatternNUAOkMz = () => { return _returnValueumYhMvo };
		const _KnapsackItemDK2kZ8n = new KnapsackItem(_objectPatternNUAOkMz)
		const _returnValuep2qmgpN = await _KnapsackItemDK2kZ8n.toString()
		const _returnValueuEFQmj = await _KnapsackItemDK2kZ8n.totalValue()
	});
})