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
		const _returnValuelgqOYQC = -0.0886329316796548;
		const _getVerticesIndicesTmcoPd = () => { return _returnValuelgqOYQC };
		const _returnValueZnrSaqI = "mgrMjc1qyL07Ekmxhtj5WAJufKybtUSSi";
		const _returnValueyUmwnca = () => { return _returnValueZnrSaqI };
		const _getAdjacencyMatrixncVSCGU = () => { return _returnValueyUmwnca };
		const _returnValueZqBLwgJ = undefined;
		const _getAllVerticesVRlJTQ = () => { return _returnValueZqBLwgJ };
		const _graphrlOjeM = {
			"getVerticesIndices": _getVerticesIndicesTmcoPd,
		"getAdjacencyMatrix": _getAdjacencyMatrixncVSCGU,
		"getAllVertices": _getAllVerticesVRlJTQ
	}
		const _returnValuerPzPNS5 = await hamiltonianCycle(_graphrlOjeM)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueYEOjEiJ = -4.624504256957574;
		const _getVerticesIndicesXebNxHA = () => { return _returnValueYEOjEiJ };
		const _returnValueW4Ko8l0 = undefined;
		const _returnValue5dqUYz = () => { return _returnValueW4Ko8l0 };
		const _getAdjacencyMatrixj1uOYH6 = () => { return _returnValue5dqUYz };
		const _returnValuePLFOKjf = 1.4976293458422134;
		const _getAllVerticesJhMZIXx = () => { return _returnValuePLFOKjf };
		const _graphSiSTR5C = {
			"getVerticesIndices": _getVerticesIndicesXebNxHA,
		"getAdjacencyMatrix": _getAdjacencyMatrixj1uOYH6,
		"getAllVertices": _getAllVerticesJhMZIXx
	}
		const _returnValueZZxB5au = await hamiltonianCycle(_graphSiSTR5C)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedlZsGS6m = false;
		const _graphemPsvQ7 = new Graph(_isDirectedlZsGS6m)
		const _returnValueVDhkTVH = await _graphemPsvQ7.getAllEdges()
		const _valuedUBOcHE = true;
		const _newVertexFCnD6Hy = new GraphVertex(_valuedUBOcHE)
		const _returnValueNEjqTBO = await _newVertexFCnD6Hy.getEdges()
		const _returnValueRLIXZEn = await _graphemPsvQ7.addVertex(_newVertexFCnD6Hy)
		const _returnValuedl1id1w = await hamiltonianCycle(_graphemPsvQ7)
	});
})