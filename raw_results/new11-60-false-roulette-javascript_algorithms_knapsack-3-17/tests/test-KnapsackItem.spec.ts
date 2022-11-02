export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternN4WESf7 = 5.943731643129482;
		const _KnapsackItemEY1USGO = new KnapsackItem(_objectPatternN4WESf7)
		const _returnValuewsoHITY = await _KnapsackItemEY1USGO.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _arrayValueXFUBsAq = 6.161207045856504;
		const _objectPatternyX52W55 = [_arrayValueXFUBsAq]
		const _KnapsackItemzSBCAH = new KnapsackItem(_objectPatternyX52W55)
		const _returnValueoCFnhxg = await _KnapsackItemzSBCAH.totalValue()
		const _returnValueYsb3MXM = await _KnapsackItemzSBCAH.toString()
		const _returnValueYtVqy2j = await _KnapsackItemzSBCAH.toString()
		const _returnValueLzJVivT = await _KnapsackItemzSBCAH.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatterndH4IJlz = "J5Joq7s4ZefgQKyS2XyAxNtRGAr120jxigoLpY35FGGZ8mfk6V8Zk1KVAOEydEEL8s1fm6Sv";
		const _KnapsackItemZvGLtIZ = new KnapsackItem(_objectPatterndH4IJlz)
		const _returnValueKEpdev4 = await _KnapsackItemZvGLtIZ.valuePerWeightRatio()
		const _returnValueEQVdss = await _KnapsackItemZvGLtIZ.totalValue()
		const _returnValuecU5kU6c = await _KnapsackItemZvGLtIZ.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternjwk0H0 = false;
		const _KnapsackItemRTZNgc9 = new KnapsackItem(_objectPatternjwk0H0)
		const _returnValueWNWdO4t = await _KnapsackItemRTZNgc9.toString()
		const _returnValueKKNjpdq = await _KnapsackItemRTZNgc9.toString()
		const _returnValueIs50ZQG = await _KnapsackItemRTZNgc9.valuePerWeightRatio()
	});
})