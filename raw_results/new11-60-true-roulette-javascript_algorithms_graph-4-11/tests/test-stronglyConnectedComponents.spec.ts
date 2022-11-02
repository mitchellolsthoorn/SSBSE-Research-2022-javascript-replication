export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _graphsXK7gmb = -1.4668961498520083;
		const _returnValueovuVPjU = await stronglyConnectedComponents(_graphsXK7gmb)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedCfqR5fx = true;
		const _graphXumbznJ = new Graph(_isDirectedCfqR5fx)
		const _returnValueCHZ7T0d = await _graphXumbznJ.getVerticesIndices()
		const _vertexKeyIl8FaVP = null;
		const _returnValuehUZa5eR = await _graphXumbznJ.getVertexByKey(_vertexKeyIl8FaVP)
		const _returnValueezvAhy = await _graphXumbznJ.getAllEdges()
		const _returnValuelssDpio = await stronglyConnectedComponents(_graphXumbznJ)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedPvmMeea = false;
		const _graphygZbjrY = new Graph(_isDirectedPvmMeea)
		const _returnValuex4k8nOH = await _graphygZbjrY.getAllVertices()
		const _valuePitBWU3 = true;
		const _newVertexrE5mhj6 = new GraphVertex(_valuePitBWU3)
		const _returnValuem6WxJAG = await _newVertexrE5mhj6.getNeighbors()
		const _vertext8NLNQp = null;
		const _returnValuezb9bOU = await _newVertexrE5mhj6.hasNeighbor(_vertext8NLNQp)
		const _returnValueDygMZSy = await _graphygZbjrY.addVertex(_newVertexrE5mhj6)
		const _returnValueyk2JkDR = await stronglyConnectedComponents(_graphygZbjrY)
	});
})