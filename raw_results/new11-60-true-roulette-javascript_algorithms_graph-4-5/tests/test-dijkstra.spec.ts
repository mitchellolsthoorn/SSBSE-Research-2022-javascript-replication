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
		const _returnValueoYxax8v = false;
		const _getAllVerticesaFk8sD = () => { return _returnValueoYxax8v };
		const _findEdgehLWV1ii = 8.440095117865141;
		const _graphQqvp0mM = {
			"getAllVertices": _getAllVerticesaFk8sD,
		"findEdge": _findEdgehLWV1ii
	}
		const _returnValueN2Kau4 = "Pb2AdLaWSjXWC2o5oqPUpv5yjxfV394JnotiDMh";
		const _startVertex0dlP6G = () => { return _returnValueN2Kau4 };
		const _returnValueTY0KD9Q = await dijkstra(_graphQqvp0mM, _startVertex0dlP6G)
	});

	it('test for dijkstra', async () => {
		const _isDirectedr6pqzEN = true;
		const _graphRl19DlK = new Graph(_isDirectedr6pqzEN)
		const _returnValueaKPRdCs = "yA";
		const _getNeighborsZP8ik0t = () => { return _returnValueaKPRdCs };
		const _vertexwiZErjs = {
			"getNeighbors": _getNeighborsZP8ik0t
	}
		const _returnValuemG84VMV = await _graphRl19DlK.getNeighbors(_vertexwiZErjs)
		const _returnValueHvlmfmR = "YSARIWBpVOtnhRHqKAms";
		const _getKeyarnSViN = () => { return _returnValueHvlmfmR };
		const _startVertexJDu252H = {
			"getKey": _getKeyarnSViN
	}
		const _returnValueORg6xEh = await dijkstra(_graphRl19DlK, _startVertexJDu252H)
	});

	it('test for dijkstra', async () => {
		const _isDirectedwzaPV71 = true;
		const _graphOtxhrEh = new Graph(_isDirectedwzaPV71)
		const _returnValuesrkj0ux = await _graphOtxhrEh.getAdjacencyMatrix()
		const _valueQrrWx3 = false;
		const _startVertexWoqbYal = new GraphVertex(_valueQrrWx3)
		const _edgeH5hv8dj = false;
		const _returnValuegTwvSAE = await _startVertexWoqbYal.addEdge(_edgeH5hv8dj)
		const _vertexnU4V7ML = null;
		const _returnValuejcj5Ojs = await _startVertexWoqbYal.findEdge(_vertexnU4V7ML)
		const _returnValuetps2v1 = await dijkstra(_graphOtxhrEh, _startVertexWoqbYal)
	});

	it('test for dijkstra', async () => {
		const _isDirectedh8oRenb = true;
		const _graphMqxUjsV = new Graph(_isDirectedh8oRenb)
		const _vertexKeyTpn4Ekn = undefined;
		const _returnValuejJVU6s5 = await _graphMqxUjsV.getVertexByKey(_vertexKeyTpn4Ekn)
		const _returnValueJhZ4d9 = await _graphMqxUjsV.getWeight()
		const _returnValuepMMtoKO = "h47t";
		const _valueIrdwWtC = () => { return _returnValuepMMtoKO };
		const _startVertext4qL8KY = new GraphVertex(_valueIrdwWtC)
		const _returnValuervyVGPD = await _startVertext4qL8KY.getDegree()
		const _requiredEdgeFfTmjMC = 7.541044602864613;
		const _returnValueJhYGzLU = await _startVertext4qL8KY.hasEdge(_requiredEdgeFfTmjMC)
		const _returnValueBtY312u = await _startVertext4qL8KY.getEdges()
		const _returnValuePJGs9PK = await dijkstra(_graphMqxUjsV, _startVertext4qL8KY)
	});
})