export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _arrayValueDt4Hs17 = null;
		const _arrayValuepjRnag = true;
		const _arrayValueB3jbE5J = 9.32147229673992;
		const _arrayValue5XIcQc = undefined;
		const _objectPatternYyv2MWZ = [_arrayValueDt4Hs17, _arrayValuepjRnag, _arrayValueB3jbE5J, _arrayValue5XIcQc]
		const _KnapsackItembQHPINk = new KnapsackItem(_objectPatternYyv2MWZ)
		const _returnValueBEsMJik = await _KnapsackItembQHPINk.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValueZ8FoIbS = "PKjOubjdFoTHPiPFrVdY1d7OSYJSlqmfyjYYkMgG5lJDkATQ20XhaAAb8W3neVyEEe5wo27cdNRHOHwqV";
		const _objectPatternupInLuA = [_arrayValueZ8FoIbS]
		const _KnapsackItemHs7xJQU = new KnapsackItem(_objectPatternupInLuA)
		const _returnValueg8MOmxh = await _KnapsackItemHs7xJQU.valuePerWeightRatio()
		const _returnValueOYBPXx = await _KnapsackItemHs7xJQU.toString()
		const _returnValueFmxsgfW = await _KnapsackItemHs7xJQU.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternuHPt9p3 = true;
		const _KnapsackItemcGJmep = new KnapsackItem(_objectPatternuHPt9p3)
		const _returnValueOWtA32t = await _KnapsackItemcGJmep.totalValue()
		const _returnValueAoOtPHa = await _KnapsackItemcGJmep.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternuTrxzJf = "oEJi3Lb28fSW8fiSr7tAECe6zFaIdaVNBAJ41SIsS2041VexW5QmOKWX7JKCa1tPqLRHpjMWSUEhvstDL8g5oz";
		const _KnapsackItembLCaiEk = new KnapsackItem(_objectPatternuTrxzJf)
		const _returnValueSOrINKe = await _KnapsackItembLCaiEk.toString()
		const _returnValuecE0EnJV = await _KnapsackItembLCaiEk.totalWeight()
		const _returnValuelpVjDrX = await _KnapsackItembLCaiEk.totalValue()
	});
})