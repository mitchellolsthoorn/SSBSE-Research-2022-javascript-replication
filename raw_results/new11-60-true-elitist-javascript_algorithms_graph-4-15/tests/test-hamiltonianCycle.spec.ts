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
		const _returnValuewHUP9Oh = undefined;
		const _graphbbODDoR = () => { return _returnValuewHUP9Oh };
		const _returnValueWSStAkw = await hamiltonianCycle(_graphbbODDoR)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuei7YdD1f = "F6sqjJvSKX8eIGO6Tqx6a7WEMMuLC3nv5XPuCse1LrSxOKbImMYQyKWvM3DNbNGtlp1RagnpyJDJDO2jiBNXxKBPbljWLFtK";
		const _getVerticesIndicesOJNYrGo = () => { return _returnValuei7YdD1f };
		const _returnValueVu8uiVg = undefined;
		const _getAdjacencyMatrixarVwFgM = () => { return _returnValueVu8uiVg };
		const _returnValueaR7L5Oe = false;
		const _getAllVerticeskjeVTHH = () => { return _returnValueaR7L5Oe };
		const _graphxCeGEKn = {
			"getVerticesIndices": _getVerticesIndicesOJNYrGo,
		"getAdjacencyMatrix": _getAdjacencyMatrixarVwFgM,
		"getAllVertices": _getAllVerticeskjeVTHH
	}
		const _returnValueu0s30sl = await hamiltonianCycle(_graphxCeGEKn)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedxGKcQLX = true;
		const _graphc9Gifs8 = new Graph(_isDirectedxGKcQLX)
		const _valueH4uWVMi = null;
		const _newVertexJQXNtO8 = new GraphVertex(_valueH4uWVMi)
		const _vertexIkuQwl = []
		const _returnValuenAr5wh8 = await _newVertexJQXNtO8.hasNeighbor(_vertexIkuQwl)
		const _returnValueuRMtLAa = await _graphc9Gifs8.addVertex(_newVertexJQXNtO8)
		const _returnValueBmS6xJ8 = await hamiltonianCycle(_graphc9Gifs8)
	});
})