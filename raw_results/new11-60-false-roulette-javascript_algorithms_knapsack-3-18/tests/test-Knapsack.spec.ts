export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _returnValuejyRUM3O = undefined;
		const _possibleItemscDfwfZ = () => { return _returnValuejyRUM3O };
		const _weightLimitJWuh8cN = -6.941245728623153;
		const _KnapsackmSqscB1 = new Knapsack(_possibleItemscDfwfZ, _weightLimitJWuh8cN)
		const _returnValuezphOeCr = await _KnapsackmSqscB1.solveZeroOneKnapsackProblem()
		const _returnValueXlxxUYI = await _KnapsackmSqscB1.totalValue()
	});

	it('test for Knapsack', async () => {
		const _returnValueCRmJb3a = "DQJ3CbwKOxxZEFpCeeqRVBaet2OaRH2Hke1YrkcfH7of";
		const _possibleItemsDCKrtdF = () => { return _returnValueCRmJb3a };
		const _weightLimitpLJ8Kkc = -7.58889807561054;
		const _Knapsackm40LYff = new Knapsack(_possibleItemsDCKrtdF, _weightLimitpLJ8Kkc)
		const _returnValueEJZo9D = await _Knapsackm40LYff.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueRhpssA6 = await _Knapsackm40LYff.solveUnboundedKnapsackProblem()
		const _returnValueBQYAmv = await _Knapsackm40LYff.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueGXT4UGU = await _Knapsackm40LYff.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _returnValuePIvtt40 = -9.807574528834515;
		const _possibleItemsOGLgcnI = () => { return _returnValuePIvtt40 };
		const _weightLimitCDdu4Cw = -8.402993940582741;
		const _KnapsackOkoVUNW = new Knapsack(_possibleItemsOGLgcnI, _weightLimitCDdu4Cw)
		const _returnValuecJKHhD4 = await _KnapsackOkoVUNW.totalWeight()
		const _returnValueQcu0Yq1 = await _KnapsackOkoVUNW.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _arrayValuevfzNNO0 = {
		
	}
		const _arrayValueYsfr2i0 = false;
		const _possibleItemsS3lAIVo = [_arrayValuevfzNNO0, _arrayValueYsfr2i0]
		const _weightLimit2iAGUH = 5.306765436064165;
		const _KnapsacktWh8EEE = new Knapsack(_possibleItemsS3lAIVo, _weightLimit2iAGUH)
		const _returnValueJ4EzIaJ = await _KnapsacktWh8EEE.solveUnboundedKnapsackProblem()
		const _returnValueTGArJH = await _KnapsacktWh8EEE.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsx8VcAJI = "yMhtzBVLDyMn6kLR6SZI4hd";
		const _weightLimitccFXjTY = "yTxFQ9n29TvkZ6OZESv8j08nTCFQKuS9WLo32sj8AlVBP7oBIIKVnZqdDCBex";
		const _Knapsackp6Rq8B4 = new Knapsack(_possibleItemsx8VcAJI, _weightLimitccFXjTY)
		const _returnValuenxrEG0 = await _Knapsackp6Rq8B4.solveZeroOneKnapsackProblem()
		const _returnValueKddqgz1 = await _Knapsackp6Rq8B4.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _returnValueKM5ZmL = -1.555213046821624;
		const _possibleItems3C1ReX = () => { return _returnValueKM5ZmL };
		const _weightLimitj1TqG0G = 7.0034192776174145;
		const _Knapsacku7zexmk = new Knapsack(_possibleItems3C1ReX, _weightLimitj1TqG0G)
		const _returnValuePimIHEe = await _Knapsacku7zexmk.sortPossibleItemsByWeight()
		const _returnValueGEx68qK = await _Knapsacku7zexmk.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValuejvYQ3D3 = false;
		const _arrayValuekw5MrCL = undefined;
		const _arrayValuebeEsmcS = 3.443532321255704;
		const _arrayValuekUxi0h = [_arrayValuekw5MrCL, _arrayValuebeEsmcS]
		const _arrayValue4I8sab = false;
		const _possibleItemsHn4I8Yl = [_arrayValuejvYQ3D3, _arrayValuekUxi0h, _arrayValue4I8sab]
		const _weightLimitz4XpuRr = true;
		const _KnapsackEcmybmY = new Knapsack(_possibleItemsHn4I8Yl, _weightLimitz4XpuRr)
		const _returnValuelEq1919 = await _KnapsackEcmybmY.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueWNTxxeE = await _KnapsackEcmybmY.solveUnboundedKnapsackProblem()
		const _returnValuek4Dgy2 = await _KnapsackEcmybmY.solveZeroOneKnapsackProblem()
		const _returnValuecO4nmD1 = await _KnapsackEcmybmY.sortPossibleItemsByValuePerWeightRatio()
	});
})