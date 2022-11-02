export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemsKx1Mvue = "ITsXhn5CScmzuEQbfU6gSP1hY3nSnF6OPcy3lkS44lGnu9FZzP2p";
		const _weightLimitYQhQAOV = true;
		const _KnapsackVPcq9Ws = new Knapsack(_possibleItemsKx1Mvue, _weightLimitYQhQAOV)
		const _returnValueXfIyv08 = await _KnapsackVPcq9Ws.totalWeight()
		const _returnValue8IL556 = await _KnapsackVPcq9Ws.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _returnValueZX6MGRp = true;
		const _possibleItemsJ8uj0F = () => { return _returnValueZX6MGRp };
		const _arrayValueiJzy9Qv = undefined;
		const _arrayValuez8agAnA = undefined;
		const _weightLimitgjuiWD = [_arrayValueiJzy9Qv, _arrayValuez8agAnA]
		const _KnapsackLc0IE5F = new Knapsack(_possibleItemsJ8uj0F, _weightLimitgjuiWD)
		const _returnValuef4x56s = await _KnapsackLc0IE5F.solveUnboundedKnapsackProblem()
		const _returnValueOOCN4e5 = await _KnapsackLc0IE5F.solveZeroOneKnapsackProblem()
		const _returnValueM7rDuFB = await _KnapsackLc0IE5F.solveUnboundedKnapsackProblem()
		const _returnValuecburzsX = await _KnapsackLc0IE5F.totalValue()
		const _returnValueSFfzYoB = await _KnapsackLc0IE5F.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemscr66PDs = "8gUzbWe3QSSznTxSxlKBm2AZIFKSFVfH6Jr5tfohhIcUSSHENIPgbaQG7zTLZdDWjXKw";
		const _weightLimitoDmGhVW = {
		
	}
		const _KnapsackImJf70V = new Knapsack(_possibleItemscr66PDs, _weightLimitoDmGhVW)
		const _returnValuedF5E4Xx = await _KnapsackImJf70V.solveZeroOneKnapsackProblem()
		const _returnValueGmBHc0 = await _KnapsackImJf70V.solveZeroOneKnapsackProblem()
		const _returnValueQMHN22 = await _KnapsackImJf70V.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueMjufsn = await _KnapsackImJf70V.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsJWFKVz6 = "stUSVw";
		const _weightLimitQ8sA4ca = null;
		const _KnapsackHP6wAQt = new Knapsack(_possibleItemsJWFKVz6, _weightLimitQ8sA4ca)
		const _returnValueYNiKIp5 = await _KnapsackHP6wAQt.solveUnboundedKnapsackProblem()
		const _returnValueUwmW0rz = await _KnapsackHP6wAQt.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueG7desAy = await _KnapsackHP6wAQt.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsN0IaTxh = "HS4lnNCi3p1FxZg";
		const _weightLimitcIDrF4t = 5.160166065107948;
		const _KnapsackEI7TEdu = new Knapsack(_possibleItemsN0IaTxh, _weightLimitcIDrF4t)
		const _returnValueBvGYHP = await _KnapsackEI7TEdu.sortPossibleItemsByWeight()
		const _returnValuepO2Nx1J = await _KnapsackEI7TEdu.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _returnValueCk0LSTM = true;
		const _possibleItemsWQsYC7N = () => { return _returnValueCk0LSTM };
		const _weightLimitJsmHPV0 = 4.067844351925391;
		const _Knapsackq6hW67B = new Knapsack(_possibleItemsWQsYC7N, _weightLimitJsmHPV0)
		const _returnValuehVrllNP = await _Knapsackq6hW67B.sortPossibleItemsByValue()
		const _returnValueGj4qJHs = await _Knapsackq6hW67B.solveZeroOneKnapsackProblem()
		const _returnValuefx2Fhk = await _Knapsackq6hW67B.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueWGslRL6 = await _Knapsackq6hW67B.solveUnboundedKnapsackProblem()
		const _returnValueWOxEf1 = await _Knapsackq6hW67B.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsng1iPQV = "tnRym4bB1WI9Mzokt33ROg02yDyRJi8ke1";
		const _weightLimitIh90uU = true;
		const _KnapsackXTehs8 = new Knapsack(_possibleItemsng1iPQV, _weightLimitIh90uU)
		const _returnValueDoDFXQ3 = await _KnapsackXTehs8.sortPossibleItemsByValue()
		const _returnValueDuN45Ym = await _KnapsackXTehs8.solveZeroOneKnapsackProblem()
	});
})