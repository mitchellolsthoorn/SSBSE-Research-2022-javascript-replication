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
		const _graphlqFVKDZ = false;
		const _arrayValueeEW3dqv = undefined;
		const _arrayValueEQPtxl = null;
		const _getKeyzgcB2RO = [_arrayValueeEW3dqv, _arrayValueEQPtxl]
		const _startVertexvSKKN2o = {
			"getKey": _getKeyzgcB2RO
	}
		const _returnValuex39QTbO = await dijkstra(_graphlqFVKDZ, _startVertexvSKKN2o)
	});

	it('test for dijkstra', async () => {
		const _isDirectedIaJIrvr = true;
		const _graphimjfckj = new Graph(_isDirectedIaJIrvr)
		const _returnValueYtdM4GT = await _graphimjfckj.getAllEdges()
		const _returnValueiv4383v = await _graphimjfckj.getAllEdges()
		const _returnValued1KjqH9 = await _graphimjfckj.getAdjacencyMatrix()
		const _valueLOrrbd3 = undefined;
		const _returnValue6vumNK = 4.865477748404896;
		const _keyCallbackoBaEN0Y = () => { return _returnValue6vumNK };
		const _startVertexvlKq2YB = new DisjointSetItem(_valueLOrrbd3, _keyCallbackoBaEN0Y)
		const _returnValueMnrrcfr = await _startVertexvlKq2YB.getKey()
		const _returnValueStmePGO = await _startVertexvlKq2YB.getRoot()
		const _returnValueBvMEYXu = await dijkstra(_graphimjfckj, _startVertexvlKq2YB)
	});

	it('test for dijkstra', async () => {
		const _isDirectedS3p4eFg = false;
		const _graphXGZhTxv = new Graph(_isDirectedS3p4eFg)
		const _returnValue3tZfWc = await _graphXGZhTxv.getAllVertices()
		const _valueisYxx4D = null;
		const _startVertexB7fUt1k = new GraphVertex(_valueisYxx4D)
		const _returnValuenKHYf3j = await _startVertexB7fUt1k.getNeighbors()
		const _arrayValueID9t5U3 = {
		
	}
		const _arrayValueHOzwWMG = undefined;
		const _arrayValueQIedkBO = null;
		const _arrayValueN1TMPV1 = false;
		const _arrayValueh2un6X = [_arrayValueHOzwWMG, _arrayValueQIedkBO, _arrayValueN1TMPV1]
		const _arrayValueIXAthjb = -6.813916470270065;
		const _requiredEdgeYySkV0Y = [_arrayValueID9t5U3, _arrayValueh2un6X, _arrayValueIXAthjb]
		const _returnValuea4HYd9g = await _startVertexB7fUt1k.hasEdge(_requiredEdgeYySkV0Y)
		const _returnValueh1fCHbN = await dijkstra(_graphXGZhTxv, _startVertexB7fUt1k)
	});
})