export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphLv1XwIo = -5.839787534746622;
		const _returnValueRhrhAID = await bfTravellingSalesman(_graphLv1XwIo)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuef7Z0pTr = null;
		const _returnValuexUV8PtQ = () => { return _returnValuef7Z0pTr };
		const _getAllVerticess37hlRF = () => { return _returnValuexUV8PtQ };
		const _returnValueK5PaUip = true;
		const _getAdjacencyMatrixDkvzzm = () => { return _returnValueK5PaUip };
		const _returnValueeq7lS3J = null;
		const _getVerticesIndiceshzlOsOz = () => { return _returnValueeq7lS3J };
		const _graphNMuK6ao = {
			"getAllVertices": _getAllVerticess37hlRF,
		"getAdjacencyMatrix": _getAdjacencyMatrixDkvzzm,
		"getVerticesIndices": _getVerticesIndiceshzlOsOz
	}
		const _returnValueQtiTDoR = await bfTravellingSalesman(_graphNMuK6ao)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedljv4TsH = false;
		const _graphE8HmtOe = new Graph(_isDirectedljv4TsH)
		const _returnValuez8JULmK = await _graphE8HmtOe.getWeight()
		const _returnValuea1DN6xX = await _graphE8HmtOe.getAllVertices()
		const _valueq4cEhcq = "Hkkh5A8OJ6P3tVSWmzzsvOXHdEsOktZtuVLKEdHqJBW";
		const _arrayValueesyBJ3 = []
		const _arrayValuedZAmDm = "T3ows4puzZLYgeFOqowVF6vhcnYd87t2mpnPUTsvAaShc6fh1BbCSqX379Q56kfCoV";
		const _returnValueD9eXwdo = [_arrayValueesyBJ3, _arrayValuedZAmDm]
		const _keyCallbackW7O7t9y = () => { return _returnValueD9eXwdo };
		const _newVertexQXgPIyN = new DisjointSetItem(_valueq4cEhcq, _keyCallbackW7O7t9y)
		const _returnValueyPsjGW5 = await _newVertexQXgPIyN.getRank()
		const _returnValue0pK6hE = await _newVertexQXgPIyN.getKey()
		const _returnValueekVNsGK = await _newVertexQXgPIyN.getRank()
		const _characterdd9IkwR = undefined;
		const _isCompleteWordjOUmyhw = true;
		const _parentItemcPFhqE3 = new TrieNode(_characterdd9IkwR, _isCompleteWordjOUmyhw)
		const _returnValueQC5XJNe = await _parentItemcPFhqE3.suggestChildren()
		const _characterUGq8OMc = true;
		const _returnValuebHUYdW0 = await _parentItemcPFhqE3.removeChild(_characterUGq8OMc)
		const _arrayValuezQyATex = {
		
	}
		const _arrayValuew5biOTf = false;
		const _arrayValueZWHTAKJ = undefined;
		const _forceSettingParentChildkmV3WhQ = [_arrayValuezQyATex, _arrayValuew5biOTf, _arrayValueZWHTAKJ]
		const _returnValueWEbzeKL = await _newVertexQXgPIyN.setParent(_parentItemcPFhqE3, _forceSettingParentChildkmV3WhQ)
		const _returnValueFpn1f9 = await _newVertexQXgPIyN.getRank()
		const _returnValuecukG0pH = await _graphE8HmtOe.addVertex(_newVertexQXgPIyN)
		const _returnValueaSns9S2 = await bfTravellingSalesman(_graphE8HmtOe)
	});
})