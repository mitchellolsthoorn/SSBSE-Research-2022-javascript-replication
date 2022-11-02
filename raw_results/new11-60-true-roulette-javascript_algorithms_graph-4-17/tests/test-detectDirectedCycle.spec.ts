export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _getAllVerticesP4rG8E = undefined;
		const _graphDs799b = {
			"getAllVertices": _getAllVerticesP4rG8E
	}
		const _returnValueYopK4C = await detectDirectedCycle(_graphDs799b)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirecteddzV4qv = false;
		const _graphNlxToM = new Graph(_isDirecteddzV4qv)
		const _returnValueSo9B6PM = await _graphNlxToM.reverse()
		const _returnValuehpU6iMS = await _graphNlxToM.getWeight()
		const _vertexKeyWTGcSuC = "GAOL7hr9wIa20pslgRA6X";
		const _returnValueSt8mvUJ = await _graphNlxToM.getVertexByKey(_vertexKeyWTGcSuC)
		const _returnValueOug5cce = await detectDirectedCycle(_graphNlxToM)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedi5RJemv = true;
		const _graphrVYrGot = new Graph(_isDirectedi5RJemv)
		const _valueNrOog30 = "skghobz5V6dLMPiC8j73UQBSJxE0JPlXiTDwIPjgXJCT5Uub88DuoY3afC6hCGKwVQvhicS9aRJAF2U6r4ZSaadnneWwIK";
		const _newVertexqUx0Wi8 = new GraphVertex(_valueNrOog30)
		const _vertexPtDbE4 = 9.75275671063256;
		const _returnValueGPq7hsU = await _newVertexqUx0Wi8.findEdge(_vertexPtDbE4)
		const _requiredEdgexPKKmD = true;
		const _returnValueiJ9Aob = await _newVertexqUx0Wi8.hasEdge(_requiredEdgexPKKmD)
		const _returnValueOzZ3V4T = await _newVertexqUx0Wi8.getDegree()
		const _returnValuegBFiMON = await _newVertexqUx0Wi8.getEdges()
		const _returnValuerWlU1kD = await _newVertexqUx0Wi8.getEdges()
		const _returnValueONS4JnW = await _graphrVYrGot.addVertex(_newVertexqUx0Wi8)
		const _returnValuejHhQIyM = await detectDirectedCycle(_graphrVYrGot)
	});
})