export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _arrayValueO6ZIFE6 = -9.31411562625867;
		const _possibleItemsjdS2R0J = [_arrayValueO6ZIFE6]
		const _weightLimitnoHywW = 6.698522352748391;
		const _KnapsackrnAUeL1 = new Knapsack(_possibleItemsjdS2R0J, _weightLimitnoHywW)
		const _returnValueAj2YQnz = await _KnapsackrnAUeL1.solveUnboundedKnapsackProblem()
		const _returnValuewWsobKN = await _KnapsackrnAUeL1.sortPossibleItemsByValue()
		const _returnValuePr7c2B8 = await _KnapsackrnAUeL1.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _returnValuek2kXKzL = 5.998012660150307;
		const _possibleItemsOtwQKyV = () => { return _returnValuek2kXKzL };
		const _weightLimitG4UcT09 = -1.4066408410185556;
		const _KnapsackdAcExy = new Knapsack(_possibleItemsOtwQKyV, _weightLimitG4UcT09)
		const _returnValuemC9q1Z6 = await _KnapsackdAcExy.totalValue()
		const _returnValueX4mAZ0m = await _KnapsackdAcExy.solveUnboundedKnapsackProblem()
		const _returnValueu2NFIM = await _KnapsackdAcExy.solveZeroOneKnapsackProblem()
		const _returnValueJrwnAKC = await _KnapsackdAcExy.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsjjC9ukh = "qvjpSK6zBHI3Ox9f7CNCZix4GdZm3rQ3Yu8RX62a";
		const _weightLimitMxXI4G = 7.197875299602806;
		const _KnapsackEU2Fnic = new Knapsack(_possibleItemsjjC9ukh, _weightLimitMxXI4G)
		const _returnValuepYNntOF = await _KnapsackEU2Fnic.sortPossibleItemsByValue()
		const _returnValueFst4PFk = await _KnapsackEU2Fnic.solveZeroOneKnapsackProblem()
		const _returnValuecemGuT9 = await _KnapsackEU2Fnic.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsfo9MIGo = "m2RF8B9QaV11k6Q7FMQNDfesKZf5kSM5LClgC1zSK6bJ4m4sTi2DcTatPxPpAAbPzenXPY6F";
		const _weightLimitVRFtC9g = "t4bi";
		const _KnapsackopASovz = new Knapsack(_possibleItemsfo9MIGo, _weightLimitVRFtC9g)
		const _returnValueSoNQQxN = await _KnapsackopASovz.solveUnboundedKnapsackProblem()
		const _returnValuenGB52y = await _KnapsackopASovz.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuehZhd42S = await _KnapsackopASovz.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _possibleItemszwTBYmq = "9fUJWpYNNurXQG26EUrEB5D6JJtZ7zl9gWklFg1RMXQG";
		const _weightLimitKOYqVtI = false;
		const _KnapsackoZm2rNo = new Knapsack(_possibleItemszwTBYmq, _weightLimitKOYqVtI)
		const _returnValueyXC7jm9 = await _KnapsackoZm2rNo.solveZeroOneKnapsackProblem()
		const _returnValuehWXtCsY = await _KnapsackoZm2rNo.solveUnboundedKnapsackProblem()
		const _returnValueWR5JmPG = await _KnapsackoZm2rNo.totalWeight()
		const _returnValueMX1QJJ7 = await _KnapsackoZm2rNo.solveUnboundedKnapsackProblem()
		const _returnValuejmxR4PG = await _KnapsackoZm2rNo.sortPossibleItemsByWeight()
	});

	it('test for Knapsack', async () => {
		const _returnValueTZqLoiH = true;
		const _possibleItemsUNowJDS = () => { return _returnValueTZqLoiH };
		const _weightLimitYwsI5oe = 1.2064066194445076;
		const _KnapsackPrYt0BD = new Knapsack(_possibleItemsUNowJDS, _weightLimitYwsI5oe)
		const _returnValueyeXt0t = await _KnapsackPrYt0BD.solveZeroOneKnapsackProblem()
		const _returnValuepfFIKRA = await _KnapsackPrYt0BD.sortPossibleItemsByValue()
		const _returnValuefJQyyxt = await _KnapsackPrYt0BD.sortPossibleItemsByWeight()
		const _returnValue4CX7fQ = await _KnapsackPrYt0BD.solveZeroOneKnapsackProblem()
		const _returnValuey0kWUWS = await _KnapsackPrYt0BD.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _returnValueEtVR6E = undefined;
		const _arrayValuekm3kYHc = () => { return _returnValueEtVR6E };
		const _returnValueiIHkhVc = "1gft5T9qut6YfKjEzJWo2evgM";
		const _arrayValueSB7L793 = () => { return _returnValueiIHkhVc };
		const _possibleItemsPa85cF7 = [_arrayValuekm3kYHc, _arrayValueSB7L793]
		const _weightLimitHiyOz74 = true;
		const _KnapsackjX5kaby = new Knapsack(_possibleItemsPa85cF7, _weightLimitHiyOz74)
		const _returnValueHLpQ6iq = await _KnapsackjX5kaby.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueIWnvnQ = await _KnapsackjX5kaby.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueGEwrprW = await _KnapsackjX5kaby.solveUnboundedKnapsackProblem()
		const _returnValuel0VCsj = await _KnapsackjX5kaby.solveZeroOneKnapsackProblem()
		const _returnValuedQzRSos = await _KnapsackjX5kaby.sortPossibleItemsByValue()
	});
})