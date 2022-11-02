export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemsr2F1Rka = {
		
	}
		const _weightLimitdyBGzpp = -7.923509671471836;
		const _KnapsackSfVXLgr = new Knapsack(_possibleItemsr2F1Rka, _weightLimitdyBGzpp)
		const _returnValuez6gPuQL = await _KnapsackSfVXLgr.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsOyQajkE = {
		
	}
		const _weightLimitpbIqyuq = 4.2312046674904025;
		const _KnapsackDDYzg0 = new Knapsack(_possibleItemsOyQajkE, _weightLimitpbIqyuq)
		const _returnValueDgtaUsv = await _KnapsackDDYzg0.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueGRxxHpv = await _KnapsackDDYzg0.totalValue()
		const _returnValueuUfJguG = await _KnapsackDDYzg0.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsLs6L5AL = "1Vhi232AxTX25oiV4qJbkNDZKpMVzmWNp3Xf8ReXOKfNdug6dubSg04BSHPjac6Eh6T";
		const _weightLimitVMbfJV = 0.2781964914180044;
		const _KnapsackBcT2CDD = new Knapsack(_possibleItemsLs6L5AL, _weightLimitVMbfJV)
		const _returnValue25khM2 = await _KnapsackBcT2CDD.solveUnboundedKnapsackProblem()
		const _returnValueTOZebIZ = await _KnapsackBcT2CDD.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueqlfmfQV = await _KnapsackBcT2CDD.sortPossibleItemsByValue()
		const _returnValuewnnhMut = await _KnapsackBcT2CDD.totalValue()
		const _returnValueRmsIjoq = await _KnapsackBcT2CDD.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsu59nBKB = {
		
	}
		const _returnValueLGV0XIq = "FaGPAeKrOwlwgFzAr9n5hVyaf";
		const _weightLimitOP6NM44 = () => { return _returnValueLGV0XIq };
		const _KnapsackCSdj0xs = new Knapsack(_possibleItemsu59nBKB, _weightLimitOP6NM44)
		const _returnValue2fhEzW = await _KnapsackCSdj0xs.solveZeroOneKnapsackProblem()
		const _returnValueQdM3ayk = await _KnapsackCSdj0xs.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _returnValueU1YFRVa = "yqf7xpBl79jFjNERAQcvUdw13yxVql5Jo5QFQlBCdgWPzDBvTeDzvTWtMRwV5nOrSkvsia5rOlzHGcxZcozJy";
		const _possibleItemsKXR947O = () => { return _returnValueU1YFRVa };
		const _weightLimitwUv6sWG = 9.3797090603857;
		const _Knapsacknyv72X = new Knapsack(_possibleItemsKXR947O, _weightLimitwUv6sWG)
		const _returnValueuzcCUsr = await _Knapsacknyv72X.solveZeroOneKnapsackProblem()
		const _returnValueGta7ecJ = await _Knapsacknyv72X.totalWeight()
		const _returnValuet7cfIg = await _Knapsacknyv72X.solveZeroOneKnapsackProblem()
		const _returnValuec2m6E8 = await _Knapsacknyv72X.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsOmdzTjf = "Cz6Q4VUbqiS0FGcIkKLzSwrM0NOF";
		const _arrayValueJCvqVGt = -1.3511318706178912;
		const _arrayValuedSgy3wS = -1.4913943897725233;
		const _arrayValuelJBlMSr = {
		
	}
		const _arrayValueep8etru = [_arrayValuedSgy3wS, _arrayValuelJBlMSr]
		const _arrayValueRk04NBW = [_arrayValueep8etru]
		const _arrayValueM6r89hH = "XLruDkcwVsFNWsWd";
		const _arrayValueoF9qLC6 = false;
		const _weightLimitbXhvxvc = [_arrayValueJCvqVGt, _arrayValueRk04NBW, _arrayValueM6r89hH, _arrayValueoF9qLC6]
		const _KnapsackXtTuX5z = new Knapsack(_possibleItemsOmdzTjf, _weightLimitbXhvxvc)
		const _returnValueTanLe2p = await _KnapsackXtTuX5z.sortPossibleItemsByValue()
		const _returnValuezd4wNLi = await _KnapsackXtTuX5z.sortPossibleItemsByValue()
		const _returnValueDpAjujw = await _KnapsackXtTuX5z.solveZeroOneKnapsackProblem()
		const _returnValueSAFJXcq = await _KnapsackXtTuX5z.solveUnboundedKnapsackProblem()
	});
})