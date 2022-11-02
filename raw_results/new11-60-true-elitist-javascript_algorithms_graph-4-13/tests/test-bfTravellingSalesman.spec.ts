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
		const _returnValueMFi6cIB = undefined;
		const _getAllVerticesx3y2dtq = () => { return _returnValueMFi6cIB };
		const _returnValueiWvxPfK = "RyBD3y0OVPwdqiiznfb5O0SKpOUJ2Qe3dnUITMpOKqxU6f8pEKWLCVlYnE";
		const _getAdjacencyMatrixZIwxewC = () => { return _returnValueiWvxPfK };
		const _returnValueNjHtc2t = {
		
	}
		const _getVerticesIndicesGYFb5dh = () => { return _returnValueNjHtc2t };
		const _graphiYYglUm = {
			"getAllVertices": _getAllVerticesx3y2dtq,
		"getAdjacencyMatrix": _getAdjacencyMatrixZIwxewC,
		"getVerticesIndices": _getVerticesIndicesGYFb5dh
	}
		const _returnValuelVg3SU0 = await bfTravellingSalesman(_graphiYYglUm)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuerTcKFWR = 0.6712934546442177;
		const _getAllVerticesUoMUw2T = () => { return _returnValuerTcKFWR };
		const _arrayValuedCryGUJ = null;
		const _arrayValuemKpXTsM = true;
		const _returnValuetzcRHvz = [_arrayValuedCryGUJ, _arrayValuemKpXTsM]
		const _getAdjacencyMatrixAixiAVi = () => { return _returnValuetzcRHvz };
		const _returnValuerwzcqxS = "alSVWjCeTRR44FzIQ7GMMQJ";
		const _getVerticesIndicesCfBjov = () => { return _returnValuerwzcqxS };
		const _graphBHrApm = {
			"getAllVertices": _getAllVerticesUoMUw2T,
		"getAdjacencyMatrix": _getAdjacencyMatrixAixiAVi,
		"getVerticesIndices": _getVerticesIndicesCfBjov
	}
		const _returnValueKTjJGWY = await bfTravellingSalesman(_graphBHrApm)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedDclUef = false;
		const _graphiCmYTy4 = new Graph(_isDirectedDclUef)
		const _arrayValueXfG5xEF = true;
		const _arrayValueLAZK4p = undefined;
		const _arrayValuerGxUi39 = "U29j16EVGZ4Q8Ms99mE";
		const _valueQebYUYw = [_arrayValueXfG5xEF, _arrayValueLAZK4p, _arrayValuerGxUi39]
		const _vertexfUH8vYC = new GraphVertex(_valueQebYUYw)
		const _returnValuexNodwKJ = await _vertexfUH8vYC.deleteAllEdges()
		const _returnValueGyJImfp = "FNTFCHJl9WHzetri3kTEwHmDFAJLUwE8uNR49AgpkR9b9H8v8xFWKxpLXHXIVW3LY3sTHG";
		const _callbackPbyZHkn = () => { return _returnValueGyJImfp };
		const _returnValuejlVtrcV = await _vertexfUH8vYC.toString(_callbackPbyZHkn)
		const _returnValueuvmj0gw = await _vertexfUH8vYC.getKey()
		const _returnValuenzPTbNQ = await _vertexfUH8vYC.deleteAllEdges()
		const _returnValuezzSAMJ = await _graphiCmYTy4.getNeighbors(_vertexfUH8vYC)
		const _valueGd3058 = false;
		const _vertexjGNntQA = new GraphVertex(_valueGd3058)
		const _vertexfPDpdky = -4.652510195176953;
		const _returnValueKKeAYGc = await _vertexjGNntQA.findEdge(_vertexfPDpdky)
		const _arrayValueOOZWvmZ = undefined;
		const _edgeEgPMGDd = [_arrayValueOOZWvmZ]
		const _returnValueq9eubLj = await _vertexjGNntQA.deleteEdge(_edgeEgPMGDd)
		const _returnValueuFF7sqM = await _graphiCmYTy4.getNeighbors(_vertexjGNntQA)
		const _returnValueXO35Fqt = 2.9880860624849976;
		const _valueWFzdEKt = () => { return _returnValueXO35Fqt };
		const _newVertexpQw7kH = new GraphVertex(_valueWFzdEKt)
		const _returnValueFCMu9rW = "8x94TaAAgZcnbNlCuSbzH6I4eVYwMI8PQV5Ct4GtcR9Ov4G2mARVAJPpxo6PrDwr8LpJ4jruoKwO";
		const _edgekh5pXsW = () => { return _returnValueFCMu9rW };
		const _returnValuez9Fiwh = await _newVertexpQw7kH.deleteEdge(_edgekh5pXsW)
		const _returnValueNxCYgyk = await _newVertexpQw7kH.getKey()
		const _returnValuevkaiOMZ = await _newVertexpQw7kH.getKey()
		const _returnValueM7yXm0Z = await _newVertexpQw7kH.getNeighbors()
		const _returnValueNkDzI3Y = await _graphiCmYTy4.addVertex(_newVertexpQw7kH)
		const _returnValuecgJs7h0 = await bfTravellingSalesman(_graphiCmYTy4)
	});
})