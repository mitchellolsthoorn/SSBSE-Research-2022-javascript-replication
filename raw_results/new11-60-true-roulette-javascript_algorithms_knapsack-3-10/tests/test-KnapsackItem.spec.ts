export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternZn9bk9W = -3.9109586368089424;
		const _KnapsackItemiNRBhZS = new KnapsackItem(_objectPatternZn9bk9W)
		const _returnValuemNDNgJY = await _KnapsackItemiNRBhZS.totalWeight()
		const _returnValuevbLbx5U = await _KnapsackItemiNRBhZS.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPattern6Kq3Br = true;
		const _KnapsackItemq3UzPL = new KnapsackItem(_objectPattern6Kq3Br)
		const _returnValuesxCExsy = await _KnapsackItemq3UzPL.totalValue()
		const _returnValuewteQsjI = await _KnapsackItemq3UzPL.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValuetgwCWv = false;
		const _arrayValueT38Nzvj = -7.22466315781368;
		const _arrayValuepbF9MbW = [_arrayValuetgwCWv, _arrayValueT38Nzvj]
		const _arrayValueirzSDmF = false;
		const _arrayValuelo8oeBd = -6.640758724164553;
		const _objectPatternNcz2S9u = [_arrayValuepbF9MbW, _arrayValueirzSDmF, _arrayValuelo8oeBd]
		const _KnapsackItemkuu4x3M = new KnapsackItem(_objectPatternNcz2S9u)
		const _returnValuerqJke7t = await _KnapsackItemkuu4x3M.toString()
		const _returnValue78Q6Wt = await _KnapsackItemkuu4x3M.totalWeight()
		const _returnValuecdPySCa = await _KnapsackItemkuu4x3M.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternOwcB1WW = -3.366592893866203;
		const _KnapsackItemRZv3QId = new KnapsackItem(_objectPatternOwcB1WW)
		const _returnValueca9LLoJ = await _KnapsackItemRZv3QId.valuePerWeightRatio()
		const _returnValueX0yQaCo = await _KnapsackItemRZv3QId.valuePerWeightRatio()
		const _returnValueF8wx51y = await _KnapsackItemRZv3QId.totalWeight()
		const _returnValueQnqm4aI = await _KnapsackItemRZv3QId.toString()
		const _returnValuehlrexT = await _KnapsackItemRZv3QId.totalWeight()
	});
})