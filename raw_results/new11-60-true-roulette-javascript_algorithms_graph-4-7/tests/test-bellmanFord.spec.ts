export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueaKZoNWC = "2TjLd5CgcJCqkgNhzAOTMjI58GCBmU8Q7CUrLDNE";
		const _getAllVerticesR2BCtxm = () => { return _returnValueaKZoNWC };
		const _returnValueRJFtvg2 = undefined;
		const _getVertexByKeykfzETUT = () => { return _returnValueRJFtvg2 };
		const _returnValuecfizR8 = false;
		const _getNeighborsp6PLpOs = () => { return _returnValuecfizR8 };
		const _returnValueZU6phto = {
		
	}
		const _findEdgevstcf9C = () => { return _returnValueZU6phto };
		const _graphs9l1aoZ = {
			"getAllVertices": _getAllVerticesR2BCtxm,
		"getVertexByKey": _getVertexByKeykfzETUT,
		"getNeighbors": _getNeighborsp6PLpOs,
		"findEdge": _findEdgevstcf9C
	}
		const _returnValueRvk57uB = null;
		const _startVertexFhNpnV = () => { return _returnValueRvk57uB };
		const _returnValueiUkq2G4 = await bellmanFord(_graphs9l1aoZ, _startVertexFhNpnV)
	});

	it('test for bellmanFord', async () => {
		const _arrayValueje8zgnk = {
		
	}
		const _arrayValuehiLgIkc = "7HeYuaK33ZdOUm3ojKOck3NLYdhWfl9Oj39UTFR6XCVSxM9efbxdQmOXdv";
		const _arrayValueLNVWh0e = "vR4U5sNzWQti3kJp3KKaJ2seLSa6Cj5Ff9XoFz5x";
		const _graphXNCMlpX = [_arrayValueje8zgnk, _arrayValuehiLgIkc, _arrayValueLNVWh0e]
		const _returnValueTB2fOeT = 8.619654242162557;
		const _getKey9LVEJQ = () => { return _returnValueTB2fOeT };
		const _startVertexoxrvnYS = {
			"getKey": _getKey9LVEJQ
	}
		const _returnValueDLFZDGO = await bellmanFord(_graphXNCMlpX, _startVertexoxrvnYS)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedd5FfdWl = false;
		const _graphFDO47a = new Graph(_isDirectedd5FfdWl)
		const _returnValuef6nb5lQ = await _graphFDO47a.getAdjacencyMatrix()
		const _returnValuepi80qv9 = await _graphFDO47a.getAllVertices()
		const _returnValueELjhYWS = null;
		const _getKeyjd5tMyX = () => { return _returnValueELjhYWS };
		const _startVertexEame2rF = {
			"getKey": _getKeyjd5tMyX
	}
		const _returnValueEnJsVPb = await bellmanFord(_graphFDO47a, _startVertexEame2rF)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedA1nXhtT = false;
		const _graphp9xWiIS = new Graph(_isDirectedA1nXhtT)
		const _returnValueeIuApXB = undefined;
		const _getKeyjAPlg8S = () => { return _returnValueeIuApXB };
		const _newVertexwwllyRF = {
			"getKey": _getKeyjAPlg8S
	}
		const _returnValueT9oKGAQ = await _graphp9xWiIS.addVertex(_newVertexwwllyRF)
		const _returnValueIK6gwOQ = await _graphp9xWiIS.getVerticesIndices()
		const _returnValueXMWkHV9 = await _graphp9xWiIS.getWeight()
		const _valuemR1QPeZ = {
		
	}
		const _returnValueB0iXPRO = "UVAe9Ma1SYmOqZLgKQnmtYpfZagF5icDlGiIu7xhjI6v2EZ67npOlGRHUeufBJ780SeAb3trF9O24ZcoMH2EU";
		const _keyCallbackghdA6I = () => { return _returnValueB0iXPRO };
		const _startVertexnmApwhw = new DisjointSetItem(_valuemR1QPeZ, _keyCallbackghdA6I)
		const _returnValuekJPBkpD = await _startVertexnmApwhw.getRoot()
		const _returnValuepjS2ixm = await _startVertexnmApwhw.getKey()
		const _parentItemBjXsnyz = null;
		const _forceSettingParentChildiwxw7PQ = false;
		const _returnValueD7Nm3UO = await _startVertexnmApwhw.setParent(_parentItemBjXsnyz, _forceSettingParentChildiwxw7PQ)
		const _returnValueMDH0X5w = await _startVertexnmApwhw.getRank()
		const _returnValuebRDHiXz = await bellmanFord(_graphp9xWiIS, _startVertexnmApwhw)
	});
})