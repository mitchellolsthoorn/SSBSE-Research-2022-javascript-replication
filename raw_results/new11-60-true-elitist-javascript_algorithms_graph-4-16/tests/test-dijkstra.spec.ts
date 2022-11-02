export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _getAllVerticesE1qq97l = true;
		const _returnValueSpixce2 = true;
		const _findEdgeGsZs2SS = () => { return _returnValueSpixce2 };
		const _graphQVEr6Lo = {
			"getAllVertices": _getAllVerticesE1qq97l,
		"findEdge": _findEdgeGsZs2SS
	}
		const _returnValueyOCd0tx = "a3VxUFZfYVWCWqCHujPpt2bUqNItCSZruyaUQ1GEbnZzvNXUV46yLEug3rqTxaspL2TBRvVujW";
		const _getKeyAQ82qy9 = () => { return _returnValueyOCd0tx };
		const _startVertexmQS1Mp = {
			"getKey": _getKeyAQ82qy9
	}
		const _returnValuebyXWVf = await dijkstra(_graphQVEr6Lo, _startVertexmQS1Mp)
	});

	it('test for dijkstra', async () => {
		const _returnValueBQtYie = []
		const _getAllVerticescIxLGvC = () => { return _returnValueBQtYie };
		const _returnValuecszWjw = -6.188717882474203;
		const _findEdgeBnQ0g5m = () => { return _returnValuecszWjw };
		const _graphClQ5dat = {
			"getAllVertices": _getAllVerticescIxLGvC,
		"findEdge": _findEdgeBnQ0g5m
	}
		const _returnValueL1ltw40 = -3.060147687999554;
		const _getKeyNab6Kwx = () => { return _returnValueL1ltw40 };
		const _startVertexW2nrofw = {
			"getKey": _getKeyNab6Kwx
	}
		const _returnValueqhvXHM0 = await dijkstra(_graphClQ5dat, _startVertexW2nrofw)
	});

	it('test for dijkstra', async () => {
		const _isDirectedBrrl9R0 = false;
		const _graphp7AmPfO = new Graph(_isDirectedBrrl9R0)
		const _returnValueqPKhZ34 = await _graphp7AmPfO.getWeight()
		const _returnValueP3R2fGD = await _graphp7AmPfO.toString()
		const _returnValueuUOPCE8 = await _graphp7AmPfO.toString()
		const _valueXRIvTqB = null;
		const _startVertexiH9mJyC = new GraphVertex(_valueXRIvTqB)
		const _returnValueUw1kjv6 = await _startVertexiH9mJyC.getEdges()
		const _returnValueuoBxJtT = await _startVertexiH9mJyC.getDegree()
		const _returnValueDbW1mz = await _startVertexiH9mJyC.getEdges()
		const _returnValueE9qXH5k = await dijkstra(_graphp7AmPfO, _startVertexiH9mJyC)
	});

	it('test for dijkstra', async () => {
		const _isDirectedPqoYUo = false;
		const _graphvJnYGEs = new Graph(_isDirectedPqoYUo)
		const _returnValueuy3nHAL = await _graphvJnYGEs.getWeight()
		const _returnValueFXshchj = await _graphvJnYGEs.getAdjacencyMatrix()
		const _returnValueaU9EQXH = await _graphvJnYGEs.getAllEdges()
		const _returnValueeDiIkEX = await _graphvJnYGEs.reverse()
		const _valueIBK184Z = {
		
	}
		const _startVertexKIMceYi = new GraphVertex(_valueIBK184Z)
		const _returnValuegYmTFu2 = -3.3341634078923814;
		const _callbacktMJ1IUd = () => { return _returnValuegYmTFu2 };
		const _returnValuegV71rEv = await _startVertexKIMceYi.toString(_callbacktMJ1IUd)
		const _edge1rWWrF = "qFXpMAiLAEgtWrcAd11gOVXJGLwDnikv";
		const _returnValueh3nVpb7 = await _startVertexKIMceYi.addEdge(_edge1rWWrF)
		const _returnValueVu6CKIU = await _startVertexKIMceYi.getKey()
		const _returnValueawzVCUX = await dijkstra(_graphvJnYGEs, _startVertexKIMceYi)
	});
})