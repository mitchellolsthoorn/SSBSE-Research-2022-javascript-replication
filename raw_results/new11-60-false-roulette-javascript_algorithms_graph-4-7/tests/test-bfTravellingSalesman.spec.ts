export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphyMBHUo = "a4hD9LPCy";
		const _returnValuehZYcxKG = await bfTravellingSalesman(_graphyMBHUo)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueQMx2sg = "2RwHkCfEzJFNQZcKFoIUyEJsHlXi9244rMN8bWlm8yYNiOSe3JpRphbKQIS2KkFCO85qgJVIpLKtxyxajuLNKmU";
		const _getAllVerticesPkZTQ1T = () => { return _returnValueQMx2sg };
		const _returnValuehZcusg = "r1JdjBiOAzTJT865HKC2V3UEEQaxjcatIv6GHKAcHlAtM299ezoT";
		const _getAdjacencyMatrixB1VzhG = () => { return _returnValuehZcusg };
		const _returnValuebYVYN36 = undefined;
		const _getVerticesIndicesSsJw7UE = () => { return _returnValuebYVYN36 };
		const _graphRDmergd = {
			"getAllVertices": _getAllVerticesPkZTQ1T,
		"getAdjacencyMatrix": _getAdjacencyMatrixB1VzhG,
		"getVerticesIndices": _getVerticesIndicesSsJw7UE
	}
		const _returnValuekEJLOtC = await bfTravellingSalesman(_graphRDmergd)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedXtcsbvt = false;
		const _graphRsyPlXW = new Graph(_isDirectedXtcsbvt)
		const _returnValueQ5X2id = await _graphRsyPlXW.getAllEdges()
		const _returnValueSOPNfOo = await _graphRsyPlXW.getVerticesIndices()
		const _returnValuedEHG6LQ = undefined;
		const _getKeyxHQIAo = () => { return _returnValuedEHG6LQ };
		const _newVertexl2UxOR4 = {
			"getKey": _getKeyxHQIAo
	}
		const _returnValuenqasTca = await _graphRsyPlXW.addVertex(_newVertexl2UxOR4)
		const _returnValueOShF4DB = false;
		const _getKeyrW1Qrsw = () => { return _returnValueOShF4DB };
		const _startVertexRmyOOvP = {
			"getKey": _getKeyrW1Qrsw
	}
		const _endVertexJMqJmQk = null;
		const _returnValuekui4qp = await _graphRsyPlXW.findEdge(_startVertexRmyOOvP, _endVertexJMqJmQk)
		const _returnValuehmoa7pV = await _graphRsyPlXW.reverse()
		const _returnValueiMqnD0v = await bfTravellingSalesman(_graphRsyPlXW)
	});
})