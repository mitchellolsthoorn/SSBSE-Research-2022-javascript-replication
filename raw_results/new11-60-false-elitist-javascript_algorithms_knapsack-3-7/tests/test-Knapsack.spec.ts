export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemsEoU9AY = {
		
	}
		const _weightLimitTYA9MiK = undefined;
		const _KnapsackYxGqh6W = new Knapsack(_possibleItemsEoU9AY, _weightLimitTYA9MiK)
		const _returnValueNMncMWr = await _KnapsackYxGqh6W.sortPossibleItemsByWeight()
		const _returnValueiS3DfF4 = await _KnapsackYxGqh6W.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsO0KAJN0 = {
		
	}
		const _weightLimitVCxp2GX = 5.487575596430672;
		const _KnapsackKB407pb = new Knapsack(_possibleItemsO0KAJN0, _weightLimitVCxp2GX)
		const _returnValuekxJ5A2c = await _KnapsackKB407pb.solveZeroOneKnapsackProblem()
		const _returnValuenrEgaWq = await _KnapsackKB407pb.solveZeroOneKnapsackProblem()
		const _returnValueDf1iS6O = await _KnapsackKB407pb.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsKpzbDLI = {
		
	}
		const _weightLimittKalRD = -0.8022991576974032;
		const _KnapsackNjCwXzX = new Knapsack(_possibleItemsKpzbDLI, _weightLimittKalRD)
		const _returnValuepsHTHji = await _KnapsackNjCwXzX.totalValue()
		const _returnValuegiqz0ZN = await _KnapsackNjCwXzX.solveZeroOneKnapsackProblem()
		const _returnValueOFDyLYQ = await _KnapsackNjCwXzX.solveZeroOneKnapsackProblem()
		const _returnValue0yvFsH = await _KnapsackNjCwXzX.totalValue()
		const _returnValueQsGe4ER = await _KnapsackNjCwXzX.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsgfEimHa = {
		
	}
		const _weightLimitg1atX2 = -5.054084896889182;
		const _KnapsackzGcw0Qv = new Knapsack(_possibleItemsgfEimHa, _weightLimitg1atX2)
		const _returnValueUiA7luE = await _KnapsackzGcw0Qv.totalWeight()
		const _returnValueGPaPfou = await _KnapsackzGcw0Qv.sortPossibleItemsByWeight()
		const _returnValueV1k4YVe = await _KnapsackzGcw0Qv.solveZeroOneKnapsackProblem()
		const _returnValueLWdpr0i = await _KnapsackzGcw0Qv.solveZeroOneKnapsackProblem()
		const _returnValueQOOzQ1D = await _KnapsackzGcw0Qv.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsYNgWfgA = {
		
	}
		const _weightLimitF3aSb5 = 9.447263944401946;
		const _KnapsackXGeI7tg = new Knapsack(_possibleItemsYNgWfgA, _weightLimitF3aSb5)
		const _returnValueSaP1HLp = await _KnapsackXGeI7tg.solveUnboundedKnapsackProblem()
		const _returnValueDwubak1 = await _KnapsackXGeI7tg.sortPossibleItemsByValue()
		const _returnValueNMHKoDV = await _KnapsackXGeI7tg.solveZeroOneKnapsackProblem()
		const _returnValuep9gr8s = await _KnapsackXGeI7tg.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsioug8pa = {
		
	}
		const _weightLimitTfIR3Md = 4.252315901200191;
		const _KnapsackVbwKLSJ = new Knapsack(_possibleItemsioug8pa, _weightLimitTfIR3Md)
		const _returnValueNQRfj5j = await _KnapsackVbwKLSJ.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueCDPJnlU = await _KnapsackVbwKLSJ.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsbxOaWK1 = []
		const _weightLimitiXmSTr = 4.531975226186242;
		const _KnapsackwAkZiXt = new Knapsack(_possibleItemsbxOaWK1, _weightLimitiXmSTr)
		const _returnValuedGsok3 = await _KnapsackwAkZiXt.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueFDh2oY9 = await _KnapsackwAkZiXt.solveZeroOneKnapsackProblem()
		const _returnValueOOCo3el = await _KnapsackwAkZiXt.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _arrayValuenaK9KGK = false;
		const _arrayValueCeGmt20 = -0.38168359569681165;
		const _arrayValueYsNTHBZ = [_arrayValuenaK9KGK, _arrayValueCeGmt20]
		const _arrayValuejuYy1Fo = {
		
	}
		const _possibleItemsNoMRpvH = [_arrayValueYsNTHBZ, _arrayValuejuYy1Fo]
		const _weightLimit7EFzCS = -0.11234414223790168;
		const _KnapsackmMXJaPA = new Knapsack(_possibleItemsNoMRpvH, _weightLimit7EFzCS)
		const _returnValueN4VN9Fv = await _KnapsackmMXJaPA.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuezZkGATp = await _KnapsackmMXJaPA.sortPossibleItemsByWeight()
		const _returnValuer2Zg4yE = await _KnapsackmMXJaPA.solveUnboundedKnapsackProblem()
		const _returnValueBPndCn = await _KnapsackmMXJaPA.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueocW8Gl = -5.350337166185433;
		const _possibleItemsMsTJhuf = [_arrayValueocW8Gl]
		const _weightLimitLcR6ii9 = null;
		const _KnapsackNzqcSPE = new Knapsack(_possibleItemsMsTJhuf, _weightLimitLcR6ii9)
		const _returnValueQjnhk37 = await _KnapsackNzqcSPE.sortPossibleItemsByWeight()
		const _returnValue65zuJe = await _KnapsackNzqcSPE.sortPossibleItemsByWeight()
		const _returnValueACM3yG2 = await _KnapsackNzqcSPE.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsEBBc7Az = "mMGqcH8ehJy9qMOIm1cYQo2D3XYClYR9EL2G6MDy806ZuOXEvsPKB4Fq5ezQEI81I5artUmB";
		const _weightLimituOqPIwd = 0.699021630889451;
		const _KnapsackjjXnZ3S = new Knapsack(_possibleItemsEBBc7Az, _weightLimituOqPIwd)
		const _returnValueMj4EbXl = await _KnapsackjjXnZ3S.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueSn82U6 = await _KnapsackjjXnZ3S.solveUnboundedKnapsackProblem()
		const _returnValueNS9DOuH = await _KnapsackjjXnZ3S.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemscgaHok3 = "4hobQQsRABHqA9yqzYR2EU9fuPqtISRnIsbZu1sTFOHYu4Yz3TgTLJ";
		const _weightLimitTs6pN52 = true;
		const _KnapsackXMYguCd = new Knapsack(_possibleItemscgaHok3, _weightLimitTs6pN52)
		const _returnValueDSJSDvG = await _KnapsackXMYguCd.sortPossibleItemsByWeight()
		const _returnValuenVQGK7N = await _KnapsackXMYguCd.solveZeroOneKnapsackProblem()
	});
})