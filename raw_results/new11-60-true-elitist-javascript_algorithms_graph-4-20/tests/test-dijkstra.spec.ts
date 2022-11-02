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
		const _returnValueORqHpZX = null;
		const _getAllVerticesjZiw2jf = () => { return _returnValueORqHpZX };
		const _returnValuePvRTJx3 = 6.897455009727025;
		const _findEdgec36Sv0F = () => { return _returnValuePvRTJx3 };
		const _grapht90J4dr = {
			"getAllVertices": _getAllVerticesjZiw2jf,
		"findEdge": _findEdgec36Sv0F
	}
		const _startVertexNLI39vd = null;
		const _returnValueHr7SIh = await dijkstra(_grapht90J4dr, _startVertexNLI39vd)
	});

	it('test for dijkstra', async () => {
		const _isDirectedkvIHit = false;
		const _graphOTkvooS = new Graph(_isDirectedkvIHit)
		const _returnValuepmJbhJT = await _graphOTkvooS.getAdjacencyMatrix()
		const _returnValueFOSCl3q = await _graphOTkvooS.getAllVertices()
		const _returnValueO181Fp2 = await _graphOTkvooS.getAllEdges()
		const _returnValuedtB8S1f = await _graphOTkvooS.getAllEdges()
		const _returnValueJe7UZMx = {
		
	}
		const _getKeyQu2hceK = () => { return _returnValueJe7UZMx };
		const _startVertexRn3n07o = {
			"getKey": _getKeyQu2hceK
	}
		const _returnValuemR7OzhP = await dijkstra(_graphOTkvooS, _startVertexRn3n07o)
	});

	it('test for dijkstra', async () => {
		const _isDirectedwKkKJoI = true;
		const _graphU1RQbAd = new Graph(_isDirectedwKkKJoI)
		const _vertexKeybKBgcUu = true;
		const _returnValueRGxbF3 = await _graphU1RQbAd.getVertexByKey(_vertexKeybKBgcUu)
		const _returnValuehyqKL4Q = await _graphU1RQbAd.getVerticesIndices()
		const _returnValueRE9CnQk = await _graphU1RQbAd.getAllVertices()
		const _returnValue8TaQgU = false;
		const _valueEtnT59X = () => { return _returnValue8TaQgU };
		const _startVertexYVeq4V = new GraphVertex(_valueEtnT59X)
		const _returnValuelS4XsO = await _startVertexYVeq4V.getDegree()
		const _returnValueegZI3p = await _startVertexYVeq4V.getNeighbors()
		const _returnValuedLYhZh = await _startVertexYVeq4V.getDegree()
		const _returnValuegxadRku = await _startVertexYVeq4V.getNeighbors()
		const _returnValueaoSlhFs = await dijkstra(_graphU1RQbAd, _startVertexYVeq4V)
	});
})