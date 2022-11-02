export {}
import Knapsack from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Knapsack', () => {
	it('test for Knapsack', async () => {
		const _arrayValuegPhVR1 = null;
		const _possibleItemsEsvt7wU = [_arrayValuegPhVR1]
		const _weightLimitjj2rjNp = null;
		const _KnapsackAsPSyks = new Knapsack(_possibleItemsEsvt7wU, _weightLimitjj2rjNp)
		const _returnValueOJcF6oE = await _KnapsackAsPSyks.solveZeroOneKnapsackProblem()
		const _returnValuelzkKd2w = await _KnapsackAsPSyks.totalWeight()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsQk1kAlT = null;
		const _returnValuenF6STWu = undefined;
		const _arrayValueeT1mvzh = () => { return _returnValuenF6STWu };
		const _arrayValuern7MEg0 = "RB4YdsA9HeAYs143Bt3QBrazT8fXk7hTkBl2zpqsJB53mbmG0KM39jjUxSelsXUbKKdg8BtJbzSi7Q2P4Wxl";
		const _arrayValueBHVpjhE = true;
		const _arrayValueCYXhtcA = -5.831804810857412;
		const _arrayValueWBNlJm0 = -0.8839614161839133;
		const _arrayValueBPGfbSI = [_arrayValueCYXhtcA, _arrayValueWBNlJm0]
		const _weightLimitIp1YSqy = [_arrayValueeT1mvzh, _arrayValuern7MEg0, _arrayValueBHVpjhE, _arrayValueBPGfbSI]
		const _KnapsackSCl1RDV = new Knapsack(_possibleItemsQk1kAlT, _weightLimitIp1YSqy)
		const _returnValueaH3Jcjy = await _KnapsackSCl1RDV.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueFJ38s1X = await _KnapsackSCl1RDV.totalWeight()
		const _returnValue746y5C = await _KnapsackSCl1RDV.sortPossibleItemsByValue()
		const _returnValuehfEmCI = await _KnapsackSCl1RDV.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsvquFyeB = undefined;
		const _weightLimityF7isAo = undefined;
		const _KnapsackuWBi5df = new Knapsack(_possibleItemsvquFyeB, _weightLimityF7isAo)
		const _returnValuefCyfpJV = await _KnapsackuWBi5df.solveUnboundedKnapsackProblem()
		const _returnValuejANjle6 = await _KnapsackuWBi5df.solveUnboundedKnapsackProblem()
		const _returnValueWCECbNO = await _KnapsackuWBi5df.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueKS0Pmo3 = await _KnapsackuWBi5df.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _returnValuedyxr0Ro = undefined;
		const _possibleItemsn7zRGyl = () => { return _returnValuedyxr0Ro };
		const _returnValueHnffWR = "J4HacSwO9h8vSrXOaVg6gH3ry3yjWRP4CzrK9VrJESgh5ACd7ojHKu8TO3RdA8Arx4SIiM1zcVWOfe";
		const _weightLimitf1UzY2e = () => { return _returnValueHnffWR };
		const _KnapsackuT2mllY = new Knapsack(_possibleItemsn7zRGyl, _weightLimitf1UzY2e)
		const _returnValuef1EYIbj = await _KnapsackuT2mllY.sortPossibleItemsByValuePerWeightRatio()
		const _returnValueC4ALMwh = await _KnapsackuT2mllY.sortPossibleItemsByValuePerWeightRatio()
		const _returnValue8fCkcv = await _KnapsackuT2mllY.solveZeroOneKnapsackProblem()
		const _returnValuefp1mrUX = await _KnapsackuT2mllY.totalValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsdr7ePCe = "El8i2OlkvoNl2aHjTuaXFMnxdtTrn5fbroSsFfgncX";
		const _weightLimitKGnKNYj = "Da6CR9oHU1sCM3TwSl6WpeACMz1IE1jMvktYAnBYfpUkrb4bKtYAvakXJjlJqSw37UoX24WFVlXF6F5sLQsqT";
		const _KnapsackQ3RQEzt = new Knapsack(_possibleItemsdr7ePCe, _weightLimitKGnKNYj)
		const _returnValuefTx6tyn = await _KnapsackQ3RQEzt.solveZeroOneKnapsackProblem()
		const _returnValueOF8G19a = await _KnapsackQ3RQEzt.totalWeight()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsb6L812Z = "STAAdrjiDmOUCDkTjFWt2cxa7AqV6UPWCgJTGqTApGM3owvAXYSn5WOeZIan5Jff6qRmgtfH3sKEMzXeIaGiXf5J";
		const _weightLimitCSewBJB = "ZQvDC92GBS1fSUvl";
		const _KnapsackdCsF0LG = new Knapsack(_possibleItemsb6L812Z, _weightLimitCSewBJB)
		const _returnValueN8JfdZo = await _KnapsackdCsF0LG.solveUnboundedKnapsackProblem()
		const _returnValueUsUU9bL = await _KnapsackdCsF0LG.solveUnboundedKnapsackProblem()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsVbNdWwS = []
		const _weightLimitOlCq3VR = true;
		const _KnapsacktEVhTPk = new Knapsack(_possibleItemsVbNdWwS, _weightLimitOlCq3VR)
		const _returnValueE3l3sJl = await _KnapsacktEVhTPk.sortPossibleItemsByValuePerWeightRatio()
		const _returnValuehB5vAg4 = await _KnapsacktEVhTPk.solveZeroOneKnapsackProblem()
		const _returnValueb4BU4Am = await _KnapsacktEVhTPk.totalValue()
		const _returnValuePMn6SMG = await _KnapsacktEVhTPk.sortPossibleItemsByValuePerWeightRatio()
	});

	it('test for Knapsack', async () => {
		const _possibleItems0uz0rs = "p7btJkw93OQXseNTt3eX4ofTAwHq34dPEroiz4OR";
		const _weightLimitQIy2fGf = true;
		const _KnapsackRZ6saUs = new Knapsack(_possibleItems0uz0rs, _weightLimitQIy2fGf)
		const _returnValueWptFV3B = await _KnapsackRZ6saUs.solveZeroOneKnapsackProblem()
		const _returnValuesWcn5X = await _KnapsackRZ6saUs.sortPossibleItemsByValue()
	});

	it('test for Knapsack', async () => {
		const _possibleItemsiRY3Ysj = "Da6psFyIdQpqyNHAHlsgvZAnro8Ykn0ZHujBPblfVgUzMJAKdVcXaS6zRw8YBH8Jnj84gUzf7CASaZuuA84t6p7";
		const _weightLimitSv7bTAg = true;
		const _KnapsacktjUNrlx = new Knapsack(_possibleItemsiRY3Ysj, _weightLimitSv7bTAg)
		const _returnValueTVZGDcz = await _KnapsacktjUNrlx.sortPossibleItemsByValue()
		const _returnValueYJtqi7Y = await _KnapsacktjUNrlx.solveUnboundedKnapsackProblem()
		const _returnValuear8a9iU = await _KnapsacktjUNrlx.solveUnboundedKnapsackProblem()
	});
})