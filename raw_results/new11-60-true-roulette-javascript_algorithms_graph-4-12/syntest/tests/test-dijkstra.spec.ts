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
		const _returnValueHn4gLll = 1.1905442985636299;
		const _grapheFmOkgL = () => { return _returnValueHn4gLll };
		const _returnValuegnt8J8 = {
		
	}
		const _getKeycgnqCM = () => { return _returnValuegnt8J8 };
		const _startVertexyBumyL = {
			"getKey": _getKeycgnqCM
	}
		const _returnValueftECf1h = await dijkstra(_grapheFmOkgL, _startVertexyBumyL)
	});

	it('test for dijkstra', async () => {
		const _isDirectedQ8ulL4z = false;
		const _graphVoLp10c = new Graph(_isDirectedQ8ulL4z)
		const _returnValueC99GdI = await _graphVoLp10c.getAdjacencyMatrix()
		const _returnValueksqUeD6 = await _graphVoLp10c.reverse()
		const _returnValueYJDkegP = await _graphVoLp10c.toString()
		const _returnValuePT8W0w6 = await _graphVoLp10c.getVerticesIndices()
		const _returnValueArCHP6f = null;
		const _getKeyJpfMQag = () => { return _returnValueArCHP6f };
		const _startVertexLEDCpv3 = {
			"getKey": _getKeyJpfMQag
	}
		const _returnValueBw2byem = await dijkstra(_graphVoLp10c, _startVertexLEDCpv3)
	});

	it('test for dijkstra', async () => {
		const _isDirectedIpTqfuk = false;
		const _graphEmOPmSM = new Graph(_isDirectedIpTqfuk)
		const _returnValueAr6E2M = await _graphEmOPmSM.getVerticesIndices()
		const _arrayValuegz2vwUz = 8.520195676288122;
		const _returnValueix5iUiN = null;
		const _arrayValueBNlU17 = () => { return _returnValueix5iUiN };
		const _arrayValuegkHcBU1 = [_arrayValueBNlU17]
		const _arrayValuegWk3VmX = {
		
	}
		const _arrayValueyc8v7cF = [_arrayValuegz2vwUz, _arrayValuegkHcBU1, _arrayValuegWk3VmX]
		const _arrayValueADVFsKM = -2.6905106611082887;
		const _arrayValuenDQdk3o = true;
		const _arrayValueHfUgv4q = 0.8076738041431497;
		const _arrayValueIhTc032 = true;
		const _arrayValuefiphRU7 = [_arrayValueADVFsKM, _arrayValuenDQdk3o, _arrayValueHfUgv4q, _arrayValueIhTc032]
		const _arrayValuedTUm18U = "Hb383GuihWx22P1oE3iSwCncdBVWN259FAJ496pinmKBg9";
		const _returnValuexQ23fMp = [_arrayValuedTUm18U]
		const _returnValuewxkPoIm = () => { return _returnValuexQ23fMp };
		const _arrayValueHnu75N5 = () => { return _returnValuewxkPoIm };
		const _valueqD6FHK = [_arrayValueyc8v7cF, _arrayValuefiphRU7, _arrayValueHnu75N5]
		const _startVertexEzzaBJE = new GraphVertex(_valueqD6FHK)
		const _edgeYlo49SD = undefined;
		const _returnValueM2hgb8 = await _startVertexEzzaBJE.deleteEdge(_edgeYlo49SD)
		const _vertexZRuMTx = null;
		const _returnValueVVLXXdf = await _startVertexEzzaBJE.hasNeighbor(_vertexZRuMTx)
		const _returnValueV6Wzwho = await _startVertexEzzaBJE.deleteAllEdges()
		const _returnValuezRqbP5p = await dijkstra(_graphEmOPmSM, _startVertexEzzaBJE)
	});

	it('test for dijkstra', async () => {
		const _isDirectedgroIqYI = false;
		const _graphp7Fyhv5 = new Graph(_isDirectedgroIqYI)
		const _returnValuestTTv4 = await _graphp7Fyhv5.getAdjacencyMatrix()
		const _valuecq7QlkM = null;
		const _startVertexiEdXrru = new GraphVertex(_valuecq7QlkM)
		const _returnValueibIXpkm = await _startVertexiEdXrru.getKey()
		const _edgeiUww6J2 = undefined;
		const _returnValuenomfnz2 = await _startVertexiEdXrru.deleteEdge(_edgeiUww6J2)
		const _arrayValueeoZNAuc = undefined;
		const _edgeouZZokS = [_arrayValueeoZNAuc]
		const _returnValuegKPhZYJ = await _startVertexiEdXrru.addEdge(_edgeouZZokS)
		const _returnValueX9uaOyC = await _startVertexiEdXrru.getDegree()
		const _returnValueibcXCWG = await dijkstra(_graphp7Fyhv5, _startVertexiEdXrru)
	});
})