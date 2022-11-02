export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueAoDDqC9 = null;
		const _getAllVerticesviWFrSP = () => { return _returnValueAoDDqC9 };
		const _arrayValueGUkwPkj = -5.09751067853153;
		const _arrayValuedxOSUUM = false;
		const _arrayValuez0pbNlN = [_arrayValueGUkwPkj, _arrayValuedxOSUUM]
		const _returnValuegCNEPc = [_arrayValuez0pbNlN]
		const _getVertexByKeyoROXOwl = () => { return _returnValuegCNEPc };
		const _returnValuejS4NaEU = {
		
	}
		const _getNeighborsnXQeDwz = () => { return _returnValuejS4NaEU };
		const _returnValuegcpteKT = null;
		const _findEdgeCMy8oD = () => { return _returnValuegcpteKT };
		const _graphQONFOXT = {
			"getAllVertices": _getAllVerticesviWFrSP,
		"getVertexByKey": _getVertexByKeyoROXOwl,
		"getNeighbors": _getNeighborsnXQeDwz,
		"findEdge": _findEdgeCMy8oD
	}
		const _arrayValue1Lk1ql = false;
		const _startVertexdlZGE56 = [_arrayValue1Lk1ql]
		const _returnValueMzYkU69 = await bellmanFord(_graphQONFOXT, _startVertexdlZGE56)
	});

	it('test for bellmanFord', async () => {
		const _arrayValueGu4ugQw = "jnMwDsHSmlf5I689oGXIARJhdEulC9J6WPpAnd1ocIzFz56Gv8me5JgVp5R8X3A3srkksiXWRpRR7s3KkMayE";
		const _arrayValuewqxTQd = 5.1570290334592865;
		const _arrayValueieUochs = undefined;
		const _returnValueIu21SjB = [_arrayValueGu4ugQw, _arrayValuewqxTQd, _arrayValueieUochs]
		const _getAllVerticeszvhcFzQ = () => { return _returnValueIu21SjB };
		const _returnValuemuihWNc = "Yo6a80t2jOwddeNHfiKtnX";
		const _getVertexByKeyxMfAryT = () => { return _returnValuemuihWNc };
		const _getNeighborsmBAMAp = {
		
	}
		const _returnValueDS48K0z = null;
		const _findEdgeOHSJ5UT = () => { return _returnValueDS48K0z };
		const _graphs9wuoJf = {
			"getAllVertices": _getAllVerticeszvhcFzQ,
		"getVertexByKey": _getVertexByKeyxMfAryT,
		"getNeighbors": _getNeighborsmBAMAp,
		"findEdge": _findEdgeOHSJ5UT
	}
		const _returnValuewhirOVP = "di9P42gTEgyRiejLxbvWrWLS";
		const _getKeyALa02oq = () => { return _returnValuewhirOVP };
		const _startVertexu4A0sJ = {
			"getKey": _getKeyALa02oq
	}
		const _returnValuegJq6dz1 = await bellmanFord(_graphs9wuoJf, _startVertexu4A0sJ)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedf5qxrct = false;
		const _graphtqSPzGb = new Graph(_isDirectedf5qxrct)
		const _returnValueLFG4Iqd = await _graphtqSPzGb.getAllEdges()
		const _returnValueSd3qCVx = await _graphtqSPzGb.toString()
		const _returnValueEK4Tte = 1.7351961847068154;
		const _getKeys0ncL5q = () => { return _returnValueEK4Tte };
		const _startVertexU5h3i8w = {
			"getKey": _getKeys0ncL5q
	}
		const _returnValuergAzJ9O = await bellmanFord(_graphtqSPzGb, _startVertexU5h3i8w)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedSDCR5DB = false;
		const _graphFQREjqq = new Graph(_isDirectedSDCR5DB)
		const _returnValueJm7WZfR = null;
		const _getKeyv33VSId = () => { return _returnValueJm7WZfR };
		const _newVertexTIoPVXd = {
			"getKey": _getKeyv33VSId
	}
		const _returnValueStsUIXb = await _graphFQREjqq.addVertex(_newVertexTIoPVXd)
		const _returnValueI4PNwcE = await _graphFQREjqq.getWeight()
		const _vertexKeyXTuirV = false;
		const _returnValuef1vcfIy = await _graphFQREjqq.getVertexByKey(_vertexKeyXTuirV)
		const _arrayValuesH1YLh3 = undefined;
		const _vertexKeyYM68FrM = [_arrayValuesH1YLh3]
		const _returnValuex0cUK5c = await _graphFQREjqq.getVertexByKey(_vertexKeyYM68FrM)
		const _returnValueVeToYIQ = -9.679018941802768;
		const _vertexKeyXcHGDHs = () => { return _returnValueVeToYIQ };
		const _returnValuekop5bWA = await _graphFQREjqq.getVertexByKey(_vertexKeyXcHGDHs)
		const _valuee6MMdpp = 8.742533285381374;
		const _returnValuelgmYJLj = true;
		const _keyCallbackkp0aG4d = () => { return _returnValuelgmYJLj };
		const _startVertexrm33y6S = new DisjointSetItem(_valuee6MMdpp, _keyCallbackkp0aG4d)
		const _returnValue6vnPAh = await _startVertexrm33y6S.getRank()
		const _returnValueGW0zVZ1 = await _startVertexrm33y6S.isRoot()
		const _returnValueWgt6jxM = false;
		const _getKeyykge3vk = () => { return _returnValueWgt6jxM };
		const _returnValueiD0LFh2 = null;
		const _setParentLeU5bwS = () => { return _returnValueiD0LFh2 };
		const _childItemOyzYGu3 = {
			"getKey": _getKeyykge3vk,
		"setParent": _setParentLeU5bwS
	}
		const _returnValueBsraFNZ = await _startVertexrm33y6S.addChild(_childItemOyzYGu3)
		const _returnValuePxRLbpJ = {
		
	}
		const _addChildSnsz4G = () => { return _returnValuePxRLbpJ };
		const _parentItemR41abrY = {
			"addChild": _addChildSnsz4G
	}
		const _forceSettingParentChildeQOP9x = true;
		const _returnValueYXuzulC = await _startVertexrm33y6S.setParent(_parentItemR41abrY, _forceSettingParentChildeQOP9x)
		const _returnValuePejnA7 = await bellmanFord(_graphFQREjqq, _startVertexrm33y6S)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedevRhU7G = true;
		const _graphgyuKFCZ = new Graph(_isDirectedevRhU7G)
		const _valuepAbnToe = null;
		const _arrayValuesGBnhCD = "5QQwouxHGVyWxKhxXVMlixyBLL3i8Sy";
		const _arrayValuesz2hs65 = {
		
	}
		const _returnValuesSpa8bT = [_arrayValuesGBnhCD, _arrayValuesz2hs65]
		const _keyCallbacke4zvClG = () => { return _returnValuesSpa8bT };
		const _newVertexXBMLUEf = new DisjointSetItem(_valuepAbnToe, _keyCallbacke4zvClG)
		const _returnValueN6SkMm4 = await _newVertexXBMLUEf.getRank()
		const _returnValuewv76Nb = await _newVertexXBMLUEf.getRank()
		const _returnValueldVDvql = await _graphgyuKFCZ.addVertex(_newVertexXBMLUEf)
		const _valueLAYXzwv = true;
		const _returnValueXOl7402 = {
		
	}
		const _keyCallbackNAFLXTG = () => { return _returnValueXOl7402 };
		const _newVertexqbHJH1c = new DisjointSetItem(_valueLAYXzwv, _keyCallbackNAFLXTG)
		const _returnValueGpStOy5 = await _newVertexqbHJH1c.getRank()
		const _returnValueUt25mdm = await _graphgyuKFCZ.addVertex(_newVertexqbHJH1c)
		const _valueaFfRuL = null;
		const _arrayValuefNyLttm = false;
		const _arrayValueEBbrfmg = "CK6hApeNsEvP";
		const _arrayValuenKEhGbc = []
		const _returnValueB3oooR = [_arrayValuefNyLttm, _arrayValueEBbrfmg, _arrayValuenKEhGbc]
		const _keyCallback1qCvMg = () => { return _returnValueB3oooR };
		const _startVertexPBe6Nlu = new DisjointSetItem(_valueaFfRuL, _keyCallback1qCvMg)
		const _charactereHvOMI5 = 3.091198715940669;
		const _isCompleteWord9d3q23 = true;
		const _parentItemnuLfag = new TrieNode(_charactereHvOMI5, _isCompleteWord9d3q23)
		const _returnValuepTcC8oj = await _parentItemnuLfag.hasChildren()
		const _characterTOEn19F = -2.7194912080197433;
		const _returnValuexQXoMXI = await _parentItemnuLfag.hasChild(_characterTOEn19F)
		const _forceSettingParentChildAX8aRYh = true;
		const _returnValueWyWEUQy = await _startVertexPBe6Nlu.setParent(_parentItemnuLfag, _forceSettingParentChildAX8aRYh)
		const _valueSz2coWe = null;
		const _returnValueA5RfTd2 = undefined;
		const _keyCallbackJ7gXjbO = () => { return _returnValueA5RfTd2 };
		const _childItemKUGeIO4 = new DisjointSetItem(_valueSz2coWe, _keyCallbackJ7gXjbO)
		const _valuepfJ8rxC = false;
		const _returnValuelvl6YhS = null;
		const _keyCallbackSp5XXm2 = () => { return _returnValuelvl6YhS };
		const _childItemgKxMtaO = new DisjointSetItem(_valuepfJ8rxC, _keyCallbackSp5XXm2)
		const _returnValuetVOLF5n = await _childItemgKxMtaO.getChildren()
		const _returnValue39sm43 = await _childItemgKxMtaO.getRank()
		const _returnValueCxkGYID = await _childItemgKxMtaO.isRoot()
		const _returnValuex1w400c = await _childItemKUGeIO4.addChild(_childItemgKxMtaO)
		const _returnValuejwdI3A3 = await _childItemKUGeIO4.getRoot()
		const _characterUhmnSbI = undefined;
		const _isCompleteWorduvIwwcp = true;
		const _parentItemKCVQiq = new TrieNode(_characterUhmnSbI, _isCompleteWorduvIwwcp)
		const _returnValueYCBqyte = await _parentItemKCVQiq.suggestChildren()
		const _returnValueDeS2uY = undefined;
		const _returnValuecYo5IbZ = () => { return _returnValueDeS2uY };
		const _characteruPAaQYB = () => { return _returnValuecYo5IbZ };
		const _returnValuefADS7pI = await _parentItemKCVQiq.removeChild(_characteruPAaQYB)
		const _returnValuemNXDAEJ = await _parentItemKCVQiq.hasChildren()
		const _returnValuewfJYRGp = await _parentItemKCVQiq.toString()
		const _forceSettingParentChildIcNsggP = false;
		const _returnValueyNO5DBg = await _childItemKUGeIO4.setParent(_parentItemKCVQiq, _forceSettingParentChildIcNsggP)
		const _returnValueibUOZnn = await _childItemKUGeIO4.getRank()
		const _returnValueG3p2vZt = await _childItemKUGeIO4.getChildren()
		const _returnValueXuyjCET = await _startVertexPBe6Nlu.addChild(_childItemKUGeIO4)
		const _returnValuemnGkwxg = await bellmanFord(_graphgyuKFCZ, _startVertexPBe6Nlu)
	});
})