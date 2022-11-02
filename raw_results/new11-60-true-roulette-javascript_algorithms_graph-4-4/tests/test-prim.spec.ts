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
		const _isDirectedGcBE5ut = 3.9538584316374745;
		const _returnValueE5MIEHC = 5.363030891784874;
		const _getAllVerticestiBjk6x = () => { return _returnValueE5MIEHC };
		const _graphUzXpsI = {
			"isDirected": _isDirectedGcBE5ut,
		"getAllVertices": _getAllVerticestiBjk6x
	}
		const _returnValueCabc7fO = await prim(_graphUzXpsI)
	});

	it('test for prim', async () => {
		const _isDirectedGFi3n6P = false;
		const _graphb0PN81F = new Graph(_isDirectedGFi3n6P)
		const _returnValueCqFsojF = -4.3487783006164005;
		const _getNeighborsfvT4TAi = () => { return _returnValueCqFsojF };
		const _vertexjhKKTa = {
			"getNeighbors": _getNeighborsfvT4TAi
	}
		const _returnValueeSFclmC = await _graphb0PN81F.getNeighbors(_vertexjhKKTa)
		const _returnValueGJdOFA = await _graphb0PN81F.getAdjacencyMatrix()
		const _returnValued4vXo0o = await _graphb0PN81F.getWeight()
		const _valuebTWsILK = null;
		const _returnValuewCFduoq = undefined;
		const _keyCallbackQkQqkdS = () => { return _returnValuewCFduoq };
		const _newVertexhHssx2 = new DisjointSetItem(_valuebTWsILK, _keyCallbackQkQqkdS)
		const _returnValueH0QGTCc = await _newVertexhHssx2.getChildren()
		const _returnValueVg99eg = await _newVertexhHssx2.getRoot()
		const _returnValueXEoRsLz = -3.8832677760365497;
		const _valueFzlnOEB = () => { return _returnValueXEoRsLz };
		const _returnValuewxFlZ4E = {
		
	}
		const _keyCallbackQcFoo2N = () => { return _returnValuewxFlZ4E };
		const _childItemIH06DmJ = new DisjointSetItem(_valueFzlnOEB, _keyCallbackQcFoo2N)
		const _valueTY09QqP = {
		
	}
		const _returnValueXYI0g5L = false;
		const _keyCallbackkgKiHBE = () => { return _returnValueXYI0g5L };
		const _childItemlmzvcY0 = new DisjointSetItem(_valueTY09QqP, _keyCallbackkgKiHBE)
		const _returnValueFkUif35 = await _childItemlmzvcY0.getRoot()
		const _returnValueThlm0K7 = await _childItemIH06DmJ.addChild(_childItemlmzvcY0)
		const _returnValueNnXTMV = await _childItemIH06DmJ.getChildren()
		const _returnValueK9CRpT = await _childItemIH06DmJ.getRoot()
		const _returnValueLcLsMJ = await _childItemIH06DmJ.getRank()
		const _returnValueuaRAI31 = await _newVertexhHssx2.addChild(_childItemIH06DmJ)
		const _arrayValueh7Kf2sd = "2ERzRihlSP5XLNCT8U6i8HWM9ywHFN4qk5sHVuB7twu2y8In74zRYWLgKbgazAhs1bUkOAWygoykGl3riibuOcw7EzkbN1";
		const _arrayValueiHGtIvH = null;
		const _arrayValuemPyfsa = null;
		const _arrayValueh5Qv5mT = [_arrayValueh7Kf2sd, _arrayValueiHGtIvH, _arrayValuemPyfsa]
		const _arrayValueng9bi2O = {
		
	}
		const _returnValuesdpAzvl = [_arrayValueh5Qv5mT, _arrayValueng9bi2O]
		const _characterYOavnwC = () => { return _returnValuesdpAzvl };
		const _isCompleteWordaaATu4h = true;
		const _parentItemsh2Qlcd = new TrieNode(_characterYOavnwC, _isCompleteWordaaATu4h)
		const _characterYrhhLay = -2.816949940203588;
		const _returnValuehwCwD1u = await _parentItemsh2Qlcd.removeChild(_characterYrhhLay)
		const _returnValueNXzkqUx = await _parentItemsh2Qlcd.suggestChildren()
		const _returnValuefUVtEB = await _parentItemsh2Qlcd.hasChildren()
		const _returnValuetv7Vv0g = await _parentItemsh2Qlcd.suggestChildren()
		const _forceSettingParentChildiDsWsND = false;
		const _returnValue45brMD = await _newVertexhHssx2.setParent(_parentItemsh2Qlcd, _forceSettingParentChildiDsWsND)
		const _returnValueXspr9Ox = await _graphb0PN81F.addVertex(_newVertexhHssx2)
		const _returnValuePlx6X95 = await prim(_graphb0PN81F)
	});

	it('test for prim', async () => {
		const _isDirectedIYxUEaa = false;
		const _graphu6IvkFg = new Graph(_isDirectedIYxUEaa)
		const _returnValueDUiQlEP = await _graphu6IvkFg.getAllVertices()
		const _returnValuehWKyHyi = await _graphu6IvkFg.getAdjacencyMatrix()
		const _valuemzgkf5y = {
		
	}
		const _newVertexxIxOTUN = new GraphVertex(_valuemzgkf5y)
		const _vertexKwvZxYn = false;
		const _returnValueKXDA164 = await _newVertexxIxOTUN.hasNeighbor(_vertexKwvZxYn)
		const _returnValuemeiX3Ce = await _newVertexxIxOTUN.getNeighbors()
		const _returnValuelo25kJ6 = await _graphu6IvkFg.addVertex(_newVertexxIxOTUN)
		const _returnValueUZAevHT = await prim(_graphu6IvkFg)
	});
})