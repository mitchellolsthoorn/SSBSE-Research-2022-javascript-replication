export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueCYfFMPj = []
		const _arrayValuepN6BDce = false;
		const _graphukYtXzi = [_arrayValueCYfFMPj, _arrayValuepN6BDce]
		const _returnValuebzaix5 = await stronglyConnectedComponents(_graphukYtXzi)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedwthTm61 = true;
		const _graphOanneGQ = new Graph(_isDirectedwthTm61)
		const _returnValueeUMgHB = await _graphOanneGQ.getVerticesIndices()
		const _returnValueFKrwxV = await _graphOanneGQ.getWeight()
		const _returnValueRBOz6f7 = await _graphOanneGQ.toString()
		const _returnValueBb6RKqh = await _graphOanneGQ.getVerticesIndices()
		const _returnValueScWhaOu = await stronglyConnectedComponents(_graphOanneGQ)
	});
})