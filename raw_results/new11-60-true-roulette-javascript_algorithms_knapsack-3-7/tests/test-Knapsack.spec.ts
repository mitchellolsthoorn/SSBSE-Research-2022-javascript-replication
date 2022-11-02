export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemsl0qjano = "7kEaD";
		const _weightLimitdOOH9f = 8.854198892182382;
		const _KnapsackrYsDilj = new Knapsack(_possibleItemsl0qjano, _weightLimitdOOH9f)
		const _returnValueY2vD0up = await _KnapsackrYsDilj.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuefCRdVEE = await _KnapsackrYsDilj.totalValue()
		const _returnValueCFLyZYU = await _KnapsackrYsDilj.sortPossibleItemsByValue()
		const _returnValueAi4FIG6 = await _KnapsackrYsDilj.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _returnValueaVYWzFQ = "IBC4cqMpaoOOjWGbzywe6q3k4kSiqlEtR9fK3sKC6azy7xhzimCxKtXrUdzuDp1GOOOGMXGrkDUOHT";
		const _possibleItemsp5KmIcQ = () => { return _returnValueaVYWzFQ };
		const _weightLimitaKmPics = -1.7559700881788736;
		const _KnapsackE81nVET = new Knapsack(_possibleItemsp5KmIcQ, _weightLimitaKmPics)
		const _returnValueeIaOCZX = await _KnapsackE81nVET.solveZeroOneKnapsackProblem()
		const _returnValueeKyGcSZ = await _KnapsackE81nVET.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _arrayValuedZknVHV = false;
		const _arrayValueYIfID0m = true;
		const _arrayValueFMt2jaf = [_arrayValueYIfID0m]
		const _arrayValueIZ36EGw = undefined;
		const _arrayValueOmwuX71 = null;
		const _arrayValueOU7YkuQ = [_arrayValueFMt2jaf, _arrayValueIZ36EGw, _arrayValueOmwuX71]
		const _possibleItemsakjecK2 = [_arrayValuedZknVHV, _arrayValueOU7YkuQ]
		const _weightLimitroENFYG = -0.6671134758196366;
		const _KnapsackbQMH5oN = new Knapsack(_possibleItemsakjecK2, _weightLimitroENFYG)
		const _returnValueaKyY4dM = await _KnapsackbQMH5oN.sortPossibleItemsByWeight()
		const _returnValuedwPuJUD = await _KnapsackbQMH5oN.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuebWCxoVB = await _KnapsackbQMH5oN.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsSsSWwwG = "WJKzSGNDu7XoXR6oTneepoMLOF3n422UqWE7i6XvwxVDmVoLWzW0XlFqdsZ7wDPWsRYlF4jYi9";
		const _weightLimitdbXtN3p = 9.265705586057848;
		const _KnapsackrRMep4k = new Knapsack(_possibleItemsSsSWwwG, _weightLimitdbXtN3p)
		const _returnValuewMTwoRY = await _KnapsackrRMep4k.solveUnboundedKnapsackProblem()
		const _returnValuenjmEbzm = await _KnapsackrRMep4k.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsxdcs2a4 = "flrWsmFqoIb9HaMInioHNhjbUgB29i7OwQluV6MKBUkJPOyIIFLqeqyiGsAyqytm9AMfkB9FH57QLIK4lRUg5h1rizBb";
		const _weightLimitrvY97dI = {
		
	}
		const _KnapsackoyW9NwP = new Knapsack(_possibleItemsxdcs2a4, _weightLimitrvY97dI)
		const _returnValuemETVeaN = await _KnapsackoyW9NwP.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _returnValueJLI4bsR = undefined;
		const _returnValuevqTvTaI = () => { return _returnValueJLI4bsR };
		const _possibleItemsGEgc7QG = () => { return _returnValuevqTvTaI };
		const _weightLimitwKrSjNy = 5.1958430242297275;
		const _KnapsackXjZYyR1 = new Knapsack(_possibleItemsGEgc7QG, _weightLimitwKrSjNy)
		const _returnValueAkdNfZ4 = await _KnapsackXjZYyR1.solveZeroOneKnapsackProblem()
		const _returnValuelGRLuha = await _KnapsackXjZYyR1.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsrDLAzTz = "ciUMllLed3NYMWt53ZsCtJzHQK4NHCECdtS5TWOzqrlTUZ4vhnkv6TEls";
		const _weightLimitNse1950 = true;
		const _KnapsackpT9HjOV = new Knapsack(_possibleItemsrDLAzTz, _weightLimitNse1950)
		const _returnValueIfpHkQL = await _KnapsackpT9HjOV.sortPossibleItemsByValue()
		const _returnValueoui7xBt = await _KnapsackpT9HjOV.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuebCn3lle = await _KnapsackpT9HjOV.solveZeroOneKnapsackProblem()
	});
})