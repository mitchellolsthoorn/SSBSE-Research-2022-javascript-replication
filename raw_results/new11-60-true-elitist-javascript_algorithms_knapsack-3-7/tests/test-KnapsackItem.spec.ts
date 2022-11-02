export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _arrayValueFxs4QdZ = undefined;
		const _arrayValueudjuroc = 2.204469571456972;
		const _arrayValueIOynyX0 = undefined;
		const _arrayValueSF2huNA = false;
		const _arrayValueKPbZ1QF = [_arrayValueudjuroc, _arrayValueIOynyX0, _arrayValueSF2huNA]
		const _arrayValueAGvkCrM = "RgUomwSJPi6YMxKFBuXNiUTbqYgzxVKS3tA4fSgicYvIPw2QuXIwlaVpRxnDedJZ9pgqBvNrur2";
		const _objectPatternRgUVKzB = [_arrayValueFxs4QdZ, _arrayValueKPbZ1QF, _arrayValueAGvkCrM]
		const _KnapsackItema5y0Hdo = new KnapsackItem(_objectPatternRgUVKzB)
		const _returnValueTfXG4Oi = await _KnapsackItema5y0Hdo.toString()
		const _returnValueaGQfLID = await _KnapsackItema5y0Hdo.totalValue()
		const _returnValueWhkG2ez = await _KnapsackItema5y0Hdo.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternzle7wS = -3.4237130381107104;
		const _KnapsackItemQDzwIkR = new KnapsackItem(_objectPatternzle7wS)
		const _returnValueLqy3zF = await _KnapsackItemQDzwIkR.totalWeight()
		const _returnValueUlwxENo = await _KnapsackItemQDzwIkR.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternWGTSJRN = "LCtL6S7nhRgocC9484jS";
		const _KnapsackItemAQwZhIR = new KnapsackItem(_objectPatternWGTSJRN)
		const _returnValueyBPfYUY = await _KnapsackItemAQwZhIR.toString()
		const _returnValuePvAK71o = await _KnapsackItemAQwZhIR.valuePerWeightRatio()
		const _returnValueCRx5Cl1 = await _KnapsackItemAQwZhIR.toString()
	});
})