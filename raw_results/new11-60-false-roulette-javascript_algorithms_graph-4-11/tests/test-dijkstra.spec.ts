export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuetb4MYzb = undefined;
		const _graphd3ROkJN = () => { return _returnValuetb4MYzb };
		const _arrayValuevI3bUIO = "GfAg3GIYwnoi2dWfmY1tSxCX04CHWuN0ueyge2wENxRzdrBk9KxKMcPQmaHKgv";
		const _arrayValueXulodc = true;
		const _startVertexDlEz4lh = [_arrayValuevI3bUIO, _arrayValueXulodc]
		const _returnValueg10dF6t = await dijkstra(_graphd3ROkJN, _startVertexDlEz4lh)
	});

	it('test for dijkstra', async () => {
		const _isDirectedAepAbrw = false;
		const _graphj0b9k1 = new Graph(_isDirectedAepAbrw)
		const _returnValueM3h4Pk2 = await _graphj0b9k1.getVerticesIndices()
		const _valueJovwZKR = 2.6480723122041354;
		const _returnValuecbKx36o = undefined;
		const _keyCallbackLE5r6C = () => { return _returnValuecbKx36o };
		const _startVertexWTXXEj8 = new DisjointSetItem(_valueJovwZKR, _keyCallbackLE5r6C)
		const _returnValuemaMxo9q = await _startVertexWTXXEj8.getChildren()
		const _returnValueqwsTu80 = await _startVertexWTXXEj8.getRank()
		const _returnValueHKj6jg = await _startVertexWTXXEj8.getChildren()
		const _returnValue0Gyp0L = await _startVertexWTXXEj8.getChildren()
		const _returnValueEO0HbO4 = await dijkstra(_graphj0b9k1, _startVertexWTXXEj8)
	});

	it('test for dijkstra', async () => {
		const _arrayValueTM4TEb8 = -3.5979687283507333;
		const _arrayValuerKL2uxy = {
		
	}
		const _arrayValueacDpwc = [_arrayValueTM4TEb8, _arrayValuerKL2uxy]
		const _arrayValueqaFfsM = {
		
	}
		const _arrayValue4cLoDO = null;
		const _isDirectedvAUsPNr = [_arrayValueacDpwc, _arrayValueqaFfsM, _arrayValue4cLoDO]
		const _graphUrd8uou = new Graph(_isDirectedvAUsPNr)
		const _vertexKeyJdTKWCp = false;
		const _returnValueeM5GDy = await _graphUrd8uou.getVertexByKey(_vertexKeyJdTKWCp)
		const _returnValueJKLFHPy = await _graphUrd8uou.getWeight()
		const _valueCAIAzE = null;
		const _startVertexdNmuvYN = new GraphVertex(_valueCAIAzE)
		const _returnValueP12cRU1 = await _startVertexdNmuvYN.getKey()
		const _returnValuesJkne7E = await _startVertexdNmuvYN.deleteAllEdges()
		const _returnValueaYdSYie = await _startVertexdNmuvYN.getEdges()
		const _vertexcEFQQ9 = "kxMJmDqlIdvXjKe2aU89mFzBTJtXJsCaPEiGdmbI3V3hDRVfiSz82p7yCpMRmQfo5WNJj";
		const _returnValueMHIX0JR = await _startVertexdNmuvYN.hasNeighbor(_vertexcEFQQ9)
		const _vertexV14RB6e = -9.572912970773348;
		const _returnValueFhyydKD = await _startVertexdNmuvYN.findEdge(_vertexV14RB6e)
		const _returnValueZ15cR6k = await dijkstra(_graphUrd8uou, _startVertexdNmuvYN)
	});
})