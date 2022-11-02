export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemsalUn6ma = true;
		const _weightLimitfiVqlMo = null;
		const _KnapsackmVUtSnF = new Knapsack(_possibleItemsalUn6ma, _weightLimitfiVqlMo)
		const _returnValueDGYvrgh = await _KnapsackmVUtSnF.sortPossibleItemsByValue()
		const _returnValueYGKpIF5 = await _KnapsackmVUtSnF.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueayD6JL8 = await _KnapsackmVUtSnF.totalValue()
		const _returnValuetKfIWWQ = await _KnapsackmVUtSnF.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsoLmvFDy = "3OG4ellCXYvh3i4O9vLTj";
		const _weightLimitVfGjEN6 = "EupP9QobveTaGMwzq7CvaMGF36m8JzScL8EFePmp4cNJlrzoQKRRhSaNo3bxCszS9ePJj5KAR6";
		const _KnapsackAVPf9mJ = new Knapsack(_possibleItemsoLmvFDy, _weightLimitVfGjEN6)
		const _returnValueBuu9yWB = await _KnapsackAVPf9mJ.totalValue()
		const _returnValueICBGBsI = await _KnapsackAVPf9mJ.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueE5hGK6 = 3.1907202045698106;
		const _arrayValuejwSYRdz = false;
		const _arrayValuefDR2HN = undefined;
		const _arrayValueOupjy6c = null;
		const _arrayValuerqGl1gW = [_arrayValuejwSYRdz, _arrayValuefDR2HN, _arrayValueOupjy6c]
		const _possibleItemsl5tzCgY = [_arrayValueE5hGK6, _arrayValuerqGl1gW]
		const _returnValuebmELv3 = "ceCDkR3KLhBxzqCexyyaV4LARIGvfQJzflKNxU7";
		const _weightLimitb5Y8pt = () => { return _returnValuebmELv3 };
		const _KnapsackiovAABZ = new Knapsack(_possibleItemsl5tzCgY, _weightLimitb5Y8pt)
		const _returnValueiVurYT8 = await _KnapsackiovAABZ.totalWeight()
		const _returnValuetSoUSBQ = await _KnapsackiovAABZ.totalValue()
		const _returnValuefyY04A7 = await _KnapsackiovAABZ.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueiw7Nmc = await _KnapsackiovAABZ.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsvHzhVJ = "KVTExiI9rzCx2cgJP9UWgFRIiXYFtfGs2oUy4yJEQE7LK7aiD8nus3";
		const _weightLimitWF9kgVX = null;
		const _Knapsacks0uu0gT = new Knapsack(_possibleItemsvHzhVJ, _weightLimitWF9kgVX)
		const _returnValueodZj0I = await _Knapsacks0uu0gT.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuecmWz5Dh = await _Knapsacks0uu0gT.sortPossibleItemsByWeight()
		const _returnValueprXN2O = await _Knapsacks0uu0gT.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _arrayValuer8zFgML = true;
		const _returnValueMosQrQ9 = [_arrayValuer8zFgML]
		const _possibleItemsGf2Atld = () => { return _returnValueMosQrQ9 };
		const _weightLimitrsFG099 = undefined;
		const _KnapsackdNQhvs = new Knapsack(_possibleItemsGf2Atld, _weightLimitrsFG099)
		const _returnValuepfwYPSx = await _KnapsackdNQhvs.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsyAHcwXT = "l4SC9tOwH14ltqBVQPKVQyMA";
		const _weightLimitVv60Qe = null;
		const _Knapsackzn0MhZt = new Knapsack(_possibleItemsyAHcwXT, _weightLimitVv60Qe)
		const _returnValuedAjcV1T = await _Knapsackzn0MhZt.solveUnboundedKnapsackProblem()
		const _returnValueJQNX37k = await _Knapsackzn0MhZt.sortPossibleItemsByValue()
		const _returnValuewbGZ6mL = await _Knapsackzn0MhZt.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueVWBNP7s = true;
		const _arrayValuezq7q1kW = true;
		const _possibleItemsF9q4O6y = [_arrayValueVWBNP7s, _arrayValuezq7q1kW]
		const _weightLimitkSEENeg = true;
		const _KnapsackF8VFMSV = new Knapsack(_possibleItemsF9q4O6y, _weightLimitkSEENeg)
		const _returnValuemoA8oHX = await _KnapsackF8VFMSV.solveUnboundedKnapsackProblem()
		const _returnValuenO8OhYE = await _KnapsackF8VFMSV.totalWeight()
		const _returnValueNUtGpjG = await _KnapsackF8VFMSV.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueOIqcOeT = undefined;
		const _possibleItemsSQhadrX = [_arrayValueOIqcOeT]
		const _weightLimitmqAZa00 = true;
		const _KnapsackILkKbjI = new Knapsack(_possibleItemsSQhadrX, _weightLimitmqAZa00)
		const _returnValuehILHPwN = await _KnapsackILkKbjI.solveZeroOneKnapsackProblem()
		const _returnValuepftx5lF = await _KnapsackILkKbjI.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueESGABSO = await _KnapsackILkKbjI.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueWRUucXM = await _KnapsackILkKbjI.totalValue()
		const _returnValuefeR8pXS = await _KnapsackILkKbjI.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _arrayValueIfWaEoL = true;
		const _arrayValueKykVLpI = 1.840038982106405;
		const _possibleItemsAiDPRaM = [_arrayValueIfWaEoL, _arrayValueKykVLpI]
		const _weightLimitPutFXbD = true;
		const _Knapsackdt80HgW = new Knapsack(_possibleItemsAiDPRaM, _weightLimitPutFXbD)
		const _returnValueM1Pr1Hy = await _Knapsackdt80HgW.solveUnboundedKnapsackProblem()
		const _returnValueO1gxRC = await _Knapsackdt80HgW.solveUnboundedKnapsackProblem()
		const _returnValueLV6Pb4h = await _Knapsackdt80HgW.solveZeroOneKnapsackProblem()
		const _returnValuedEoHZBz = await _Knapsackdt80HgW.totalWeight()
	});
})