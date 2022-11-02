export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _returnValueO1eWRiU = -9.974661857731693;
		const _returnValue1tYF4S = () => { return _returnValueO1eWRiU };
		const _objectPatternlENVyRh = () => { return _returnValue1tYF4S };
		const _KnapsackItemuC4oQgX = new KnapsackItem(_objectPatternlENVyRh)
		const _returnValuecXGGHax = await _KnapsackItemuC4oQgX.totalWeight()
		const _returnValueUMnBDqA = await _KnapsackItemuC4oQgX.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValueKGPFyzV = undefined;
		const _arrayValueGikCCd8 = undefined;
		const _objectPatternmPEh3pC = [_arrayValueKGPFyzV, _arrayValueGikCCd8]
		const _KnapsackItemjBdM9Sr = new KnapsackItem(_objectPatternmPEh3pC)
		const _returnValue0gPmzm = await _KnapsackItemjBdM9Sr.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValueEGZWDAg = null;
		const _arrayValuemDW0LF3 = undefined;
		const _arrayValueC6F8YrX = null;
		const _arrayValueMLCMqwo = [_arrayValuemDW0LF3, _arrayValueC6F8YrX]
		const _objectPatternfg6UUv = [_arrayValueEGZWDAg, _arrayValueMLCMqwo]
		const _KnapsackItemv3PA8g = new KnapsackItem(_objectPatternfg6UUv)
		const _returnValueAa6mfCq = await _KnapsackItemv3PA8g.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternQXcaxV = false;
		const _KnapsackItemvILFHzf = new KnapsackItem(_objectPatternQXcaxV)
		const _returnValueNDzIptB = await _KnapsackItemvILFHzf.toString()
		const _returnValuevuA3by6 = await _KnapsackItemvILFHzf.totalValue()
	});
})