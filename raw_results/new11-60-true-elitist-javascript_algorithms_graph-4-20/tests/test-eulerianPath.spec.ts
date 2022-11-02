export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueMj6WnJi = "A7nADPaVwkOiusO";
		const _getAllEdgesGO4iycS = () => { return _returnValueMj6WnJi };
		const _returnValueRSNfGOj = undefined;
		const _getAllVerticeswuSBni = () => { return _returnValueRSNfGOj };
		const _arrayValueRUFRk5Y = undefined;
		const _returnValueBts4ZNU = [_arrayValueRUFRk5Y]
		const _deleteEdgeu4muM5e = () => { return _returnValueBts4ZNU };
		const _graphTKJiFEd = {
			"getAllEdges": _getAllEdgesGO4iycS,
		"getAllVertices": _getAllVerticeswuSBni,
		"deleteEdge": _deleteEdgeu4muM5e
	}
		const _returnValueycvUJLI = await eulerianPath(_graphTKJiFEd)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedNYu7rS7 = false;
		const _graphY1MyCsL = new Graph(_isDirectedNYu7rS7)
		const _returnValueeJ1s0sf = await _graphY1MyCsL.reverse()
		const _valuek9h40ED = {
		
	}
		const _keyCallbackWbHYSuP = false;
		const _startVertexU0EirqB = new DisjointSetItem(_valuek9h40ED, _keyCallbackWbHYSuP)
		const _valuePZWIDJV = "RxeoXeed6tUJMVnielJj7pQaffoOMzIzyfKMyhfaD66CLhGFginmer1";
		const _returnValuex3U7Q7P = undefined;
		const _returnValueMtHmK4N = () => { return _returnValuex3U7Q7P };
		const _keyCallbackQ2NcVc = () => { return _returnValueMtHmK4N };
		const _childItemGG3QM7x = new DisjointSetItem(_valuePZWIDJV, _keyCallbackQ2NcVc)
		const _returnValue7CWZxz = await _childItemGG3QM7x.getRoot()
		const _returnValuezUG3pG = await _childItemGG3QM7x.isRoot()
		const _returnValueKWBVgvZ = await _childItemGG3QM7x.getRoot()
		const _returnValueGP3ZhU6 = await _startVertexU0EirqB.addChild(_childItemGG3QM7x)
		const _valueOwmxNbF = true;
		const _returnValueJF2Qchr = false;
		const _keyCallbacks8DCyLb = () => { return _returnValueJF2Qchr };
		const _childItemOfh0iIO = new DisjointSetItem(_valueOwmxNbF, _keyCallbacks8DCyLb)
		const _returnValueOs8Fbxt = await _childItemOfh0iIO.getChildren()
		const _returnValueGiLDp5h = await _childItemOfh0iIO.getRank()
		const _returnValuejEMHOUK = await _childItemOfh0iIO.getRoot()
		const _returnValuewfx0GWJ = await _startVertexU0EirqB.addChild(_childItemOfh0iIO)
		const _returnValueUWkVHP = await _startVertexU0EirqB.getKey()
		const _returnValueI05mqSD = await _startVertexU0EirqB.getChildren()
		const _returnValueZA0hpE = null;
		const _endVertexMWMpCXf = () => { return _returnValueZA0hpE };
		const _returnValueCoEKLG = await _graphY1MyCsL.findEdge(_startVertexU0EirqB, _endVertexMWMpCXf)
		const _returnValuedrcMOdC = await eulerianPath(_graphY1MyCsL)
	});
})