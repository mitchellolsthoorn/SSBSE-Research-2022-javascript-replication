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
		const _getVerticesIndicesKLTjMRs = undefined;
		const _returnValueIAdh8Ps = "VUuzpreiL98LsFVeu";
		const _getAdjacencyMatrixGsu0GmX = () => { return _returnValueIAdh8Ps };
		const _returnValuegMEEu4M = "5troGXXZAFk13TQ2WOB5M6gctDdei2EILw7a1inv8EMfFTf9ZWQDjHYrgjv1Y7ZJnhf";
		const _getAllVerticesh2HxtQO = () => { return _returnValuegMEEu4M };
		const _graphiSDxXfK = {
			"getVerticesIndices": _getVerticesIndicesKLTjMRs,
		"getAdjacencyMatrix": _getAdjacencyMatrixGsu0GmX,
		"getAllVertices": _getAllVerticesh2HxtQO
	}
		const _returnValueXJA0jz = await hamiltonianCycle(_graphiSDxXfK)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueiHmVujy = {
		
	}
		const _getVerticesIndicesIQxIHWU = () => { return _returnValueiHmVujy };
		const _returnValueYcE0xs = null;
		const _getAdjacencyMatrixScdKGIj = () => { return _returnValueYcE0xs };
		const _returnValueySL2d8M = 4.754508099949522;
		const _getAllVerticesVcbCvrB = () => { return _returnValueySL2d8M };
		const _grapht8ao0Vo = {
			"getVerticesIndices": _getVerticesIndicesIQxIHWU,
		"getAdjacencyMatrix": _getAdjacencyMatrixScdKGIj,
		"getAllVertices": _getAllVerticesVcbCvrB
	}
		const _returnValueWYhCg1M = await hamiltonianCycle(_grapht8ao0Vo)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirecteddHty6ba = true;
		const _graphgSHoqXR = new Graph(_isDirecteddHty6ba)
		const _returnValueDpzUYIA = await _graphgSHoqXR.getWeight()
		const _valuePjAp2nH = "QAhXmc";
		const _newVertexS5jtsDD = new GraphVertex(_valuePjAp2nH)
		const _edge6GHmDf = null;
		const _returnValueUpOU1do = await _newVertexS5jtsDD.deleteEdge(_edge6GHmDf)
		const _vertexizfzDcB = 1.5893578154607155;
		const _returnValueOvzjpQX = await _newVertexS5jtsDD.hasNeighbor(_vertexizfzDcB)
		const _returnValuea7mHDuK = await _newVertexS5jtsDD.getEdges()
		const _vertexoXcpZo = 6.696285170976147;
		const _returnValueNrIm6ga = await _newVertexS5jtsDD.hasNeighbor(_vertexoXcpZo)
		const _returnValueEfHOgS1 = await _graphgSHoqXR.addVertex(_newVertexS5jtsDD)
		const _returnValue8UDY71 = await _graphgSHoqXR.getWeight()
		const _returnValuemyn5Jlr = await hamiltonianCycle(_graphgSHoqXR)
	});
})