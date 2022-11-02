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
		const _getVerticesIndicestAjaEyC = null;
		const _arrayValueBeq1TsR = {
		
	}
		const _arrayValueN90PNEb = 1.3293549437593466;
		const _arrayValueEs0TQkk = undefined;
		const _arrayValueN1ZCv2L = "36C4IRlTwzxii8TNUQKcxW2lJEGiwrqSsKWcZfQXn1I3jBbsTW1dPfY1u2wPxRNgIAE7Sm32fc2CQgPub4a9XtCvlqpE2f63";
		const _returnValueTwDCP7X = [_arrayValueBeq1TsR, _arrayValueN90PNEb, _arrayValueEs0TQkk, _arrayValueN1ZCv2L]
		const _getAdjacencyMatrixz6EJcYV = () => { return _returnValueTwDCP7X };
		const _returnValueiD6K8NE = true;
		const _getAllVerticesDReeKIL = () => { return _returnValueiD6K8NE };
		const _graphTdM7GsV = {
			"getVerticesIndices": _getVerticesIndicestAjaEyC,
		"getAdjacencyMatrix": _getAdjacencyMatrixz6EJcYV,
		"getAllVertices": _getAllVerticesDReeKIL
	}
		const _returnValueOQsiHB3 = await hamiltonianCycle(_graphTdM7GsV)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuebVzqaTR = true;
		const _getVerticesIndicesFfh2Tdm = () => { return _returnValuebVzqaTR };
		const _returnValued9nNFHD = "4Hx5ChbsMfaGw64w99Npuy7B2SX4";
		const _getAdjacencyMatrixaUYAZz = () => { return _returnValued9nNFHD };
		const _returnValueePWTekg = "CUCqiC";
		const _getAllVerticestzljcOn = () => { return _returnValueePWTekg };
		const _graphKpbQ7M0 = {
			"getVerticesIndices": _getVerticesIndicesFfh2Tdm,
		"getAdjacencyMatrix": _getAdjacencyMatrixaUYAZz,
		"getAllVertices": _getAllVerticestzljcOn
	}
		const _returnValueNRhclFV = await hamiltonianCycle(_graphKpbQ7M0)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedpWbv5GM = true;
		const _graphYfbnKMv = new Graph(_isDirectedpWbv5GM)
		const _valuejqrf5P = 3.8324652092947495;
		const _newVertexIaoXg9U = new GraphVertex(_valuejqrf5P)
		const _returnValuebxopBo1 = await _newVertexIaoXg9U.getNeighbors()
		const _requiredEdgeHHFeoU = null;
		const _returnValuelEIgMsz = await _newVertexIaoXg9U.hasEdge(_requiredEdgeHHFeoU)
		const _returnValuefvWowq2 = await _newVertexIaoXg9U.deleteAllEdges()
		const _returnValuevDmuUaj = await _newVertexIaoXg9U.getDegree()
		const _returnValueFhE4AJP = await _graphYfbnKMv.addVertex(_newVertexIaoXg9U)
		const _returnValue2GPbeS = await _graphYfbnKMv.getWeight()
		const _returnValueKW7WhA8 = await hamiltonianCycle(_graphYfbnKMv)
	});
})