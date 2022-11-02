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
		const _returnValuew8UCEdi = null;
		const _getAllVerticesC4Ns2yD = () => { return _returnValuew8UCEdi };
		const _returnValueFcupZZM = true;
		const _getAdjacencyMatrixPh0B0yK = () => { return _returnValueFcupZZM };
		const _returnValueYjbObmR = false;
		const _getVerticesIndicesbtaLKpG = () => { return _returnValueYjbObmR };
		const _graphA8paZuu = {
			"getAllVertices": _getAllVerticesC4Ns2yD,
		"getAdjacencyMatrix": _getAdjacencyMatrixPh0B0yK,
		"getVerticesIndices": _getVerticesIndicesbtaLKpG
	}
		const _returnValueQdJXZ5I = await bfTravellingSalesman(_graphA8paZuu)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuej2oDul9 = 4.171969718783259;
		const _getAllVerticesRQaVXDt = () => { return _returnValuej2oDul9 };
		const _returnValuenKx4eDU = false;
		const _getAdjacencyMatrixZOFYeJ0 = () => { return _returnValuenKx4eDU };
		const _returnValuezTJVHPP = {
		
	}
		const _getVerticesIndicesiVKsxBQ = () => { return _returnValuezTJVHPP };
		const _graphafeUfXm = {
			"getAllVertices": _getAllVerticesRQaVXDt,
		"getAdjacencyMatrix": _getAdjacencyMatrixZOFYeJ0,
		"getVerticesIndices": _getVerticesIndicesiVKsxBQ
	}
		const _returnValuekEYaKt7 = await bfTravellingSalesman(_graphafeUfXm)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedJakYtrn = true;
		const _graphZnBWejK = new Graph(_isDirectedJakYtrn)
		const _valueZvZWwd = false;
		const _returnValuegiIuqu9 = true;
		const _keyCallbackOVccdUX = () => { return _returnValuegiIuqu9 };
		const _newVertexIoGpTcH = new DisjointSetItem(_valueZvZWwd, _keyCallbackOVccdUX)
		const _returnValuegUyuLFB = await _newVertexIoGpTcH.getChildren()
		const _returnValuePjMujNN = await _newVertexIoGpTcH.isRoot()
		const _returnValuewFXwTwj = await _newVertexIoGpTcH.getRoot()
		const _characteruxj5zfG = null;
		const _isCompleteWordmDbMPec = true;
		const _parentItemXdBRrfp = new TrieNode(_characteruxj5zfG, _isCompleteWordmDbMPec)
		const _returnValuebJOT1Vq = 2.1406740651913143;
		const _characterU3HHiqu = () => { return _returnValuebJOT1Vq };
		const _returnValueOVQgZI8 = await _parentItemXdBRrfp.removeChild(_characterU3HHiqu)
		const _returnValueuvmlQQS = await _parentItemXdBRrfp.hasChildren()
		const _returnValueh7RT4Ch = await _parentItemXdBRrfp.hasChildren()
		const _charactertgYbbkt = true;
		const _returnValueZhaDwY = await _parentItemXdBRrfp.hasChild(_charactertgYbbkt)
		const _forceSettingParentChildW5VLLpf = true;
		const _returnValuekBsX2a = await _newVertexIoGpTcH.setParent(_parentItemXdBRrfp, _forceSettingParentChildW5VLLpf)
		const _returnValueogIB4Tx = await _graphZnBWejK.addVertex(_newVertexIoGpTcH)
		const _returnValuerEnhGMZ = await _graphZnBWejK.getAllVertices()
		const _returnValueDPjgPWI = await bfTravellingSalesman(_graphZnBWejK)
	});
})