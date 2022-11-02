export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphPlTVKal = -1.3414278777733788;
		const _returnValueWejWopV = 2.4718739283469553;
		const _startVertextTfQyy9 = () => { return _returnValueWejWopV };
		const _returnValueZl8YCfO = await bellmanFord(_graphPlTVKal, _startVertextTfQyy9)
	});

	it('test for bellmanFord', async () => {
		const _graphCzJzu9 = []
		const _returnValueYINMxOG = {
		
	}
		const _returnValueGqNAViX = () => { return _returnValueYINMxOG };
		const _returnValueO3mir4F = () => { return _returnValueGqNAViX };
		const _getKeypk7I0Bt = () => { return _returnValueO3mir4F };
		const _startVertexOPE7bs = {
			"getKey": _getKeypk7I0Bt
	}
		const _returnValuemqTLAK6 = await bellmanFord(_graphCzJzu9, _startVertexOPE7bs)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedEGDLE06 = false;
		const _graphssMrcEg = new Graph(_isDirectedEGDLE06)
		const _returnValueQK0mDdk = await _graphssMrcEg.getAdjacencyMatrix()
		const _returnValuekdLa747 = undefined;
		const _getKeyTxDvSjC = () => { return _returnValuekdLa747 };
		const _startVertexiRHDYQr = {
			"getKey": _getKeyTxDvSjC
	}
		const _returnValueOeOmPqB = await bellmanFord(_graphssMrcEg, _startVertexiRHDYQr)
	});

	it('test for bellmanFord', async () => {
		const _isDirected1M2ihX = false;
		const _graphDZvXAsK = new Graph(_isDirected1M2ihX)
		const _returnValueUl0LZD = await _graphDZvXAsK.getAllEdges()
		const _returnValueyVWuSui = await _graphDZvXAsK.reverse()
		const _arrayValueexRlBRM = {
		
	}
		const _arrayValuecguXufJ = [_arrayValueexRlBRM]
		const _arrayValuetm6tu6n = null;
		const _arrayValuecQkrtqr = {
		
	}
		const _arrayValuebu8n1iN = [_arrayValuecguXufJ, _arrayValuetm6tu6n, _arrayValuecQkrtqr]
		const _arrayValueSViJu7D = true;
		const _arrayValueuv5LBI = [_arrayValuebu8n1iN, _arrayValueSViJu7D]
		const _valueMDxnfJU = [_arrayValueuv5LBI]
		const _startVertexf4dndCX = new GraphVertex(_valueMDxnfJU)
		const _returnValueMTaes6z = await _startVertexf4dndCX.getKey()
		const _returnValueXyu1VmN = await _startVertexf4dndCX.getKey()
		const _returnValueTWYY4E4 = await _startVertexf4dndCX.getEdges()
		const _endVertexmUq46z = "mwDyGpKKKDwVvg9RP2mWqPmz3ecSnTbfa7DzAaDNl03M1U6CRoAnY3HDUINLfKQ8MidTlqqPyhHF6h9Tv31s1uNuH1GvJez";
		const _returnValuevhPEdc = await _graphDZvXAsK.findEdge(_startVertexf4dndCX, _endVertexmUq46z)
		const _returnValueMRGuy7B = await _graphDZvXAsK.toString()
		const _returnValues3hzYBW = {
		
	}
		const _getKeyYUcNVj5 = () => { return _returnValues3hzYBW };
		const _newVertexYOfcs1I = {
			"getKey": _getKeyYUcNVj5
	}
		const _returnValuesGc6tK6 = await _graphDZvXAsK.addVertex(_newVertexYOfcs1I)
		const _returnValueUk6L3jb = null;
		const _getKeyVLA9xBa = () => { return _returnValueUk6L3jb };
		const _startVertexdpGIPlj = {
			"getKey": _getKeyVLA9xBa
	}
		const _returnValuedtq2Nw = await bellmanFord(_graphDZvXAsK, _startVertexdpGIPlj)
	});
})