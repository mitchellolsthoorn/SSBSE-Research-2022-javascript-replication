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
		const _getAllVerticese3YwoMY = undefined;
		const _returnValuelr3IyPb = null;
		const _getAdjacencyMatrixIBcijSE = () => { return _returnValuelr3IyPb };
		const _returnValuecMuysj4 = undefined;
		const _getVerticesIndicesz6gr3Af = () => { return _returnValuecMuysj4 };
		const _graphIZHEcC = {
			"getAllVertices": _getAllVerticese3YwoMY,
		"getAdjacencyMatrix": _getAdjacencyMatrixIBcijSE,
		"getVerticesIndices": _getVerticesIndicesz6gr3Af
	}
		const _returnValue83vDL4 = await bfTravellingSalesman(_graphIZHEcC)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValueqMz8qaj = "AkqmYGGUxcEkFMV7cNheTlf8CoqrkniNZBjF1nsHPULYWo2naQG";
		const _returnValueO7ekjr6 = [_arrayValueqMz8qaj]
		const _getAllVerticesiuyCEGg = () => { return _returnValueO7ekjr6 };
		const _arrayValueM21LbcJ = null;
		const _arrayValue7B2JPS = undefined;
		const _getAdjacencyMatrixBh02SV6 = [_arrayValueM21LbcJ, _arrayValue7B2JPS]
		const _returnValueXJmAz1R = undefined;
		const _getVerticesIndicese4CcCVL = () => { return _returnValueXJmAz1R };
		const _graphqYL4mfs = {
			"getAllVertices": _getAllVerticesiuyCEGg,
		"getAdjacencyMatrix": _getAdjacencyMatrixBh02SV6,
		"getVerticesIndices": _getVerticesIndicese4CcCVL
	}
		const _returnValueY2439Nv = await bfTravellingSalesman(_graphqYL4mfs)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedwwZnDeV = true;
		const _graphhlsgFo0 = new Graph(_isDirectedwwZnDeV)
		const _returnValueuo1yn3I = await _graphhlsgFo0.getVerticesIndices()
		const _returnValueb9DmkBJ = -7.428883775423997;
		const _getNeighborsy26VCI0 = () => { return _returnValueb9DmkBJ };
		const _vertexmRVbp5h = {
			"getNeighbors": _getNeighborsy26VCI0
	}
		const _returnValueMkXNhGF = await _graphhlsgFo0.getNeighbors(_vertexmRVbp5h)
		const _returnValueo4zZz4s = false;
		const _getKeyU22vjHX = () => { return _returnValueo4zZz4s };
		const _newVertexCzoPG0a = {
			"getKey": _getKeyU22vjHX
	}
		const _returnValuebaLBbNR = await _graphhlsgFo0.addVertex(_newVertexCzoPG0a)
		const _returnValuei8HvZ7x = await bfTravellingSalesman(_graphhlsgFo0)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedXg8A15p = false;
		const _graphkzjiLfp = new Graph(_isDirectedXg8A15p)
		const _returnValueaYnRn6a = await _graphkzjiLfp.getAdjacencyMatrix()
		const _vertexKeytwRbxXJ = undefined;
		const _returnValueb3jHd9C = await _graphkzjiLfp.getVertexByKey(_vertexKeytwRbxXJ)
		const _valueY7kbHNR = false;
		const _newVertexssvL4lE = new GraphVertex(_valueY7kbHNR)
		const _requiredEdgeaYjvBg7 = -0.8606564561373187;
		const _returnValueGQ9na41 = await _newVertexssvL4lE.hasEdge(_requiredEdgeaYjvBg7)
		const _requiredEdgeaOBZwMF = false;
		const _returnValueGaBZsrf = await _newVertexssvL4lE.hasEdge(_requiredEdgeaOBZwMF)
		const _returnValueHYdHQcz = await _graphkzjiLfp.addVertex(_newVertexssvL4lE)
		const _returnValuePL1mol = await bfTravellingSalesman(_graphkzjiLfp)
	});
})