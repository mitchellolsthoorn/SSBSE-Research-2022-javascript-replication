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
		const _arrayValueVfO3xx = "UEw2c";
		const _arrayValueMbkoiCm = undefined;
		const _returnValueck7i98c = [_arrayValueVfO3xx, _arrayValueMbkoiCm]
		const _getAllVerticesnGbTKXb = () => { return _returnValueck7i98c };
		const _arrayValueCV17pco = undefined;
		const _returnValueeGOs2Ty = [_arrayValueCV17pco]
		const _getAdjacencyMatrixQRLVVBi = () => { return _returnValueeGOs2Ty };
		const _returnValuec4Ag32c = -7.8911344223222395;
		const _getVerticesIndicesN8IQIyx = () => { return _returnValuec4Ag32c };
		const _graphuxkDFoO = {
			"getAllVertices": _getAllVerticesnGbTKXb,
		"getAdjacencyMatrix": _getAdjacencyMatrixQRLVVBi,
		"getVerticesIndices": _getVerticesIndicesN8IQIyx
	}
		const _returnValueje9KDqP = await bfTravellingSalesman(_graphuxkDFoO)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedbWVuAO = true;
		const _graphuExYKCd = new Graph(_isDirectedbWVuAO)
		const _returnValueLpoGzdR = await _graphuExYKCd.toString()
		const _vertexKeyJt4xCzt = "zrXtMOX6RTCvvc45bqb2fEh3AuqP6GI3nBQHvT6CSrzjkSpt1vRruKYWT8Q8fB9V60cHBR15kI7xWHnECUE6nE5AcPSJO4WKlf";
		const _returnValuebYVxRap = await _graphuExYKCd.getVertexByKey(_vertexKeyJt4xCzt)
		const _returnValuempT2mj = await _graphuExYKCd.getAllEdges()
		const _returnValueDOg0Ca4 = undefined;
		const _getKeym48671e = () => { return _returnValueDOg0Ca4 };
		const _newVertexl3V5rR = {
			"getKey": _getKeym48671e
	}
		const _returnValueBYUiTNg = await _graphuExYKCd.addVertex(_newVertexl3V5rR)
		const _returnValuezLud87u = await _graphuExYKCd.getVerticesIndices()
		const _returnValuev90l6xh = await bfTravellingSalesman(_graphuExYKCd)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedQg9UlP7 = false;
		const _graphTwFMzSM = new Graph(_isDirectedQg9UlP7)
		const _valueBrOG8tB = {
		
	}
		const _newVertexG2ytr8y = new GraphVertex(_valueBrOG8tB)
		const _returnValuecvmDj6p = await _newVertexG2ytr8y.getEdges()
		const _returnValuezbyNwXh = await _newVertexG2ytr8y.deleteAllEdges()
		const _returnValueFQFHrRe = await _graphTwFMzSM.addVertex(_newVertexG2ytr8y)
		const _returnValuevifKbrL = await _graphTwFMzSM.getAllVertices()
		const _returnValuecHEfqiF = await bfTravellingSalesman(_graphTwFMzSM)
	});
})