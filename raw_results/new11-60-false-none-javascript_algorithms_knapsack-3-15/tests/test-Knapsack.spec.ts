export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemssJyTc2 = "grtrd4dqQEWP6WxvegiAeElXcnQcFqspH7vfFAuURU1aCy7QVV";
		const _weightLimittNFLkz8 = undefined;
		const _Knapsackoo9L4s = new Knapsack(_possibleItemssJyTc2, _weightLimittNFLkz8)
		const _returnValuejtT2jeg = await _Knapsackoo9L4s.totalValue()
		const _returnValuepkujdyR = await _Knapsackoo9L4s.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueWXqzD4O = await _Knapsackoo9L4s.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsYGL8VgI = undefined;
		const _arrayValuedkQ74Ak = "I6yPPdt2RJPLTFGqPWf9BHSXHlFatK9SiNhii9Ev3e3";
		const _arrayValueBz1tvPv = undefined;
		const _arrayValueUqu0pl = -1.6009100458075292;
		const _arrayValuenJx1Ru = [_arrayValueBz1tvPv, _arrayValueUqu0pl]
		const _weightLimitxKWiIVX = [_arrayValuedkQ74Ak, _arrayValuenJx1Ru]
		const _KnapsackglqmUDv = new Knapsack(_possibleItemsYGL8VgI, _weightLimitxKWiIVX)
		const _returnValueb5h2J5w = await _KnapsackglqmUDv.sortPossibleItemsByValue()
		const _returnValuen4eFHxt = await _KnapsackglqmUDv.totalValue()
		const _returnValueh1ehjP4 = await _KnapsackglqmUDv.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsT8srP6i = true;
		const _weightLimitYFXO2cG = undefined;
		const _KnapsackuKAWtla = new Knapsack(_possibleItemsT8srP6i, _weightLimitYFXO2cG)
		const _returnValuenLA5V68 = await _KnapsackuKAWtla.solveZeroOneKnapsackProblem()
		const _returnValueUEyJml7 = await _KnapsackuKAWtla.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueeyHNnvw = await _KnapsackuKAWtla.totalValue()
		const _returnValueLdN8WKt = await _KnapsackuKAWtla.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsU6V9uuZ = undefined;
		const _weightLimitydPBVLI = true;
		const _Knapsack7fapgt = new Knapsack(_possibleItemsU6V9uuZ, _weightLimitydPBVLI)
		const _returnValuemfJZ33 = await _Knapsack7fapgt.sortPossibleItemsByWeight()
		const _returnValueuknNgkO = await _Knapsack7fapgt.totalWeight()
		const _returnValue390k0c = await _Knapsack7fapgt.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuekHBjLTY = await _Knapsack7fapgt.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsTABVDJB = null;
		const _weightLimitSCAuXp8 = -5.807634510081055;
		const _KnapsackEqKDVKg = new Knapsack(_possibleItemsTABVDJB, _weightLimitSCAuXp8)
		const _returnValuezmeim3 = await _KnapsackEqKDVKg.solveUnboundedKnapsackProblem()
		const _returnValueBjLdpuD = await _KnapsackEqKDVKg.sortPossibleItemsByValue()
		const _returnValuebKVC7I0 = await _KnapsackEqKDVKg.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsdCTN5Ep = "r05siQjegbszsXBAj23rsvcbS4Wk798ur6jsQtT6dJT";
		const _arrayValueTryO7Pc = {
		
	}
		const _arrayValuerTPnK2r = false;
		const _weightLimitx1CO8G2 = [_arrayValueTryO7Pc, _arrayValuerTPnK2r]
		const _KnapsackgozkBAL = new Knapsack(_possibleItemsdCTN5Ep, _weightLimitx1CO8G2)
		const _returnValuewQQ0S7L = await _KnapsackgozkBAL.sortPossibleItemsByValue()
		const _returnValuexZgHm6L = await _KnapsackgozkBAL.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemslukRlA = true;
		const _weightLimitUa6iReJ = undefined;
		const _KnapsackRzQk0Cd = new Knapsack(_possibleItemslukRlA, _weightLimitUa6iReJ)
		const _returnValuePWEV74c = await _KnapsackRzQk0Cd.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuemH1PMM = await _KnapsackRzQk0Cd.solveUnboundedKnapsackProblem()
		const _returnValuerYNKjlh = await _KnapsackRzQk0Cd.solveZeroOneKnapsackProblem()
		const _returnValueIWMK25 = await _KnapsackRzQk0Cd.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemshi4lz16 = false;
		const _arrayValueONUn0ga = 2.399290737047256;
		const _arrayValuelZlte6w = null;
		const _weightLimitHlbZr9P = [_arrayValueONUn0ga, _arrayValuelZlte6w]
		const _KnapsackcIV3vs = new Knapsack(_possibleItemshi4lz16, _weightLimitHlbZr9P)
		const _returnValueFSUXcS = await _KnapsackcIV3vs.totalWeight()
		const _returnValueAzRSwVB = await _KnapsackcIV3vs.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueKSzasGA = await _KnapsackcIV3vs.sortPossibleItemsByValue()
		const _returnValueqC92plF = await _KnapsackcIV3vs.solveZeroOneKnapsackProblem()
		const _returnValueCxW8SV = await _KnapsackcIV3vs.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsy9LDFb = "Sx2ClmxDA712w3";
		const _weightLimitHPUhP7 = null;
		const _KnapsackGSJDhX = new Knapsack(_possibleItemsy9LDFb, _weightLimitHPUhP7)
		const _returnValuevJqVCaz = await _KnapsackGSJDhX.solveUnboundedKnapsackProblem()
		const _returnValuezbtWJUx = await _KnapsackGSJDhX.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsyEEu6mU = "ehb7vj7TO6vWJ2pQjthEeBVsXLU3REA1zxlADoASbgc5yLVd";
		const _weightLimitkC56VL4 = true;
		const _KnapsackUxOLGCq = new Knapsack(_possibleItemsyEEu6mU, _weightLimitkC56VL4)
		const _returnValuemtvwBBa = await _KnapsackUxOLGCq.sortPossibleItemsByValue()
		const _returnValuetQEnpxQ = await _KnapsackUxOLGCq.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueYcfWf2s = await _KnapsackUxOLGCq.solveZeroOneKnapsackProblem()
		const _returnValueBpcaTTk = await _KnapsackUxOLGCq.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _arrayValueDUauQK6 = false;
		const _arrayValueek5gIla = 8.800417718416277;
		const _arrayValuewHlIf42 = true;
		const _arrayValueAy0MhMa = [_arrayValuewHlIf42]
		const _arrayValuevpxtq6j = {
		
	}
		const _possibleItemsWRsQQAS = [_arrayValueDUauQK6, _arrayValueek5gIla, _arrayValueAy0MhMa, _arrayValuevpxtq6j]
		const _weightLimithFu3vyJ = true;
		const _KnapsackKi1sXMs = new Knapsack(_possibleItemsWRsQQAS, _weightLimithFu3vyJ)
		const _returnValueW9hHir0 = await _KnapsackKi1sXMs.solveUnboundedKnapsackProblem()
		const _returnValuetRsLoyK = await _KnapsackKi1sXMs.solveZeroOneKnapsackProblem()
		const _returnValueK5jsquN = await _KnapsackKi1sXMs.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueBytmM5G = await _KnapsackKi1sXMs.sortPossibleItemsByValue()
	});
})