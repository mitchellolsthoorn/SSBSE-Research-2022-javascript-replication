export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _possibleItemsywBUWb2 = "InEKzndTbEO9vrDFPEEFJDXRrrF2Fkr5U44PruSA3LfTPvO6UFWl3ArPtwo7xg1";
		const _weightLimitY3R5xaO = false;
		const _KnapsackL5VcjAN = new Knapsack(_possibleItemsywBUWb2, _weightLimitY3R5xaO)
		const _returnValueWRFw7do = await _KnapsackL5VcjAN.totalValue()
		const _returnValuetP23MRM = await _KnapsackL5VcjAN.solveUnboundedKnapsackProblem()
		const _returnValueCaQcnYA = await _KnapsackL5VcjAN.totalValue()
		const _returnValueBS55NdA = await _KnapsackL5VcjAN.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _arrayValueOlAbMUJ = "H8aCMMgkVctiIkanunGBPVRx8MO";
		const _returnValuevnDqynF = []
		const _arrayValueOKxQRPe = () => { return _returnValuevnDqynF };
		const _arrayValueT7viDi = "1kOjhjYD9nLJqDVRnYS45U7xQSnosSJpMcadbFozIxicqttTpQmqBKQHyh7E136sNpHCATpF4mE8gKES88i2A7yo3";
		const _possibleItemsaJRtDmk = [_arrayValueOlAbMUJ, _arrayValueOKxQRPe, _arrayValueT7viDi]
		const _weightLimitzE95iAN = undefined;
		const _KnapsackgZr0vq = new Knapsack(_possibleItemsaJRtDmk, _weightLimitzE95iAN)
		const _returnValuetHuzYg1 = await _KnapsackgZr0vq.sortPossibleItemsByValue()
		const _returnValuenyIEfV = await _KnapsackgZr0vq.totalValue()
		const _returnValueQZbPJ0Y = await _KnapsackgZr0vq.sortPossibleItemsByValue()
		const _returnValueDsymk29 = await _KnapsackgZr0vq.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsG1Lh23h = []
		const _weightLimitOHyM4zy = "xs9NjzXiKGnOeGxvGzT3pgemELnwnQniNoqPJ9F2ppcGxuVqd1SiawNiSObeWVgA2gmLK";
		const _KnapsackZ4dTM67 = new Knapsack(_possibleItemsG1Lh23h, _weightLimitOHyM4zy)
		const _returnValuePDcbeIk = await _KnapsackZ4dTM67.solveUnboundedKnapsackProblem()
		const _returnValuePhrvbqP = await _KnapsackZ4dTM67.sortPossibleItemsByValue()
		const _returnValueNhYZPvU = await _KnapsackZ4dTM67.totalWeight()
		const _returnValueLh36ALh = await _KnapsackZ4dTM67.solveZeroOneKnapsackProblem()
		const _returnValueD1M01oS = await _KnapsackZ4dTM67.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsNDnLCbr = "6r5y8nzkNzW6TYKUWzuHAVNgD5JUyTQSBXsgMJA1kaoJUiQw5r3A9djFydgBHL15";
		const _weightLimitDnTRLaE = undefined;
		const _KnapsackeVz4zNz = new Knapsack(_possibleItemsNDnLCbr, _weightLimitDnTRLaE)
		const _returnValueWwetDNB = await _KnapsackeVz4zNz.solveZeroOneKnapsackProblem()
		const _returnValueaZ40Dk3 = await _KnapsackeVz4zNz.solveZeroOneKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _arrayValueJKiNv62 = -1.795271896611757;
		const _arrayValuek5eSVWz = [_arrayValueJKiNv62]
		const _arrayValueMPIrTNt = "yuTOP42JUNbmpor1g2lwiPnnKxKYB7VXH4U1WKpWfzcX";
		const _returnValueajzguUF = true;
		const _arrayValueGqnTxpD = () => { return _returnValueajzguUF };
		const _possibleItemsE2W0hi = [_arrayValuek5eSVWz, _arrayValueMPIrTNt, _arrayValueGqnTxpD]
		const _weightLimitde99lEn = true;
		const _KnapsackvzcMmzn = new Knapsack(_possibleItemsE2W0hi, _weightLimitde99lEn)
		const _returnValueguZO9m2 = await _KnapsackvzcMmzn.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueKK3vHmE = await _KnapsackvzcMmzn.solveZeroOneKnapsackProblem()
		const _returnValueABg7wJh = await _KnapsackvzcMmzn.solveUnboundedKnapsackProblem()
	});
})