export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphuwUvI3J = "xJwxnagZ8l3T9AuJnjh49r2wK7DFY1hSjl";
		const _returnValueK8JDJSC = await bfTravellingSalesman(_graphuwUvI3J)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueWfCPWVI = false;
		const _getAllVerticesPTzgcz = () => { return _returnValueWfCPWVI };
		const _returnValuegxlZNS8 = "Itjxmk3Sm2JPuVOpySA3bnYjguqZqDBzYT2sjxdBdDyOMIg5PIKQqz";
		const _getAdjacencyMatrixIdzFj5J = () => { return _returnValuegxlZNS8 };
		const _returnValuevI0hNfw = {
		
	}
		const _getVerticesIndicesw0N18jz = () => { return _returnValuevI0hNfw };
		const _graphJkTwIL = {
			"getAllVertices": _getAllVerticesPTzgcz,
		"getAdjacencyMatrix": _getAdjacencyMatrixIdzFj5J,
		"getVerticesIndices": _getVerticesIndicesw0N18jz
	}
		const _returnValuemwZ7MX7 = await bfTravellingSalesman(_graphJkTwIL)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedAIe7cVe = false;
		const _graphwx8O6wE = new Graph(_isDirectedAIe7cVe)
		const _returnValueGwEPIim = true;
		const _getKeyNvZoK9 = () => { return _returnValueGwEPIim };
		const _newVertexpWrJSk = {
			"getKey": _getKeyNvZoK9
	}
		const _returnValueKmpxfnT = await _graphwx8O6wE.addVertex(_newVertexpWrJSk)
		const _returnValueIOUenAh = await bfTravellingSalesman(_graphwx8O6wE)
	});
})