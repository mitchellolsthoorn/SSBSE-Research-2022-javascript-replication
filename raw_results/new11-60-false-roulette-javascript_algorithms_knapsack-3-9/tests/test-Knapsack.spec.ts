export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _returnValueZ11QEX = false;
		const _possibleItemsKt0pOG1 = () => { return _returnValueZ11QEX };
		const _weightLimitXFaR7I = 8.432086932947755;
		const _Knapsackw3Po3Ym = new Knapsack(_possibleItemsKt0pOG1, _weightLimitXFaR7I)
		const _returnValuem8MXQiR = await _Knapsackw3Po3Ym.sortPossibleItemsByValue()
		const _returnValueUQ0nMYH = await _Knapsackw3Po3Ym.solveUnboundedKnapsackProblem()
		const _returnValuenE59UYa = await _Knapsackw3Po3Ym.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValuepOa7Ky = undefined;
		const _possibleItemsUiffiBB = [_arrayValuepOa7Ky]
		const _weightLimitsJIhxfY = -2.433937515912458;
		const _KnapsackFJJmkPR = new Knapsack(_possibleItemsUiffiBB, _weightLimitsJIhxfY)
		const _returnValuehGNT8VY = await _KnapsackFJJmkPR.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuew6yF5tn = await _KnapsackFJJmkPR.totalValue()
		const _returnValueohcY9i0 = await _KnapsackFJJmkPR.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueyZJPJ1S = null;
		const _arrayValueBgeEklJ = null;
		const _arrayValueLJRrIDT = null;
		const _possibleItemsfzcdQgK = [_arrayValueyZJPJ1S, _arrayValueBgeEklJ, _arrayValueLJRrIDT]
		const _weightLimituWVMk7k = -8.140471633511133;
		const _Knapsack7qoqrS = new Knapsack(_possibleItemsfzcdQgK, _weightLimituWVMk7k)
		const _returnValueV5TPtK = await _Knapsack7qoqrS.totalWeight()
		const _returnValuexGJZrdy = await _Knapsack7qoqrS.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueXe5NpNQ = await _Knapsack7qoqrS.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _returnValueEVRspA = 6.348655551943494;
		const _possibleItemsbBd2KXT = () => { return _returnValueEVRspA };
		const _arrayValueRVF3scE = true;
		const _arrayValueUFa7mOr = "WCPPkYUwCU3PfdHBq0PVPOUpSiG8847LpLF2XII4Qi9zIZekPRYcKklRp1qplE5jnNpbrfwOhIVUkxIB5pnC";
		const _arrayValueC9hiQLr = "oAdLFx4Wp693Gk3IuxpaMnuDjCrcxC4XyDTe";
		const _arrayValueTFSPWHP = null;
		const _arrayValueWUhClif = [_arrayValueUFa7mOr, _arrayValueC9hiQLr, _arrayValueTFSPWHP]
		const _arrayValueKRqDXbG = undefined;
		const _arrayValueboHenaI = "qERu4h";
		const _arrayValueU5T9tml = [_arrayValueKRqDXbG, _arrayValueboHenaI]
		const _weightLimitf7CmKnV = [_arrayValueRVF3scE, _arrayValueWUhClif, _arrayValueU5T9tml]
		const _KnapsackISYq6gC = new Knapsack(_possibleItemsbBd2KXT, _weightLimitf7CmKnV)
		const _returnValueQlHEZm4 = await _KnapsackISYq6gC.solveZeroOneKnapsackProblem()
		const _returnValueSqNhxCR = await _KnapsackISYq6gC.solveZeroOneKnapsackProblem()
		const _returnValuexxq5znj = await _KnapsackISYq6gC.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValuereLsty0 = -6.45061570728406;
		const _arrayValue6w3nHJ = "mysdlNvYJu1YxB";
		const _possibleItemsbv8pEQA = [_arrayValuereLsty0, _arrayValue6w3nHJ]
		const _weightLimitd0BnBDi = 2.8246834661233287;
		const _KnapsackfQInmOJ = new Knapsack(_possibleItemsbv8pEQA, _weightLimitd0BnBDi)
		const _returnValueyoehqT8 = await _KnapsackfQInmOJ.solveUnboundedKnapsackProblem()
		const _returnValueQHRDTws = await _KnapsackfQInmOJ.totalValue()
		const _returnValuepwdaz6I = await _KnapsackfQInmOJ.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuehtLS5NZ = await _KnapsackfQInmOJ.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsxhkIcnw = "KnTDH2pDXRWTO6vxTrauKCvJzhGCRyulxJe5W2bLKwWshhJY58CJhaWhyGieka2lnWT875f";
		const _weightLimitnvFONQ = null;
		const _KnapsackwydePy = new Knapsack(_possibleItemsxhkIcnw, _weightLimitnvFONQ)
		const _returnValueSbYpFyg = await _KnapsackwydePy.solveZeroOneKnapsackProblem()
		const _returnValueriRuvP = await _KnapsackwydePy.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItems5zEu4X = "TymmiJomhaapSnQAFCIRN4e4PjDMG7dWLHpi9rYqrnnyFHQ";
		const _weightLimitQpEGGJs = true;
		const _Knapsackz7TLaKS = new Knapsack(_possibleItems5zEu4X, _weightLimitQpEGGJs)
		const _returnValueKREVfL = await _Knapsackz7TLaKS.sortPossibleItemsByValuePerWeightRatio()
		const _returnValue4NOupN = await _Knapsackz7TLaKS.solveZeroOneKnapsackProblem()
		const _returnValueZCVSypA = await _Knapsackz7TLaKS.totalValue()
	});
})