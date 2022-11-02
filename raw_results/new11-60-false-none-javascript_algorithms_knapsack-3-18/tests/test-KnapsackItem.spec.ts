export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _returnValueWlSIub = -3.644972817249074;
		const _objectPatternFMf6jn0 = () => { return _returnValueWlSIub };
		const _KnapsackItemddQyb3h = new KnapsackItem(_objectPatternFMf6jn0)
		const _returnValueiFbKeLQ = await _KnapsackItemddQyb3h.totalValue()
		const _returnValueYieCbvX = await _KnapsackItemddQyb3h.totalWeight()
		const _returnValueYA2YCer = await _KnapsackItemddQyb3h.valuePerWeightRatio()
		const _returnValuez5GIPHK = await _KnapsackItemddQyb3h.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternltLp5O6 = "QqoDhGv8zViJX3pWR5VkotltP9rskHzCL8VBGb5b";
		const _KnapsackItemOu0tM5s = new KnapsackItem(_objectPatternltLp5O6)
		const _returnValuevUnottC = await _KnapsackItemOu0tM5s.valuePerWeightRatio()
		const _returnValuexeYmKiR = await _KnapsackItemOu0tM5s.valuePerWeightRatio()
	});

	it('test for KnapsackItem', async () => {
		const _returnValuezXiXXwP = -6.407622086723942;
		const _objectPatternIaTUFtm = () => { return _returnValuezXiXXwP };
		const _KnapsackItemIlKT55I = new KnapsackItem(_objectPatternIaTUFtm)
		const _returnValueewTmmCT = await _KnapsackItemIlKT55I.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatterntNbx67J = "zwfvJLzeD31uiwVkZdCBJJL01rdt2cEGSurpw22vZ2Gk6ksSSx";
		const _KnapsackItemw1Kof8f = new KnapsackItem(_objectPatterntNbx67J)
		const _returnValuezdfJ6Z7 = await _KnapsackItemw1Kof8f.totalWeight()
		const _returnValuepPBwuB = await _KnapsackItemw1Kof8f.toString()
		const _returnValueI0hJmlC = await _KnapsackItemw1Kof8f.valuePerWeightRatio()
		const _returnValueMTY5xNT = await _KnapsackItemw1Kof8f.totalWeight()
		const _returnValueGaZpg53 = await _KnapsackItemw1Kof8f.totalWeight()
	});
})