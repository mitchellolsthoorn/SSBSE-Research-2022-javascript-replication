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
		const _returnValuepTMUylu = "znefEQEjUeSbOZMgG8cHbxt7hNz6i";
		const _returnValueszBMRCD = () => { return _returnValuepTMUylu };
		const _returnValuevosovUN = () => { return _returnValueszBMRCD };
		const _getAllVerticesl9X8fx1 = () => { return _returnValuevosovUN };
		const _returnValueipT3GSB = undefined;
		const _findEdgebg4Yjr = () => { return _returnValueipT3GSB };
		const _graphyv9rvJ = {
			"getAllVertices": _getAllVerticesl9X8fx1,
		"findEdge": _findEdgebg4Yjr
	}
		const _arrayValueucdxEq = "edy5QAlzQ3Opb1cEYP6rHLqBTEJm4o2KERjkOZkNSckuHeabm8cRytm07xvEaZPoMF";
		const _arrayValuej1bVyba = []
		const _returnValueoxRoy8 = [_arrayValueucdxEq, _arrayValuej1bVyba]
		const _getKeydo2tTu5 = () => { return _returnValueoxRoy8 };
		const _startVertexvnkuslr = {
			"getKey": _getKeydo2tTu5
	}
		const _returnValuel0CPbcN = await dijkstra(_graphyv9rvJ, _startVertexvnkuslr)
	});

	it('test for dijkstra', async () => {
		const _returnValuehURyBes = []
		const _getAllVerticesdyP4BKY = () => { return _returnValuehURyBes };
		const _findEdgee4nohIR = 6.247925539231286;
		const _graphZJbHHgf = {
			"getAllVertices": _getAllVerticesdyP4BKY,
		"findEdge": _findEdgee4nohIR
	}
		const _arrayValuezCGsWXI = "RzeBUEXYAP3U4FmoymwEN4h6hAmchwfqKTKZwFGeExy7";
		const _arrayValuefYzjpOp = null;
		const _returnValueXuetpEr = [_arrayValuezCGsWXI, _arrayValuefYzjpOp]
		const _getKeyVkQ5nB = () => { return _returnValueXuetpEr };
		const _startVertexfOznx7E = {
			"getKey": _getKeyVkQ5nB
	}
		const _returnValueZGGHCFs = await dijkstra(_graphZJbHHgf, _startVertexfOznx7E)
	});

	it('test for dijkstra', async () => {
		const _isDirectedBHT2EXt = false;
		const _graphhK7thcA = new Graph(_isDirectedBHT2EXt)
		const _returnValue2eCg7q = await _graphhK7thcA.getAdjacencyMatrix()
		const _valueqYiFW2H = null;
		const _startVertexEbxAuR = new GraphVertex(_valueqYiFW2H)
		const _returnValueJx4sElI = await _startVertexEbxAuR.deleteAllEdges()
		const _returnValueNGWFGkg = "Hq7tOQum5WSsx1ob3xz8L4r5Dzsnbh5fkcb2TGqxzVpiL7F785";
		const _callbackAeBfG2K = () => { return _returnValueNGWFGkg };
		const _returnValueKE3dJc1 = await _startVertexEbxAuR.toString(_callbackAeBfG2K)
		const _returnValuedYcPcSm = await _startVertexEbxAuR.deleteAllEdges()
		const _returnValueolycqMe = await _startVertexEbxAuR.getDegree()
		const _returnValuepKA9xNY = await dijkstra(_graphhK7thcA, _startVertexEbxAuR)
	});

	it('test for dijkstra', async () => {
		const _isDirectedGzEuZXl = true;
		const _graphj7B4z4C = new Graph(_isDirectedGzEuZXl)
		const _returnValueSkaTD2y = await _graphj7B4z4C.getAllEdges()
		const _valueEApWdzL = {
		
	}
		const _startVertexyclLZk = new GraphVertex(_valueEApWdzL)
		const _vertexg9PlcTx = null;
		const _returnValuedXTpm1F = await _startVertexyclLZk.findEdge(_vertexg9PlcTx)
		const _edgebtSXGm8 = null;
		const _returnValuesrXL7I3 = await _startVertexyclLZk.deleteEdge(_edgebtSXGm8)
		const _returnValuepkbn7eR = await _startVertexyclLZk.getKey()
		const _edgeYcbEF5q = {
		
	}
		const _returnValuedpQ1Q8B = await _startVertexyclLZk.addEdge(_edgeYcbEF5q)
		const _returnValueR1enX8U = await _startVertexyclLZk.getNeighbors()
		const _returnValuem0n4qGw = await dijkstra(_graphj7B4z4C, _startVertexyclLZk)
	});
})