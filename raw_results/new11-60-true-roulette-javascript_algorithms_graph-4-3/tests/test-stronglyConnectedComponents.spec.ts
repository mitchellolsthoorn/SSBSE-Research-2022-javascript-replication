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
		const _graphJioOjtk = "pjeRb29TPWDhAzP19HG1acLf1ET2SAa78MQ4CiKxqjp5x";
		const _returnValuekepaWD = await stronglyConnectedComponents(_graphJioOjtk)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedjiOXKWe = false;
		const _graphYDIc8Lf = new Graph(_isDirectedjiOXKWe)
		const _returnValuecjf9PT = await _graphYDIc8Lf.getAllVertices()
		const _returnValuemjDXebW = await _graphYDIc8Lf.toString()
		const _returnValuekpvvdWq = await _graphYDIc8Lf.reverse()
		const _returnValueraW1TKz = await stronglyConnectedComponents(_graphYDIc8Lf)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedFRRakIx = true;
		const _graphTQ66xQX = new Graph(_isDirectedFRRakIx)
		const _valueldTE85w = null;
		const _newVertexCa3AA4 = new GraphVertex(_valueldTE85w)
		const _returnValueVtXehtF = await _newVertexCa3AA4.getNeighbors()
		const _returnValueqjoqwDz = await _newVertexCa3AA4.getKey()
		const _returnValueQJjmkHv = await _graphTQ66xQX.addVertex(_newVertexCa3AA4)
		const _vertexKeyQI9kjY4 = undefined;
		const _returnValuepfEbFVr = await _graphTQ66xQX.getVertexByKey(_vertexKeyQI9kjY4)
		const _returnValueR5VVjpw = await _graphTQ66xQX.getAllVertices()
		const _returnValueEgPYxaR = await stronglyConnectedComponents(_graphTQ66xQX)
	});
})