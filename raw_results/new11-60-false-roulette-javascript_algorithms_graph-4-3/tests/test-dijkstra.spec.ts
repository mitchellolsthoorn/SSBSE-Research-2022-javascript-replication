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
		const _arrayValueYNLDwG9 = -0.6619700932575316;
		const _arrayValueNh8TE19 = undefined;
		const _arrayValueW69e3Mk = "I1W2yEoeyacP7gAmsCeD7dIARsqyx4QYcx4wAnm9IrRPz23ascKFZ5FajBukrfntUNwdq7q6rsWsG";
		const _graphUfiXN7 = [_arrayValueYNLDwG9, _arrayValueNh8TE19, _arrayValueW69e3Mk]
		const _startVertexqB7yWQ = "viFSXvTp7byHDDtw4WpRFqgV1DjojqjyX10Y71OWVfoUez4Fi6E6dOV1";
		const _returnValuegprPmr4 = await dijkstra(_graphUfiXN7, _startVertexqB7yWQ)
	});

	it('test for dijkstra', async () => {
		const _isDirectedzJflvq8 = false;
		const _graphqo1HsW1 = new Graph(_isDirectedzJflvq8)
		const _returnValuevwprus = await _graphqo1HsW1.getAllVertices()
		const _returnValuebdRP4DL = undefined;
		const _getKeyTf8pe2l = () => { return _returnValuebdRP4DL };
		const _startVertexmChIOfu = {
			"getKey": _getKeyTf8pe2l
	}
		const _returnValueMRNO2z2 = await dijkstra(_graphqo1HsW1, _startVertexmChIOfu)
	});

	it('test for dijkstra', async () => {
		const _isDirectedqkO7eLC = true;
		const _graphcqxZBXB = new Graph(_isDirectedqkO7eLC)
		const _valueIbs9rqG = null;
		const _arrayValuePElaUwO = "AAMiRPsj9kxIbq8kt9VKoLLhlCWs8pQADUExgGhc4rdDvVS9X3";
		const _returnValuenZ7uHBP = [_arrayValuePElaUwO]
		const _keyCallbackbIPSV55 = () => { return _returnValuenZ7uHBP };
		const _startVertexVEFgGjG = new DisjointSetItem(_valueIbs9rqG, _keyCallbackbIPSV55)
		const _returnValuek4xsdiy = await _startVertexVEFgGjG.isRoot()
		const _returnValuevX6bdFP = await _startVertexVEFgGjG.isRoot()
		const _returnValueaMNDNo = await _startVertexVEFgGjG.isRoot()
		const _endVertexDQa08Sh = false;
		const _returnValuew8HnlmJ = await _graphcqxZBXB.findEdge(_startVertexVEFgGjG, _endVertexDQa08Sh)
		const _returnValuemFRCQt = await _graphcqxZBXB.getAllVertices()
		const _valueNl5yb5i = "GACD5XbzzTLJgpwaDhZ4gOAuAMExzfuhILE";
		const _startVertexZ4W69qd = new GraphVertex(_valueNl5yb5i)
		const _returnValuemOejEc = await _startVertexZ4W69qd.getEdges()
		const _edgeZsTvgFQ = false;
		const _returnValuehLx6hq8 = await _startVertexZ4W69qd.addEdge(_edgeZsTvgFQ)
		const _returnValueCMpUZS8 = await _startVertexZ4W69qd.getEdges()
		const _returnValueIDkg4Sw = await _startVertexZ4W69qd.getNeighbors()
		const _returnValuewQDuuuR = await _startVertexZ4W69qd.getEdges()
		const _returnValueARfGsc1 = await dijkstra(_graphcqxZBXB, _startVertexZ4W69qd)
	});

	it('test for dijkstra', async () => {
		const _isDirectedoxfJ8MY = true;
		const _graphSH35wNg = new Graph(_isDirectedoxfJ8MY)
		const _returnValueT0wUea3 = await _graphSH35wNg.getVerticesIndices()
		const _returnValueRY2aCr = await _graphSH35wNg.getAllEdges()
		const _valueqgdppj = {
		
	}
		const _startVertexcAlT9SS = new GraphVertex(_valueqgdppj)
		const _vertexUjDHq9u = {
		
	}
		const _returnValueGaO9FQX = await _startVertexcAlT9SS.hasNeighbor(_vertexUjDHq9u)
		const _vertexOHeYghw = null;
		const _returnValuex2p9n2a = await _startVertexcAlT9SS.findEdge(_vertexOHeYghw)
		const _returnValueP3pXub = await _startVertexcAlT9SS.deleteAllEdges()
		const _returnValueSZIDz7z = await _startVertexcAlT9SS.getKey()
		const _returnValuevm1w5y0 = await dijkstra(_graphSH35wNg, _startVertexcAlT9SS)
	});
})