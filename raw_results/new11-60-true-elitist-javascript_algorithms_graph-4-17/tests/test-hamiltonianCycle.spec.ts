export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuehWqoI84 = true;
		const _getVerticesIndicesw4CiKKy = () => { return _returnValuehWqoI84 };
		const _returnValuePHMjnGy = false;
		const _getAdjacencyMatrixPgJnhLe = () => { return _returnValuePHMjnGy };
		const _returnValuew6ucaGh = false;
		const _getAllVerticesY7as67D = () => { return _returnValuew6ucaGh };
		const _graphBHARu8h = {
			"getVerticesIndices": _getVerticesIndicesw4CiKKy,
		"getAdjacencyMatrix": _getAdjacencyMatrixPgJnhLe,
		"getAllVertices": _getAllVerticesY7as67D
	}
		const _returnValueMjmz25x = await hamiltonianCycle(_graphBHARu8h)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedfnpdwYX = true;
		const _graphGmHn4sf = new Graph(_isDirectedfnpdwYX)
		const _valuexzMFC1z = {
		
	}
		const _newVertexjaMXBmG = new GraphVertex(_valuexzMFC1z)
		const _returnValuekc0nvq2 = await _newVertexjaMXBmG.getDegree()
		const _returnValueD8cuqlH = await _newVertexjaMXBmG.deleteAllEdges()
		const _edgeZQVf5WN = null;
		const _returnValuePe8AUC = await _newVertexjaMXBmG.deleteEdge(_edgeZQVf5WN)
		const _returnValuezsNI9q = await _graphGmHn4sf.addVertex(_newVertexjaMXBmG)
		const _returnValueNoAKj1 = await _graphGmHn4sf.getAdjacencyMatrix()
		const _returnValuesgPIDOv = await _graphGmHn4sf.getAllVertices()
		const _returnValueOcQIYzJ = await hamiltonianCycle(_graphGmHn4sf)
	});
})