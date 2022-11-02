export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuehQ1b80 = -0.3667434368665994;
		const _getAllVerticesJPCL0A2 = () => { return _returnValuehQ1b80 };
		const _returnValuehThSn9 = "A2bv5jGGyXzgkuRxn1cHydhBYD0F9LNPGcW2Rh";
		const _returnValueahIdZE2 = () => { return _returnValuehThSn9 };
		const _getVertexByKeyBQqRHpy = () => { return _returnValueahIdZE2 };
		const _returnValueqzO6uz = null;
		const _getNeighborswBkTB2c = () => { return _returnValueqzO6uz };
		const _returnValueGP1Tgqo = false;
		const _findEdgewrAuxvG = () => { return _returnValueGP1Tgqo };
		const _graphRWF7sdQ = {
			"getAllVertices": _getAllVerticesJPCL0A2,
		"getVertexByKey": _getVertexByKeyBQqRHpy,
		"getNeighbors": _getNeighborswBkTB2c,
		"findEdge": _findEdgewrAuxvG
	}
		const _returnValuei4wLuTJ = 8.827289448970351;
		const _getKeyd5t1qmQ = () => { return _returnValuei4wLuTJ };
		const _startVertexo4cEeh3 = {
			"getKey": _getKeyd5t1qmQ
	}
		const _returnValuevS0mDlF = await bellmanFord(_graphRWF7sdQ, _startVertexo4cEeh3)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedigBAsUU = true;
		const _graphXrJjSDi = new Graph(_isDirectedigBAsUU)
		const _returnValueHni7rR0 = null;
		const _getNeighborss6utwx2 = () => { return _returnValueHni7rR0 };
		const _vertexsqpDLN = {
			"getNeighbors": _getNeighborss6utwx2
	}
		const _returnValueHh0MzHb = await _graphXrJjSDi.getNeighbors(_vertexsqpDLN)
		const _returnValueaSEaMzC = await _graphXrJjSDi.toString()
		const _returnValuejFvJAbW = "lXZtWWhWaOqvkbadO3QWRe";
		const _getNeighborskarXwd = () => { return _returnValuejFvJAbW };
		const _vertexBTDwqkQ = {
			"getNeighbors": _getNeighborskarXwd
	}
		const _returnValueMzstO0 = await _graphXrJjSDi.getNeighbors(_vertexBTDwqkQ)
		const _returnValuehvDVOsg = await _graphXrJjSDi.getAllVertices()
		const _returnValuehcUMyGX = await _graphXrJjSDi.getAdjacencyMatrix()
		const _returnValueJOXkAvq = false;
		const _getKeyJZ19PM = () => { return _returnValueJOXkAvq };
		const _startVertexLRWwKZ = {
			"getKey": _getKeyJZ19PM
	}
		const _returnValueqohwlRU = await bellmanFord(_graphXrJjSDi, _startVertexLRWwKZ)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedaNEZ8Nj = false;
		const _graphRbnWA2r = new Graph(_isDirectedaNEZ8Nj)
		const _returnValueFyDC7Ft = null;
		const _getNeighborsLOPqWrN = () => { return _returnValueFyDC7Ft };
		const _vertexspMCe5V = {
			"getNeighbors": _getNeighborsLOPqWrN
	}
		const _returnValueTdsVUGN = await _graphRbnWA2r.getNeighbors(_vertexspMCe5V)
		const _returnValueipnnIBV = await _graphRbnWA2r.reverse()
		const _returnValueLavy0Fa = await _graphRbnWA2r.getWeight()
		const _returnValuenUYNsdr = true;
		const _getKeyXCX0lf = () => { return _returnValuenUYNsdr };
		const _newVertexTLTjbFe = {
			"getKey": _getKeyXCX0lf
	}
		const _returnValuerdMMcZv = await _graphRbnWA2r.addVertex(_newVertexTLTjbFe)
		const _returnValueB0qdRT = {
		
	}
		const _getKeyKaDNKfM = () => { return _returnValueB0qdRT };
		const _startVertexCAFtbdI = {
			"getKey": _getKeyKaDNKfM
	}
		const _returnValuesJHFwwi = await bellmanFord(_graphRbnWA2r, _startVertexCAFtbdI)
	});
})