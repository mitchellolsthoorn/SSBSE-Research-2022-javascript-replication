export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuew1Iq63X = "5orCXSY5jeIdQFYSoCl2uIB3e1Efzeb6lwgCortzxOmVRw1soTELiYAEolqdjmBTe4deSS7QjklY8";
		const _returnValuecT9CpPF = () => { return _returnValuew1Iq63X };
		const _getAllVerticesREADXhp = () => { return _returnValuecT9CpPF };
		const _arrayValueQeC4R53 = "XesvN5vat7SDV9plyW";
		const _arrayValue10wEF7 = undefined;
		const _arrayValueL2KN5im = 0.11039334303490378;
		const _arrayValuefYpXFyZ = -2.7522660882139647;
		const _arrayValueli2Vt6L = null;
		const _arrayValuecjP2FI3 = [_arrayValueL2KN5im, _arrayValuefYpXFyZ, _arrayValueli2Vt6L]
		const _returnValuevilRcQ = [_arrayValueQeC4R53, _arrayValue10wEF7, _arrayValuecjP2FI3]
		const _findEdgedC21bH1 = () => { return _returnValuevilRcQ };
		const _graphGmq4GLp = {
			"getAllVertices": _getAllVerticesREADXhp,
		"findEdge": _findEdgedC21bH1
	}
		const _getKeyqOvWsDp = undefined;
		const _startVertexicJamfl = {
			"getKey": _getKeyqOvWsDp
	}
		const _returnValuePgOjzon = await dijkstra(_graphGmq4GLp, _startVertexicJamfl)
	});

	it('test for dijkstra', async () => {
		const _isDirectedmdWdMEY = true;
		const _graphyjiiU2a = new Graph(_isDirectedmdWdMEY)
		const _returnValueDrHfsIE = await _graphyjiiU2a.toString()
		const _arrayValueO9WUZG0 = false;
		const _arrayValueD5t5QUv = []
		const _returnValueIT9UK4M = -7.677151808858424;
		const _arrayValuet4SRgt6 = () => { return _returnValueIT9UK4M };
		const _returnValuegWp5YHv = null;
		const _arrayValues6g8nx = () => { return _returnValuegWp5YHv };
		const _returnValuejFR4t2a = [_arrayValueO9WUZG0, _arrayValueD5t5QUv, _arrayValuet4SRgt6, _arrayValues6g8nx]
		const _returnValuehIYF6RQ = () => { return _returnValuejFR4t2a };
		const _getKeyrzmMIpr = () => { return _returnValuehIYF6RQ };
		const _startVertexyXqbgN6 = {
			"getKey": _getKeyrzmMIpr
	}
		const _returnValueWMyAo2S = await dijkstra(_graphyjiiU2a, _startVertexyXqbgN6)
	});

	it('test for dijkstra', async () => {
		const _isDirectedw8ZBeTK = false;
		const _graphSDJkq0q = new Graph(_isDirectedw8ZBeTK)
		const _returnValueR47UOED = await _graphSDJkq0q.reverse()
		const _valueNovevaq = true;
		const _returnValueWTjeI6E = "x6rUli8Ex4HICWnrcDU2eiLMC46xAjVIWNC1ly3r";
		const _keyCallback4mDIb6 = () => { return _returnValueWTjeI6E };
		const _startVertexbWLy9t3 = new DisjointSetItem(_valueNovevaq, _keyCallback4mDIb6)
		const _returnValueE2iJzlz = await _startVertexbWLy9t3.isRoot()
		const _returnValuesksdUEn = await _startVertexbWLy9t3.isRoot()
		const _characterkqfSW6s = false;
		const _isCompleteWordaGltuL3 = true;
		const _parentItemMn8F90y = new TrieNode(_characterkqfSW6s, _isCompleteWordaGltuL3)
		const _returnValuel6E1x87 = await _parentItemMn8F90y.suggestChildren()
		const _returnValuenaPVEOs = await _parentItemMn8F90y.toString()
		const _characterHHp4NLp = undefined;
		const _returnValue5KlyMi = await _parentItemMn8F90y.hasChild(_characterHHp4NLp)
		const _returnValuefw7aAiw = await _parentItemMn8F90y.hasChildren()
		const _forceSettingParentChildN1f5CZ3 = false;
		const _returnValuerOtaoXw = await _startVertexbWLy9t3.setParent(_parentItemMn8F90y, _forceSettingParentChildN1f5CZ3)
		const _returnValuexAKmIvJ = await _startVertexbWLy9t3.getKey()
		const _returnValue39w5VL = null;
		const _characterAEInDVJ = () => { return _returnValue39w5VL };
		const _isCompleteWordGMUAcBi = true;
		const _parentItemKvLE2Ho = new TrieNode(_characterAEInDVJ, _isCompleteWordGMUAcBi)
		const _returnValuekK0SwDc = await _parentItemKvLE2Ho.suggestChildren()
		const _returnValuen3mTa8 = await _parentItemKvLE2Ho.suggestChildren()
		const _forceSettingParentChildHpCdSd = false;
		const _returnValueVr8d852 = await _startVertexbWLy9t3.setParent(_parentItemKvLE2Ho, _forceSettingParentChildHpCdSd)
		const _endVertexYbLLNze = undefined;
		const _returnValueTw0p3zs = await _graphSDJkq0q.findEdge(_startVertexbWLy9t3, _endVertexYbLLNze)
		const _returnValueDukelN = await _graphSDJkq0q.reverse()
		const _valueGx23943 = null;
		const _startVertexZFFeXLY = new GraphVertex(_valueGx23943)
		const _returnValueSyb53nz = await _startVertexZFFeXLY.deleteAllEdges()
		const _returnValueZhhVANz = await _startVertexZFFeXLY.deleteAllEdges()
		const _returnValueDmX0IKY = await _startVertexZFFeXLY.getKey()
		const _returnValueHn7sI0u = await dijkstra(_graphSDJkq0q, _startVertexZFFeXLY)
	});
})