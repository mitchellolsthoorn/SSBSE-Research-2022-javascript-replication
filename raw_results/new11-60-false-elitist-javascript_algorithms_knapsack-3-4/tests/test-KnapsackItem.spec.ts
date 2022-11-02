export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _returnValuePQ669AY = undefined;
		const _objectPatternMRK3acO = () => { return _returnValuePQ669AY };
		const _KnapsackItemh3wk5QP = new KnapsackItem(_objectPatternMRK3acO)
		const _returnValue2rAYxd = await _KnapsackItemh3wk5QP.toString()
		const _returnValueupHcLd0 = await _KnapsackItemh3wk5QP.totalValue()
		const _returnValueuRU7ygg = await _KnapsackItemh3wk5QP.totalWeight()
		const _returnValueNcM5slQ = await _KnapsackItemh3wk5QP.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatterniJ0R1tc = true;
		const _KnapsackItemEHKMjWD = new KnapsackItem(_objectPatterniJ0R1tc)
		const _returnValuehE2VHmQ = await _KnapsackItemEHKMjWD.toString()
		const _returnValueO6qWcR2 = await _KnapsackItemEHKMjWD.toString()
		const _returnValueQ7QSOQp = await _KnapsackItemEHKMjWD.totalWeight()
		const _returnValueXKZKO7o = await _KnapsackItemEHKMjWD.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternmdHdPe0 = {
		
	}
		const _KnapsackItem55D0cp = new KnapsackItem(_objectPatternmdHdPe0)
		const _returnValuedBcEtOB = await _KnapsackItem55D0cp.valuePerWeightRatio()
		const _returnValuePl4O9gT = await _KnapsackItem55D0cp.toString()
		const _returnValueczxLe2H = await _KnapsackItem55D0cp.toString()
	});
})