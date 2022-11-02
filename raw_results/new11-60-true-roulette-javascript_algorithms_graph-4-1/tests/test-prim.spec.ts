export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValuegCZL7N4 = []
		const _returnValueytD70xR = [_arrayValuegCZL7N4]
		const _returnValueND5ZNNM = () => { return _returnValueytD70xR };
		const _graphHu4iW2J = () => { return _returnValueND5ZNNM };
		const _returnValueDdtdpP = await prim(_graphHu4iW2J)
	});

	it('test for prim', async () => {
		const _isDirectedWx4Apbo = {
		
	}
		const _returnValueSsqkZLD = -7.974559628719997;
		const _getAllVerticesnRGQ8IZ = () => { return _returnValueSsqkZLD };
		const _graphwQhA3fk = {
			"isDirected": _isDirectedWx4Apbo,
		"getAllVertices": _getAllVerticesnRGQ8IZ
	}
		const _returnValueSLzcFtt = await prim(_graphwQhA3fk)
	});

	it('test for prim', async () => {
		const _isDirectedN9V4Tun = false;
		const _graphRZ8u5ez = new Graph(_isDirectedN9V4Tun)
		const _returnValueuZWTJyr = await _graphRZ8u5ez.getWeight()
		const _returnValueUqGsKy = await _graphRZ8u5ez.getAdjacencyMatrix()
		const _valuemQkZS0 = true;
		const _returnValueD7xWPf = -8.828104717371108;
		const _keyCallbacktn7QLs9 = () => { return _returnValueD7xWPf };
		const _newVertexNILiwm9 = new DisjointSetItem(_valuemQkZS0, _keyCallbacktn7QLs9)
		const _valueehiIvA = -1.7968032991816276;
		const _keyCallbackVY4dE9V = null;
		const _parentItemrrQjNVb = new DisjointSetItem(_valueehiIvA, _keyCallbackVY4dE9V)
		const _returnValuedUd74WQ = await _parentItemrrQjNVb.getRank()
		const _returnValueDNdxVcz = await _parentItemrrQjNVb.getRank()
		const _returnValueeB55dMt = await _parentItemrrQjNVb.getRoot()
		const _characterTsQ35H4 = "EvlcweQhjIhXFe9UD1E8e7qLbykzANN0JAnUBZyKCsqV077qCA7g6WFsY3i2FqJCIuLh8sazPk";
		const _isCompleteWordZdr4oy = false;
		const _parentItemaiGwvD = new TrieNode(_characterTsQ35H4, _isCompleteWordZdr4oy)
		const _characterKeNaQS = false;
		const _returnValueuMhPcJ = await _parentItemaiGwvD.hasChild(_characterKeNaQS)
		const _characterLWdvSNK = true;
		const _returnValue3cwR46 = await _parentItemaiGwvD.removeChild(_characterLWdvSNK)
		const _returnValueaolrUve = await _parentItemaiGwvD.suggestChildren()
		const _forceSettingParentChildSfM8Vux = true;
		const _returnValueAiaBMjC = await _parentItemrrQjNVb.setParent(_parentItemaiGwvD, _forceSettingParentChildSfM8Vux)
		const _forceSettingParentChildikQ5ZJW = true;
		const _returnValueBzMwGKo = await _newVertexNILiwm9.setParent(_parentItemrrQjNVb, _forceSettingParentChildikQ5ZJW)
		const _returnValuerHugRhl = await _newVertexNILiwm9.getRank()
		const _returnValueJ2jSn5v = await _newVertexNILiwm9.isRoot()
		const _returnValue6IJNEk = await _graphRZ8u5ez.addVertex(_newVertexNILiwm9)
		const _returnValueeXFTNYJ = await prim(_graphRZ8u5ez)
	});

	it('test for prim', async () => {
		const _isDirectedbqSYRbj = false;
		const _graphmLEoRdn = new Graph(_isDirectedbqSYRbj)
		const _returnValueFfsczoE = await _graphmLEoRdn.getAdjacencyMatrix()
		const _returnValuetjosM7i = await _graphmLEoRdn.getWeight()
		const _valueoD4iQw3 = true;
		const _newVertexgPkv7TW = new GraphVertex(_valueoD4iQw3)
		const _returnValueEhaPr7 = await _newVertexgPkv7TW.deleteAllEdges()
		const _returnValueFgKWsdS = await _newVertexgPkv7TW.deleteAllEdges()
		const _returnValuejOowGfy = await _newVertexgPkv7TW.getNeighbors()
		const _returnValueHBlIkYR = await _graphmLEoRdn.addVertex(_newVertexgPkv7TW)
		const _returnValuetfzWVG = await _graphmLEoRdn.getAllVertices()
		const _returnValuelpVJMXp = await prim(_graphmLEoRdn)
	});
})