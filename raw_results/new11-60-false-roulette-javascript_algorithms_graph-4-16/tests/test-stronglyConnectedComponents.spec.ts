export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _graphDW7a44L = true;
		const _returnValueCD4wRp3 = await stronglyConnectedComponents(_graphDW7a44L)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedZY9EieZ = true;
		const _graphqdGUgfr = new Graph(_isDirectedZY9EieZ)
		const _returnValueb1A5mTO = await _graphqdGUgfr.getAdjacencyMatrix()
		const _returnValueZi9wVdx = await _graphqdGUgfr.getVerticesIndices()
		const _returnValueH8fvTeg = await _graphqdGUgfr.getAllVertices()
		const _returnValueJrUCljK = await stronglyConnectedComponents(_graphqdGUgfr)
	});
})