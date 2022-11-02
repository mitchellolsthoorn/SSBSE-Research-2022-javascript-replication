export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternXJZoplt = "QTW0xou3S6AqRnEEDyTjOp7zxvYPzmJYD99YbTxUVeO0KVBaeMeXOF4fjBKhhuLqa";
		const _KnapsackItemjd3u23P = new KnapsackItem(_objectPatternXJZoplt)
		const _returnValuenwK8cEU = await _KnapsackItemjd3u23P.toString()
		const _returnValueNBMHz7z = await _KnapsackItemjd3u23P.totalValue()
		const _returnValuepNBjLrg = await _KnapsackItemjd3u23P.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _returnValueAvCeT5u = true;
		const _objectPatternfgoJGcg = () => { return _returnValueAvCeT5u };
		const _KnapsackItemerLdvBt = new KnapsackItem(_objectPatternfgoJGcg)
		const _returnValuex2Ba7G = await _KnapsackItemerLdvBt.totalWeight()
		const _returnValueP4rt53Z = await _KnapsackItemerLdvBt.valuePerWeightRatio()
		const _returnValueIhqCntl = await _KnapsackItemerLdvBt.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValueqMdcD7 = undefined;
		const _arrayValueWSLrCug = "GMSCwTk";
		const _objectPatternZKNt01f = [_arrayValueqMdcD7, _arrayValueWSLrCug]
		const _KnapsackItemF4ikkU = new KnapsackItem(_objectPatternZKNt01f)
		const _returnValueRhA2S5 = await _KnapsackItemF4ikkU.valuePerWeightRatio()
	});
})