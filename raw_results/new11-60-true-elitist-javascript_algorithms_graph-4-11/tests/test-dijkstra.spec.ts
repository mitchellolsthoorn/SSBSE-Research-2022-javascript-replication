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
		const _returnValueCHn61p7 = true;
		const _getAllVerticessyaqrFJ = () => { return _returnValueCHn61p7 };
		const _returnValueJTGsrdk = 9.842599076785294;
		const _findEdgeWACKi9 = () => { return _returnValueJTGsrdk };
		const _graphMvMtBU5 = {
			"getAllVertices": _getAllVerticessyaqrFJ,
		"findEdge": _findEdgeWACKi9
	}
		const _returnValueBvdg0dM = 9.882095614721425;
		const _getKeyxHXydbq = () => { return _returnValueBvdg0dM };
		const _startVertexzUcCIhm = {
			"getKey": _getKeyxHXydbq
	}
		const _returnValueMLlnF2 = await dijkstra(_graphMvMtBU5, _startVertexzUcCIhm)
	});

	it('test for dijkstra', async () => {
		const _isDirectedPAiFiq = false;
		const _graphS3mzhRt = new Graph(_isDirectedPAiFiq)
		const _vertexKeyN5Plr7P = false;
		const _returnValueTrMvZVD = await _graphS3mzhRt.getVertexByKey(_vertexKeyN5Plr7P)
		const _returnValuefkP1LL = undefined;
		const _getKeyRsONrCj = () => { return _returnValuefkP1LL };
		const _startVertexm6GCgs1 = {
			"getKey": _getKeyRsONrCj
	}
		const _returnValueZhItLUI = await dijkstra(_graphS3mzhRt, _startVertexm6GCgs1)
	});

	it('test for dijkstra', async () => {
		const _isDirectedDFQH5vw = true;
		const _graphbDGqRZA = new Graph(_isDirectedDFQH5vw)
		const _returnValuegyfdIbS = await _graphbDGqRZA.reverse()
		const _returnValuehhNYyKq = await _graphbDGqRZA.getAdjacencyMatrix()
		const _returnValueGNsYb6N = await _graphbDGqRZA.toString()
		const _values0oOuVq = -4.96239765101484;
		const _startVertexbezzv1T = new GraphVertex(_values0oOuVq)
		const _edgeVck4z8R = undefined;
		const _returnValueF5kibhE = await _startVertexbezzv1T.deleteEdge(_edgeVck4z8R)
		const _returnValuezjrORdV = []
		const _callbackvMFgmNX = () => { return _returnValuezjrORdV };
		const _returnValueOYLmBbh = await _startVertexbezzv1T.toString(_callbackvMFgmNX)
		const _returnValueyMNrVdl = await _startVertexbezzv1T.getDegree()
		const _returnValuezTCXCIT = await dijkstra(_graphbDGqRZA, _startVertexbezzv1T)
	});
})