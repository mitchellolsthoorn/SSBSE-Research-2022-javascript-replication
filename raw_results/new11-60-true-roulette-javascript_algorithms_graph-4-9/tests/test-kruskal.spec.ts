export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphkHK1Jrf = "FL8H6yTRXTu42nShgpx5NJxAMltaVJuPI2qNBJoLo6qUUmNS7nd";
		const _returnValueiYsKHHY = await kruskal(_graphkHK1Jrf)
	});

	it('test for kruskal', async () => {
		const _isDirectedKo09cGU = false;
		const _graphFTi4Ef = new Graph(_isDirectedKo09cGU)
		const _returnValueIjqLQi3 = await _graphFTi4Ef.getAllVertices()
		const _valuevtpNPNp = undefined;
		const _returnValuemDpQRpS = {
		
	}
		const _keyCallbackucvPFJf = () => { return _returnValuemDpQRpS };
		const _newVertexRckZ37q = new DisjointSetItem(_valuevtpNPNp, _keyCallbackucvPFJf)
		const _characterwMWjEwc = null;
		const _isCompleteWordPqljq4b = true;
		const _parentIteme0hIUP = new TrieNode(_characterwMWjEwc, _isCompleteWordPqljq4b)
		const _returnValuekQEHPC = await _parentIteme0hIUP.suggestChildren()
		const _forceSettingParentChildqpFK1Ze = true;
		const _returnValuepA6reif = await _newVertexRckZ37q.setParent(_parentIteme0hIUP, _forceSettingParentChildqpFK1Ze)
		const _returnValueQqfZlgx = await _newVertexRckZ37q.isRoot()
		const _returnValuew3o21Mt = await _graphFTi4Ef.addVertex(_newVertexRckZ37q)
		const _returnValuepsvngP = await kruskal(_graphFTi4Ef)
	});

	it('test for kruskal', async () => {
		const _arrayValueXExKz9E = 4.191110952478365;
		const _isDirectedeecLFYK = [_arrayValueXExKz9E]
		const _returnValueqxNhLpp = -3.750172940142848;
		const _getAllEdgesHU3Yk7t = () => { return _returnValueqxNhLpp };
		const _returnValuelEDBL2y = null;
		const _getAllVerticesyhLCzd5 = () => { return _returnValuelEDBL2y };
		const _graphTqbxRgp = {
			"isDirected": _isDirectedeecLFYK,
		"getAllEdges": _getAllEdgesHU3Yk7t,
		"getAllVertices": _getAllVerticesyhLCzd5
	}
		const _returnValuecAgIjp3 = await kruskal(_graphTqbxRgp)
	});
})