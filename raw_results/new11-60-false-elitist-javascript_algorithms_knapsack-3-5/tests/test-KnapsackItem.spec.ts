export {}
import KnapsackItem from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('KnapsackItem', () => {
	it('test for KnapsackItem', async () => {
		const _objectPatternTBJYkp5 = "rO";
		const _KnapsackItemaAODHVw = new KnapsackItem(_objectPatternTBJYkp5)
		const _returnValueK9frFS = await _KnapsackItemaAODHVw.valuePerWeightRatio()
		const _returnValueQbMLqkq = await _KnapsackItemaAODHVw.totalWeight()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternWvFBeYu = "8NxkjSlLKSyLwJnFxkn1GjC6f8dLab4QCZtFgZoGWnjb0d01jXnKGhEkTOE8FSzEEb6j2b1gfJ9RBl7g7Yq92sJwmeQK";
		const _KnapsackItemKqLFSEv = new KnapsackItem(_objectPatternWvFBeYu)
		const _returnValueEEuZKiz = await _KnapsackItemKqLFSEv.totalWeight()
		const _returnValuerPmG3CK = await _KnapsackItemKqLFSEv.toString()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternSSbDfDh = -8.28111180880786;
		const _KnapsackItemKHOMuEW = new KnapsackItem(_objectPatternSSbDfDh)
		const _returnValuepOel9B = await _KnapsackItemKHOMuEW.toString()
		const _returnValueiZRFAL = await _KnapsackItemKHOMuEW.valuePerWeightRatio()
		const _returnValuej5JORCu = await _KnapsackItemKHOMuEW.totalWeight()
		const _returnValueXWcIarB = await _KnapsackItemKHOMuEW.totalValue()
	});

	it('test for KnapsackItem', async () => {
		const _objectPatternMUfx1kr = "CJkGqaNfwbVQ85y4SbPSynHo";
		const _KnapsackItemPJYwLwA = new KnapsackItem(_objectPatternMUfx1kr)
		const _returnValueojnLuvF = await _KnapsackItemPJYwLwA.toString()
		const _returnValueauJLqDZ = await _KnapsackItemPJYwLwA.totalValue()
	});
})