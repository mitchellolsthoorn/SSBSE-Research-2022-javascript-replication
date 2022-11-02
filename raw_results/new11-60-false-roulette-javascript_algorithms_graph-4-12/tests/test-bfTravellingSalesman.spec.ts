export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueYzG2VFp = null;
		const _getAllVerticesEvpgpTU = () => { return _returnValueYzG2VFp };
		const _returnValueiZl9hP = {
		
	}
		const _getAdjacencyMatrixC2JryQD = () => { return _returnValueiZl9hP };
		const _returnValueEva4cr1 = "XncKr6tmsS82iFROE7Fvjv4UqFkt5PM8PVel9724w3kvh4tfnSyoB53C8b7LhlK3woKTKtIL";
		const _getVerticesIndicesVtlogrr = () => { return _returnValueEva4cr1 };
		const _graphER472i = {
			"getAllVertices": _getAllVerticesEvpgpTU,
		"getAdjacencyMatrix": _getAdjacencyMatrixC2JryQD,
		"getVerticesIndices": _getVerticesIndicesVtlogrr
	}
		const _returnValueUXjlzI3 = await bfTravellingSalesman(_graphER472i)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueLpsblua = "oCdIxtuSJ3REpGLEhffHLLme1dZqcMj7QmVp8KALflc3eV8WuwJyS3AAJPmAFymvRlDfYCRB4ebsssE8T";
		const _getAllVerticesfBC5bLB = () => { return _returnValueLpsblua };
		const _returnValuea0HKqbM = "vUdatbaLbyw84aK0UP";
		const _getAdjacencyMatrixz24MQ4S = () => { return _returnValuea0HKqbM };
		const _returnValuefkgHtXX = -4.406291329309076;
		const _getVerticesIndicesYFtaEuC = () => { return _returnValuefkgHtXX };
		const _graphVCKSYeD = {
			"getAllVertices": _getAllVerticesfBC5bLB,
		"getAdjacencyMatrix": _getAdjacencyMatrixz24MQ4S,
		"getVerticesIndices": _getVerticesIndicesYFtaEuC
	}
		const _returnValueTkIzNGY = await bfTravellingSalesman(_graphVCKSYeD)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedqdLhGno = false;
		const _graphv9UWNay = new Graph(_isDirectedqdLhGno)
		const _arrayValuek2ynzS = null;
		const _returnValueQG9ImvK = [_arrayValuek2ynzS]
		const _getKeybmRRwfJ = () => { return _returnValueQG9ImvK };
		const _newVertex4oNlQh = {
			"getKey": _getKeybmRRwfJ
	}
		const _returnValuez1XkH8m = await _graphv9UWNay.addVertex(_newVertex4oNlQh)
		const _returnValuetiLlL9V = true;
		const _getKeypa9j274 = () => { return _returnValuetiLlL9V };
		const _newVertexO4mLji = {
			"getKey": _getKeypa9j274
	}
		const _returnValuelL8G4tC = await _graphv9UWNay.addVertex(_newVertexO4mLji)
		const _returnValueFtGUvQ = await _graphv9UWNay.getAllVertices()
		const _returnValueS1IITao = await _graphv9UWNay.reverse()
		const _returnValueNQ7eGcN = await bfTravellingSalesman(_graphv9UWNay)
	});
})