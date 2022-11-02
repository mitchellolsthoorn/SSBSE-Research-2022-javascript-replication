export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueIIoXfAE = undefined;
		const _getAllVerticeshu9y7M4 = () => { return _returnValueIIoXfAE };
		const _returnValuehddUyoF = 7.968239120580183;
		const _getAdjacencyMatrixUMTPWNG = () => { return _returnValuehddUyoF };
		const _getVerticesIndicesFWK2kME = true;
		const _graphsWxs5w1 = {
			"getAllVertices": _getAllVerticeshu9y7M4,
		"getAdjacencyMatrix": _getAdjacencyMatrixUMTPWNG,
		"getVerticesIndices": _getVerticesIndicesFWK2kME
	}
		const _returnValuePiZAg9i = await bfTravellingSalesman(_graphsWxs5w1)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuemqammc = 4.3948310246438265;
		const _getAllVerticesp535u1k = () => { return _returnValuemqammc };
		const _returnValue3C2nSs = null;
		const _getAdjacencyMatrixI6ImLEz = () => { return _returnValue3C2nSs };
		const _returnValuePcUq6ER = null;
		const _getVerticesIndicesNsVHzHs = () => { return _returnValuePcUq6ER };
		const _graphoVM1jCp = {
			"getAllVertices": _getAllVerticesp535u1k,
		"getAdjacencyMatrix": _getAdjacencyMatrixI6ImLEz,
		"getVerticesIndices": _getVerticesIndicesNsVHzHs
	}
		const _returnValueM1k5n9F = await bfTravellingSalesman(_graphoVM1jCp)
	});
})