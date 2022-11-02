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
		const _returnValueRaksY0P = "H9aXzEouO0BXaHdGlD8JSFxyOnjGaAjcUP8z3EUAra8bk3utoTRgpwKAl4JSRn7JgQdzEqzI5szpXvj15QmSnAwwg9sU";
		const _reversetCVfKLA = () => { return _returnValueRaksY0P };
		const _graphKzMKDUP = {
			"reverse": _reversetCVfKLA
	}
		const _returnValueTOTwOq = await stronglyConnectedComponents(_graphKzMKDUP)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedkHIgL56 = -2.525476009872847;
		const _graphn7CUMj = new Graph(_isDirectedkHIgL56)
		const _returnValuex4X6hkP = await _graphn7CUMj.toString()
		const _returnValueKjW6bYw = await _graphn7CUMj.getVerticesIndices()
		const _returnValuelGdWjdf = await stronglyConnectedComponents(_graphn7CUMj)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedoP6Xsch = false;
		const _graphvNbMCE3 = new Graph(_isDirectedoP6Xsch)
		const _returnValuefWMqB0u = await _graphvNbMCE3.getAllEdges()
		const _returnValuezhpJoY = await _graphvNbMCE3.getVerticesIndices()
		const _returnValueocAj7gW = await _graphvNbMCE3.getAllVertices()
		const _valuemBUhOo = {
		
	}
		const _newVertexFVRZer = new GraphVertex(_valuemBUhOo)
		const _returnValueNGyA8VN = await _newVertexFVRZer.getNeighbors()
		const _returnValueoOTSsL7 = await _newVertexFVRZer.getKey()
		const _vertexP9hOBu1 = undefined;
		const _returnValueSbymYvb = await _newVertexFVRZer.hasNeighbor(_vertexP9hOBu1)
		const _returnValue2kLSUA = await _graphvNbMCE3.addVertex(_newVertexFVRZer)
		const _returnValuekoumXFK = await stronglyConnectedComponents(_graphvNbMCE3)
	});
})