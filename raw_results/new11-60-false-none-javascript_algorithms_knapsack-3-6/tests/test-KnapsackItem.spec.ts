export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _arrayValueP2U2TBs = true;
		const _arrayValueYXFuu5 = undefined;
		const _arrayValuePxmIJBF = "lSdQz5z1gii43pfDjBqs1HbxK4u2Kel8bypwp5z56X5Hwse3rlY3I8gCzfe6uwUENBzti1ePp";
		const _objectPattern0z9kzZ = [_arrayValueP2U2TBs, _arrayValueYXFuu5, _arrayValuePxmIJBF]
		const _KnapsackItemuy0qmkM = new KnapsackItem(_objectPattern0z9kzZ)
		const _returnValueHlb1AtM = await _KnapsackItemuy0qmkM.totalWeight()
		const _returnValueUJAG96U = await _KnapsackItemuy0qmkM.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternZKIzeik = false;
		const _KnapsackItemasiJtc4 = new KnapsackItem(_objectPatternZKIzeik)
		const _returnValueydFLqXt = await _KnapsackItemasiJtc4.toString()
		const _returnValueI2Rsqol = await _KnapsackItemasiJtc4.valuePerWeightRatio()
		const _returnValueyw62c4t = await _KnapsackItemasiJtc4.totalWeight()
		const _returnValueDAo0K6f = await _KnapsackItemasiJtc4.toString()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValuekRgpuc = null;
		const _arrayValueQ6y15Dp = 6.550044562671562;
		const _arrayValueo0X3958 = null;
		const _objectPatternYfWHGUB = [_arrayValuekRgpuc, _arrayValueQ6y15Dp, _arrayValueo0X3958]
		const _KnapsackItemka4l33X = new KnapsackItem(_objectPatternYfWHGUB)
		const _returnValueAfZUHap = await _KnapsackItemka4l33X.totalValue()
		const _returnValueXl7kEdK = await _KnapsackItemka4l33X.valuePerWeightRatio()
		const _returnValueHRlH0BK = await _KnapsackItemka4l33X.totalValue()
		const _returnValuemsGr2oM = await _KnapsackItemka4l33X.valuePerWeightRatio()
	});
})