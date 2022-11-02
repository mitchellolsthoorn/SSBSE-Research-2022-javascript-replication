export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternTG0lTZ = "SVRjFrX5yIfUWOOUpAHbTexuIM4fi1QQo1Vh";
		const _KnapsackItemOEmxNAw = new KnapsackItem(_objectPatternTG0lTZ)
		const _returnValueK4TtgV = await _KnapsackItemOEmxNAw.valuePerWeightRatio()
		const _returnValueMlMNrI = await _KnapsackItemOEmxNAw.valuePerWeightRatio()
		const _returnValuew82wXzK = await _KnapsackItemOEmxNAw.valuePerWeightRatio()
		const _returnValueBcL33Zm = await _KnapsackItemOEmxNAw.toString()
		const _returnValueH7eEMtO = await _KnapsackItemOEmxNAw.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternRgRITsA = true;
		const _KnapsackItemFDLJua = new KnapsackItem(_objectPatternRgRITsA)
		const _returnValuen0tDZPQ = await _KnapsackItemFDLJua.totalValue()
		const _returnValueRMRkMKR = await _KnapsackItemFDLJua.valuePerWeightRatio()
		const _returnValueKCKpSIg = await _KnapsackItemFDLJua.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternsfDC33Z = false;
		const _KnapsackItempZTm37 = new KnapsackItem(_objectPatternsfDC33Z)
		const _returnValueP81ULEo = await _KnapsackItempZTm37.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternehPzpRI = "gL5HSGB";
		const _KnapsackItemmEG83B = new KnapsackItem(_objectPatternehPzpRI)
		const _returnValueElbKiyo = await _KnapsackItemmEG83B.toString()
		const _returnValueRStJmeA = await _KnapsackItemmEG83B.totalWeight()
	});
})