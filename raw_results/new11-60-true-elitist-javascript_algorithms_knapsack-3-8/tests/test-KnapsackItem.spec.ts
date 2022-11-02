export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternlCFXmdn = "54vovClPcA6M0mkoaYZtemetuvTtGaoTMeNWCNdee7wPfBhOmo3f";
		const _KnapsackItemjpudYgO = new KnapsackItem(_objectPatternlCFXmdn)
		const _returnValuezeQW8Rw = await _KnapsackItemjpudYgO.totalWeight()
		const _returnValuepTuQB8q = await _KnapsackItemjpudYgO.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternDTv8Tnl = 6.878598645524548;
		const _KnapsackItemvISVg8G = new KnapsackItem(_objectPatternDTv8Tnl)
		const _returnValuewb6k7hB = await _KnapsackItemvISVg8G.valuePerWeightRatio()
		const _returnValuerRkcHk1 = await _KnapsackItemvISVg8G.valuePerWeightRatio()
		const _returnValueLU4Ttxu = await _KnapsackItemvISVg8G.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternenp0jhS = true;
		const _KnapsackItemX0oPZzT = new KnapsackItem(_objectPatternenp0jhS)
		const _returnValueYgwxjH = await _KnapsackItemX0oPZzT.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternnvWRchi = 8.076814041836911;
		const _KnapsackItemkiaT5V = new KnapsackItem(_objectPatternnvWRchi)
		const _returnValueCQad2hQ = await _KnapsackItemkiaT5V.toString()
		const _returnValueD3uiSeh = await _KnapsackItemkiaT5V.totalValue()
	});
})