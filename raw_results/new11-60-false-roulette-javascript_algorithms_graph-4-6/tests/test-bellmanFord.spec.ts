export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValuen2nSVvG = true;
		const _returnValuebvJLF9A = "RL9AhngDq2mmaGyNb";
		const _arrayValueGAien96 = () => { return _returnValuebvJLF9A };
		const _arrayValuedI07bKy = true;
		const _returnValueP4GgdI = [_arrayValuen2nSVvG, _arrayValueGAien96, _arrayValuedI07bKy]
		const _getAllVerticesb7LUffY = () => { return _returnValueP4GgdI };
		const _getVertexByKeyRJTJTQM = "8zho1OSCqF8zksOPmjiDAGOfiIcH8nskoSaAcXGoJ46C1XPiw3t3oXKef11fRMkzYkrNP7WRtg98TPyOyl2lrQI0N74x2Ng2q";
		const _returnValueIjDBr3g = {
		
	}
		const _getNeighborsUn2e703 = () => { return _returnValueIjDBr3g };
		const _returnValuea0pGD0A = null;
		const _findEdgecmSds7M = () => { return _returnValuea0pGD0A };
		const _graphkIMLP6 = {
			"getAllVertices": _getAllVerticesb7LUffY,
		"getVertexByKey": _getVertexByKeyRJTJTQM,
		"getNeighbors": _getNeighborsUn2e703,
		"findEdge": _findEdgecmSds7M
	}
		const _arrayValuedU6uD0 = "2T";
		const _arrayValueMLirujk = false;
		const _startVertexWflcwhV = [_arrayValuedU6uD0, _arrayValueMLirujk]
		const _returnValuerwXR3Ft = await bellmanFord(_graphkIMLP6, _startVertexWflcwhV)
	});

	it('test for bellmanFord', async () => {
		const _arrayValuebk2pvvl = {
		
	}
		const _returnValuetmoG5ks = -6.6858242280794515;
		const _arrayValueIkUs5rg = () => { return _returnValuetmoG5ks };
		const _graphJasylqY = [_arrayValuebk2pvvl, _arrayValueIkUs5rg]
		const _valueNkUzPGs = "4xTMYOQoFjlqZcqcGCmguRdPUHw9QJIh7OmnfWV9k2";
		const _returnValueDcEKfPT = null;
		const _keyCallbackOqkp3gP = () => { return _returnValueDcEKfPT };
		const _startVertexAzBA3aB = new DisjointSetItem(_valueNkUzPGs, _keyCallbackOqkp3gP)
		const _returnValueBRFQUJg = await _startVertexAzBA3aB.getKey()
		const _returnValuexn2v1pg = await _startVertexAzBA3aB.isRoot()
		const _returnValueU1upNNs = await _startVertexAzBA3aB.getRoot()
		const _characteriG71xDy = 5.311229154714823;
		const _isCompleteWordZ8Mwx0F = false;
		const _parentItemVkx5qsi = new TrieNode(_characteriG71xDy, _isCompleteWordZ8Mwx0F)
		const _returnValueXSu9sw3 = await _parentItemVkx5qsi.suggestChildren()
		const _returnValueTdLUEg = await _parentItemVkx5qsi.suggestChildren()
		const _returnValuezwJrzzY = await _parentItemVkx5qsi.suggestChildren()
		const _returnValuef1x5sGM = await _parentItemVkx5qsi.hasChildren()
		const _characterClwq0UL = -1.5113956290424557;
		const _returnValueiwMu8zk = await _parentItemVkx5qsi.removeChild(_characterClwq0UL)
		const _forceSettingParentChildFJ3p9DP = null;
		const _returnValuep0MZvbK = await _startVertexAzBA3aB.setParent(_parentItemVkx5qsi, _forceSettingParentChildFJ3p9DP)
		const _returnValueeoShCoG = await bellmanFord(_graphJasylqY, _startVertexAzBA3aB)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedrFp6jZO = true;
		const _graphuTighd = new Graph(_isDirectedrFp6jZO)
		const _returnValueNjzg1A = await _graphuTighd.getAllVertices()
		const _returnValueunWSXFI = await _graphuTighd.getAllEdges()
		const _returnValueYuX0lFW = await _graphuTighd.getVerticesIndices()
		const _returnValueZxfs8Lf = null;
		const _getKeyWAKheWA = () => { return _returnValueZxfs8Lf };
		const _startVertexB5O3N0c = {
			"getKey": _getKeyWAKheWA
	}
		const _returnValueBh6gTWX = await bellmanFord(_graphuTighd, _startVertexB5O3N0c)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedQuCcqHN = false;
		const _graphyqgzbz2 = new Graph(_isDirectedQuCcqHN)
		const _returnValuepHsmENs = await _graphyqgzbz2.getWeight()
		const _vertexKeyopum7u1 = -9.409213998835513;
		const _returnValueF7Qhy5F = await _graphyqgzbz2.getVertexByKey(_vertexKeyopum7u1)
		const _returnValueJQFq6Rk = await _graphyqgzbz2.getAdjacencyMatrix()
		const _arrayValuem9ZPDau = "FJuX9XxMbM5BvrlzZBFSMqai";
		const _valueXYcGZI1 = [_arrayValuem9ZPDau]
		const _returnValueuAlMkJd = {
		
	}
		const _keyCallbackVrSeJkl = () => { return _returnValueuAlMkJd };
		const _newVertexUjBHWSO = new DisjointSetItem(_valueXYcGZI1, _keyCallbackVrSeJkl)
		const _returnValuefTBobnc = await _newVertexUjBHWSO.getChildren()
		const _returnValueResyZmS = await _graphyqgzbz2.addVertex(_newVertexUjBHWSO)
		const _returnValueyQsiW1u = null;
		const _getKeyvAHrzmK = () => { return _returnValueyQsiW1u };
		const _startVertexmxgODxG = {
			"getKey": _getKeyvAHrzmK
	}
		const _returnValueZJcm1B2 = await bellmanFord(_graphyqgzbz2, _startVertexmxgODxG)
	});
})