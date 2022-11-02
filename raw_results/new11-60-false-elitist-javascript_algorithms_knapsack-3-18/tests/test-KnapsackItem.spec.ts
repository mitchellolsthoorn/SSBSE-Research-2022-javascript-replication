export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternu1imoFG = "rQctA3ItD7vPizUfbiUDm58ud8HEa9R55tZ6KXaObPLt1OyHCUP7i4Tsn3F0I45VoDXcoOKCxMZxf9NA9ozotvAp2HcPNs6";
		const _KnapsackItemZOpdOUW = new KnapsackItem(_objectPatternu1imoFG)
		const _returnValuedL9X7t0 = await _KnapsackItemZOpdOUW.valuePerWeightRatio()
		const _returnValueClQibc = await _KnapsackItemZOpdOUW.toString()
		const _returnValuedwj6ezQ = await _KnapsackItemZOpdOUW.totalValue()
		const _returnValueGbaSvAC = await _KnapsackItemZOpdOUW.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternGRbK4h = 2.516962754894127;
		const _KnapsackItemiI8oirE = new KnapsackItem(_objectPatternGRbK4h)
		const _returnValueZWA68Vz = await _KnapsackItemiI8oirE.toString()
		const _returnValueQjrzLq = await _KnapsackItemiI8oirE.totalWeight()
		const _returnValuenTVCxnZ = await _KnapsackItemiI8oirE.totalWeight()
		const _returnValueQgXUddU = await _KnapsackItemiI8oirE.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternu2Tyhpl = "WX";
		const _KnapsackItembZvkE0w = new KnapsackItem(_objectPatternu2Tyhpl)
		const _returnValue8wmomc = await _KnapsackItembZvkE0w.totalValue()
		const _returnValueFDvKhfQ = await _KnapsackItembZvkE0w.valuePerWeightRatio()
		const _returnValuedtDeIRf = await _KnapsackItembZvkE0w.toString()
	});
})