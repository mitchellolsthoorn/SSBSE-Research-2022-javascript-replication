export {}
import LinkedList from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/linked-list/LinkedList.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _comparatorFunctioniZYLeSV = undefined;
		const _graphtNCAl5k = new LinkedList(_comparatorFunctioniZYLeSV)
		const _objectPatternAFKkcR = true;
		const _returnValuerM3PoWx = await _graphtNCAl5k.find(_objectPatternAFKkcR)
		const _returnValueVzPmSl2 = await _graphtNCAl5k.toArray()
		const _returnValueoZbya2d = await stronglyConnectedComponents(_graphtNCAl5k)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedguM8UD6 = false;
		const _graphiE9sXu = new Graph(_isDirectedguM8UD6)
		const _returnValuecumc6mg = await _graphiE9sXu.getWeight()
		const _returnValueqhqAQSy = await _graphiE9sXu.getAdjacencyMatrix()
		const _returnValueENzAxx = await stronglyConnectedComponents(_graphiE9sXu)
	});
})