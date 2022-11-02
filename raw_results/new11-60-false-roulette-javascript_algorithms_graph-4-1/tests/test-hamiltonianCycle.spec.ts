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
		const _returnValuet8egVng = false;
		const _getVerticesIndicesCyFmaxx = () => { return _returnValuet8egVng };
		const _returnValueNR10Aeq = true;
		const _getAdjacencyMatrixu7bKIs = () => { return _returnValueNR10Aeq };
		const _returnValuevEmHWf = {
		
	}
		const _getAllVerticeszD6Rdhn = () => { return _returnValuevEmHWf };
		const _graphf3NZ3E3 = {
			"getVerticesIndices": _getVerticesIndicesCyFmaxx,
		"getAdjacencyMatrix": _getAdjacencyMatrixu7bKIs,
		"getAllVertices": _getAllVerticeszD6Rdhn
	}
		const _returnValuexWQYjPG = await hamiltonianCycle(_graphf3NZ3E3)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedCdpiA1L = false;
		const _graphhKUKXlZ = new Graph(_isDirectedCdpiA1L)
		const _valueMEBKXRL = null;
		const _newVertexNugE4l = new GraphVertex(_valueMEBKXRL)
		const _returnValuelcZywAl = await _newVertexNugE4l.getKey()
		const _returnValuesgwssfU = await _newVertexNugE4l.getKey()
		const _returnValueDIFwBBm = await _newVertexNugE4l.deleteAllEdges()
		const _returnValueuq7iDF7 = await _newVertexNugE4l.getNeighbors()
		const _returnValuegXMjdqq = await _newVertexNugE4l.getNeighbors()
		const _returnValueIMkRpL = await _graphhKUKXlZ.addVertex(_newVertexNugE4l)
		const _returnValueVnXv5gD = await _graphhKUKXlZ.reverse()
		const _returnValueYqLw4XT = await _graphhKUKXlZ.toString()
		const _returnValueT9MRKr = await hamiltonianCycle(_graphhKUKXlZ)
	});
})