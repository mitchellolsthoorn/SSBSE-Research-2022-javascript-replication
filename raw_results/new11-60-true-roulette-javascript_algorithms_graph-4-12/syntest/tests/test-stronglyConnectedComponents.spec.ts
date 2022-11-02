export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValuegMPE39K = 3.820971848430254;
		const _graphljOKzx6 = [_arrayValuegMPE39K]
		const _returnValuevixdza9 = await stronglyConnectedComponents(_graphljOKzx6)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedV8OUeX = true;
		const _graphLiI5Fyw = new Graph(_isDirectedV8OUeX)
		const _returnValuesKu4tqE = await _graphLiI5Fyw.reverse()
		const _returnValuefBFmTfV = await _graphLiI5Fyw.getWeight()
		const _returnValueM65CfWV = await stronglyConnectedComponents(_graphLiI5Fyw)
	});
})