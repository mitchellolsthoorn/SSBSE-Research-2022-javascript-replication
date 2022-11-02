export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValuexiPqAB = -2.845607526711297;
		const _isDirectedvSSqddv = [_arrayValuexiPqAB]
		const _returnValueKfBXkli = false;
		const _getAllVerticesJkoDkWB = () => { return _returnValueKfBXkli };
		const _graphzjVG1X = {
			"isDirected": _isDirectedvSSqddv,
		"getAllVertices": _getAllVerticesJkoDkWB
	}
		const _returnValuecQJf7g = await prim(_graphzjVG1X)
	});

	it('test for prim', async () => {
		const _isDirectedSwKLSyY = false;
		const _graphG07fJfe = new Graph(_isDirectedSwKLSyY)
		const _returnValuedbOx5rQ = {
		
	}
		const _valueQD66QDy = () => { return _returnValuedbOx5rQ };
		const _returnValue1bKvbL = null;
		const _keyCallbackbU1qsFv = () => { return _returnValue1bKvbL };
		const _newVertexuBGq0U = new DisjointSetItem(_valueQD66QDy, _keyCallbackbU1qsFv)
		const _returnValueauHP4u = await _newVertexuBGq0U.getChildren()
		const _returnValuegk4RrsI = await _newVertexuBGq0U.getRank()
		const _characterIY2NKtB = undefined;
		const _isCompleteWordc0fDxC7 = true;
		const _parentItemdv4gwXF = new TrieNode(_characterIY2NKtB, _isCompleteWordc0fDxC7)
		const _characterOQf3I4 = false;
		const _returnValueF1RTQB2 = await _parentItemdv4gwXF.getChild(_characterOQf3I4)
		const _returnValuegNqpesl = await _parentItemdv4gwXF.hasChildren()
		const _forceSettingParentChildyLkPta = true;
		const _returnValuepvtSLpA = await _newVertexuBGq0U.setParent(_parentItemdv4gwXF, _forceSettingParentChildyLkPta)
		const _returnValueL6TGmUk = await _graphG07fJfe.addVertex(_newVertexuBGq0U)
		const _returnValueR0PMU2 = await _graphG07fJfe.getVerticesIndices()
		const _returnValuenMneML = "mbuzohqsJat2YXhxJtHvdrY4UiQnT7YIt8zPw8maBrs5s24";
		const _getNeighborsEdSvuDx = () => { return _returnValuenMneML };
		const _vertexKsjxYj = {
			"getNeighbors": _getNeighborsEdSvuDx
	}
		const _returnValueS6k5gxf = await _graphG07fJfe.getNeighbors(_vertexKsjxYj)
		const _returnValueDmZ5Yd7 = await prim(_graphG07fJfe)
	});
})