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
		const _returnValuetw6eQq8 = 8.798192339315339;
		const _getAllVerticesDZmh9lB = () => { return _returnValuetw6eQq8 };
		const _returnValuefnKpfHu = null;
		const _getAdjacencyMatrixsS7WYP = () => { return _returnValuefnKpfHu };
		const _returnValueZDj2eHg = true;
		const _getVerticesIndicesVoiQsJ7 = () => { return _returnValueZDj2eHg };
		const _graphOm8F9TC = {
			"getAllVertices": _getAllVerticesDZmh9lB,
		"getAdjacencyMatrix": _getAdjacencyMatrixsS7WYP,
		"getVerticesIndices": _getVerticesIndicesVoiQsJ7
	}
		const _returnValuevP9Bd3q = await bfTravellingSalesman(_graphOm8F9TC)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedNJdBV0j = false;
		const _graphREgq9Ux = new Graph(_isDirectedNJdBV0j)
		const _returnValueAbG3FRX = await _graphREgq9Ux.getAllVertices()
		const _returnValuecJmapH9 = await _graphREgq9Ux.reverse()
		const _returnValuebieDF8 = "DwofnozlJCdMwHzMtY7FjRR2c2rXxWztsRFp";
		const _getKeyEx0rj1W = () => { return _returnValuebieDF8 };
		const _newVertexKWpN99l = {
			"getKey": _getKeyEx0rj1W
	}
		const _returnValueP7f2qJX = await _graphREgq9Ux.addVertex(_newVertexKWpN99l)
		const _returnValue3wF6sF = await bfTravellingSalesman(_graphREgq9Ux)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectediFKNJfm = true;
		const _graphQrmodlD = new Graph(_isDirectediFKNJfm)
		const _vertexKeyRj6vcfz = 3.332810011457962;
		const _returnValueKrjPB3J = await _graphQrmodlD.getVertexByKey(_vertexKeyRj6vcfz)
		const _returnValueQYURDb = await _graphQrmodlD.reverse()
		const _returnValuePXyU85 = await _graphQrmodlD.getVerticesIndices()
		const _valuelCGhHaJ = "VslgWG7nryRpEVfUt5YzUA4vTuxFQmEfYaUP64xeInD5pzzYd8klqZ82TDuBO";
		const _newVertexWOzbIWq = new GraphVertex(_valuelCGhHaJ)
		const _requiredEdge4MiD5z = null;
		const _returnValueI1b070S = await _newVertexWOzbIWq.hasEdge(_requiredEdge4MiD5z)
		const _returnValuevNPOHTA = await _newVertexWOzbIWq.getDegree()
		const _vertexvW9d9Hj = null;
		const _returnValueBL3aKiE = await _newVertexWOzbIWq.hasNeighbor(_vertexvW9d9Hj)
		const _returnValueSlDbfrx = await _newVertexWOzbIWq.getKey()
		const _returnValuek4istP0 = await _newVertexWOzbIWq.getNeighbors()
		const _returnValueHfFZxDz = await _graphQrmodlD.addVertex(_newVertexWOzbIWq)
		const _returnValueVSPvxt8 = await _graphQrmodlD.getWeight()
		const _returnValueT8KOS6 = await bfTravellingSalesman(_graphQrmodlD)
	});
})