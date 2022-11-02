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
		const _arrayValuec1AUE8y = undefined;
		const _arrayValueIYCyLy3 = undefined;
		const _arrayValueCDiIp3W = false;
		const _arrayValueOvdf3lI = [_arrayValueCDiIp3W]
		const _graphFte5Ypa = [_arrayValuec1AUE8y, _arrayValueIYCyLy3, _arrayValueOvdf3lI]
		const _returnValueNTDTWTT = -9.599871710809731;
		const _startVertex9Q0LUI = () => { return _returnValueNTDTWTT };
		const _returnValueNieqxaU = await dijkstra(_graphFte5Ypa, _startVertex9Q0LUI)
	});

	it('test for dijkstra', async () => {
		const _isDirectedvzgbr3z = true;
		const _graphi5IMmji = new Graph(_isDirectedvzgbr3z)
		const _returnValueirD0Op = await _graphi5IMmji.getWeight()
		const _returnValuecbGDU4D = await _graphi5IMmji.getWeight()
		const _returnValuexNBDcjk = await _graphi5IMmji.reverse()
		const _returnValueBj03GUp = await _graphi5IMmji.getWeight()
		const _returnValueQ0ud4sq = 9.484288807174167;
		const _getKeyTeX6Gly = () => { return _returnValueQ0ud4sq };
		const _startVertexJunDAax = {
			"getKey": _getKeyTeX6Gly
	}
		const _returnValueUfYidt8 = await dijkstra(_graphi5IMmji, _startVertexJunDAax)
	});

	it('test for dijkstra', async () => {
		const _isDirectedoYKccEk = false;
		const _graphNQ9JJZH = new Graph(_isDirectedoYKccEk)
		const _returnValuesbVxsZR = await _graphNQ9JJZH.getAllEdges()
		const _returnValuenjepwse = await _graphNQ9JJZH.getVerticesIndices()
		const _returnValueEvL9ie = await _graphNQ9JJZH.getAdjacencyMatrix()
		const _returnValueCUq7eir = await _graphNQ9JJZH.getWeight()
		const _arrayValueHaRciO4 = "TM8e4XI4ypVymSA2fMo";
		const _arrayValue3AxPpt = null;
		const _returnValueaiJF0KT = [_arrayValueHaRciO4, _arrayValue3AxPpt]
		const _valueO2K3jVM = () => { return _returnValueaiJF0KT };
		const _startVertexdW9Klr = new GraphVertex(_valueO2K3jVM)
		const _edgeZcvPZ3 = {
		
	}
		const _returnValuetjSJy5M = await _startVertexdW9Klr.deleteEdge(_edgeZcvPZ3)
		const _returnValueUrbcUdA = await _startVertexdW9Klr.deleteAllEdges()
		const _requiredEdgeH7BQP7k = -3.448131665767357;
		const _returnValuelnPcrlg = await _startVertexdW9Klr.hasEdge(_requiredEdgeH7BQP7k)
		const _returnValueMGVTznG = -5.6673591875036555;
		const _requiredEdgepx4fIPH = () => { return _returnValueMGVTznG };
		const _returnValueGuNF86 = await _startVertexdW9Klr.hasEdge(_requiredEdgepx4fIPH)
		const _returnValuekVHhNcB = await _startVertexdW9Klr.deleteAllEdges()
		const _returnValuecBKwOf1 = await dijkstra(_graphNQ9JJZH, _startVertexdW9Klr)
	});
})