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
		const _graphnWfQRFj = true;
		const _returnValuecHfU0P = await bfTravellingSalesman(_graphnWfQRFj)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuedKknrIh = false;
		const _getAllVerticesifDoAXT = () => { return _returnValuedKknrIh };
		const _returnValueyHJXllZ = {
		
	}
		const _getAdjacencyMatrixHEo1c1R = () => { return _returnValueyHJXllZ };
		const _returnValueAqenf6b = "BRS74aDKzeQDi87WLfIetEePKr4ejwXElkWXefHYXvh4QZoQlxFGb4EfCetH8eoOho4vUU6FcuUMRt0X2bf";
		const _getVerticesIndicesJiINuUK = () => { return _returnValueAqenf6b };
		const _graphD9G8NgP = {
			"getAllVertices": _getAllVerticesifDoAXT,
		"getAdjacencyMatrix": _getAdjacencyMatrixHEo1c1R,
		"getVerticesIndices": _getVerticesIndicesJiINuUK
	}
		const _returnValueap50Jo = await bfTravellingSalesman(_graphD9G8NgP)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedRdlLT2n = true;
		const _graphcGlP40N = new Graph(_isDirectedRdlLT2n)
		const _returnValuebsKM4gZ = undefined;
		const _returnValueUgSxRzY = () => { return _returnValuebsKM4gZ };
		const _getKeyeSOujo6 = () => { return _returnValueUgSxRzY };
		const _newVertexEJqbI1K = {
			"getKey": _getKeyeSOujo6
	}
		const _returnValuetGvOj6 = await _graphcGlP40N.addVertex(_newVertexEJqbI1K)
		const _returnValueRqa93aA = await _graphcGlP40N.toString()
		const _vertexKeyVuHU3IQ = undefined;
		const _returnValueYFOmKqV = await _graphcGlP40N.getVertexByKey(_vertexKeyVuHU3IQ)
		const _returnValueGf2kZwz = await _graphcGlP40N.getVerticesIndices()
		const _returnValueX71ZheX = await bfTravellingSalesman(_graphcGlP40N)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedZgL44ts = false;
		const _graphP1GOw4P = new Graph(_isDirectedZgL44ts)
		const _returnValuedfE5S27 = await _graphP1GOw4P.getAllVertices()
		const _returnValuePTqIzpy = await _graphP1GOw4P.getVerticesIndices()
		const _valueyvC0eGu = 8.250633492754602;
		const _newVertexeY1GOLY = new GraphVertex(_valueyvC0eGu)
		const _requiredEdgewoQ45y4 = "szNpGTszKfPf0L1ZpLmXG8GO88ms6VlL2X";
		const _returnValueE1PzGnv = await _newVertexeY1GOLY.hasEdge(_requiredEdgewoQ45y4)
		const _returnValueDz3YHfd = await _newVertexeY1GOLY.getDegree()
		const _returnValuea0Ec3u = undefined;
		const _vertexjkgoEJd = () => { return _returnValuea0Ec3u };
		const _returnValueRpYysuZ = await _newVertexeY1GOLY.findEdge(_vertexjkgoEJd)
		const _requiredEdgenGwEuOC = -5.725009285749769;
		const _returnValueSl8sDd = await _newVertexeY1GOLY.hasEdge(_requiredEdgenGwEuOC)
		const _returnValuevDBfQDt = await _graphP1GOw4P.addVertex(_newVertexeY1GOLY)
		const _returnValueIfVz6K4 = await _graphP1GOw4P.getAdjacencyMatrix()
		const _returnValueoUDzakg = await bfTravellingSalesman(_graphP1GOw4P)
	});
})