export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternbavPVa = false;
		const _KnapsackItemxVvMukO = new KnapsackItem(_objectPatternbavPVa)
		const _returnValueuQxOVN4 = await _KnapsackItemxVvMukO.toString()
		const _returnValueY3zuCZY = await _KnapsackItemxVvMukO.valuePerWeightRatio()
		const _returnValueBHl4FB7 = await _KnapsackItemxVvMukO.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternKqLxbwX = 4.237709485991433;
		const _KnapsackItemtC9XqZA = new KnapsackItem(_objectPatternKqLxbwX)
		const _returnValuewjIg4kg = await _KnapsackItemtC9XqZA.totalWeight()
		const _returnValueikFkuMN = await _KnapsackItemtC9XqZA.valuePerWeightRatio()
		const _returnValueXtKpSL0 = await _KnapsackItemtC9XqZA.valuePerWeightRatio()
		const _returnValueT0iIcQ = await _KnapsackItemtC9XqZA.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _returnValuebGLRIty = 9.804998447954784;
		const _objectPatternI9Ota2X = () => { return _returnValuebGLRIty };
		const _KnapsackItemf68EOLf = new KnapsackItem(_objectPatternI9Ota2X)
		const _returnValueHEXfVZ2 = await _KnapsackItemf68EOLf.totalValue()
		const _returnValuesqIlJKs = await _KnapsackItemf68EOLf.valuePerWeightRatio()
	});
})