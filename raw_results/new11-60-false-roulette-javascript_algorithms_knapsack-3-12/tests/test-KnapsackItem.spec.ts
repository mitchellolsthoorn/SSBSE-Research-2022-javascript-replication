export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _arrayValueEfPQEsC = "yeOHPwUkJXzjRfPH11sXlL36WYClessV9Sp5C6aCQofsrFmqvU6tBVxVi8bxlHPxdFCvgzFYyxlSuq";
		const _arrayValuewExUOY = null;
		const _objectPatternClM72eQ = [_arrayValueEfPQEsC, _arrayValuewExUOY]
		const _KnapsackItemSSsewEI = new KnapsackItem(_objectPatternClM72eQ)
		const _returnValueCutRclQ = await _KnapsackItemSSsewEI.totalWeight()
		const _returnValueXhgfovV = await _KnapsackItemSSsewEI.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValuesXFjucc = "2vrlX2sc3SsMDnFp46lQ";
		const _arrayValueGlrim0 = null;
		const _arrayValuefufG8Zn = [_arrayValueGlrim0]
		const _arrayValueu38v9NA = [_arrayValuesXFjucc, _arrayValuefufG8Zn]
		const _arrayValueIiI7ZcA = "dtftNABRoD8zvSauWQIbTygMWCfA53HDRGgh6S4Dp2BqdgwHL2uVx6G48gyaVhOgCIWUkolupQb2OtDgFabhxqbIte";
		const _arrayValueoa7Ck2e = null;
		const _arrayValuegQz2fH1 = false;
		const _objectPatterntqxSSy9 = [_arrayValueu38v9NA, _arrayValueIiI7ZcA, _arrayValueoa7Ck2e, _arrayValuegQz2fH1]
		const _KnapsackItemaRelNik = new KnapsackItem(_objectPatterntqxSSy9)
		const _returnValue9e88m7 = await _KnapsackItemaRelNik.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternevKVyKM = false;
		const _KnapsackItemae0Cpd = new KnapsackItem(_objectPatternevKVyKM)
		const _returnValueWwDw5v5 = await _KnapsackItemae0Cpd.toString()
		const _returnValueBNRubnK = await _KnapsackItemae0Cpd.valuePerWeightRatio()
		const _returnValuelb9LUXh = await _KnapsackItemae0Cpd.totalWeight()
		const _returnValueXDJU06I = await _KnapsackItemae0Cpd.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternBQaT2W = 1.3648795445971196;
		const _KnapsackItemhQtZLqT = new KnapsackItem(_objectPatternBQaT2W)
		const _returnValueXipBrW = await _KnapsackItemhQtZLqT.totalValue()
	});
})