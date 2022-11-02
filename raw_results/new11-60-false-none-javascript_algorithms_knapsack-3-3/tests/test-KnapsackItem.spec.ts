export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _returnValueqRWiO3z = false;
		const _objectPatternpAGb257 = () => { return _returnValueqRWiO3z };
		const _KnapsackItemGpUs7p7 = new KnapsackItem(_objectPatternpAGb257)
		const _returnValueiDLXvKu = await _KnapsackItemGpUs7p7.toString()
		const _returnValueY6skvEj = await _KnapsackItemGpUs7p7.valuePerWeightRatio()
		const _returnValuerBoeXe2 = await _KnapsackItemGpUs7p7.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternYLf965 = 6.620484255765888;
		const _KnapsackItems26rzqL = new KnapsackItem(_objectPatternYLf965)
		const _returnValuenzbNM8M = await _KnapsackItems26rzqL.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternhmwmo0i = 8.006447005463087;
		const _KnapsackItemI4HtMYP = new KnapsackItem(_objectPatternhmwmo0i)
		const _returnValueIqY1CY = await _KnapsackItemI4HtMYP.toString()
		const _returnValuedY9WKtB = await _KnapsackItemI4HtMYP.toString()
		const _returnValueGoPczKU = await _KnapsackItemI4HtMYP.totalValue()
	});
})