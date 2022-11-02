export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueO4zmdX = undefined;
		const _returnValueJxcO7LY = [_arrayValueO4zmdX]
		const _getAllVerticesC8OoGVU = () => { return _returnValueJxcO7LY };
		const _returnValuey6zS56O = undefined;
		const _getAdjacencyMatrixYMaGguB = () => { return _returnValuey6zS56O };
		const _returnValueRkQ3aKR = true;
		const _getVerticesIndicesuIxKI81 = () => { return _returnValueRkQ3aKR };
		const _graphEh2N4kF = {
			"getAllVertices": _getAllVerticesC8OoGVU,
		"getAdjacencyMatrix": _getAdjacencyMatrixYMaGguB,
		"getVerticesIndices": _getVerticesIndicesuIxKI81
	}
		const _returnValueNBg3zS = await bfTravellingSalesman(_graphEh2N4kF)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuexB1sZ2k = null;
		const _isDirectedmcSOTWf = () => { return _returnValuexB1sZ2k };
		const _graphNSfp2S = new Graph(_isDirectedmcSOTWf)
		const _returnValueoY0wiNs = await _graphNSfp2S.reverse()
		const _returnValueYvOWY44 = await _graphNSfp2S.getAdjacencyMatrix()
		const _valuelzTAE6g = false;
		const _newVertexO3upBvd = new GraphVertex(_valuelzTAE6g)
		const _returnValueZy4Orl = await _newVertexO3upBvd.getDegree()
		const _vertexl7pFxdc = 1.509822086385288;
		const _returnValueW9DbsrW = await _newVertexO3upBvd.hasNeighbor(_vertexl7pFxdc)
		const _returnValuePWleh5n = {
		
	}
		const _callbackS5H6aTe = () => { return _returnValuePWleh5n };
		const _returnValueSAoLCIJ = await _newVertexO3upBvd.toString(_callbackS5H6aTe)
		const _vertexgFQyIbd = -8.02993984970398;
		const _returnValuecvQ3HlB = await _newVertexO3upBvd.findEdge(_vertexgFQyIbd)
		const _returnValueR3btzn = await _graphNSfp2S.addVertex(_newVertexO3upBvd)
		const _returnValueXc0856j = await bfTravellingSalesman(_graphNSfp2S)
	});
})