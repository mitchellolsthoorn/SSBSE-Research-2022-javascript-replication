export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueucdgBMU = "ozy3lpGGtXO6DWw86eVx1Sq10V6sePUi5n12qIzGRpfmCxRh1Cfc2mmU6OprKXUu";
		const _returnValuehU7aqfk = [_arrayValueucdgBMU]
		const _getAllVerticesmNOHzDV = () => { return _returnValuehU7aqfk };
		const _returnValuehhqMNHW = 0.9448209926201283;
		const _findEdgeb9D3eXU = () => { return _returnValuehhqMNHW };
		const _graphmVxagYX = {
			"getAllVertices": _getAllVerticesmNOHzDV,
		"findEdge": _findEdgeb9D3eXU
	}
		const _returnValuePjbnw0J = await graphBridges(_graphmVxagYX)
	});

	it('test for graphBridges', async () => {
		const _isDirectedk3NueRx = "s1KjHDzuXJVfDgA7Qk2JR16PgFL8q4HENPuuwJL78xPa50je997leBTARZ";
		const _graphsbwiaPb = new Graph(_isDirectedk3NueRx)
		const _returnValuecx2Rvub = await _graphsbwiaPb.getAdjacencyMatrix()
		const _valueVuyN4Va = "R68dnMutsijObQQ";
		const _returnValuec5q2Ggw = false;
		const _keyCallbackBvA43bm = () => { return _returnValuec5q2Ggw };
		const _newVertexTA1H193 = new DisjointSetItem(_valueVuyN4Va, _keyCallbackBvA43bm)
		const _returnValuezdvDxk8 = null;
		const _valueINumhWv = () => { return _returnValuezdvDxk8 };
		const _arrayValuekNjtgW3 = false;
		const _arrayValueAn5ffWz = null;
		const _arrayValuepDWTPPy = 6.799795625690063;
		const _arrayValuem1laDmC = [_arrayValueAn5ffWz, _arrayValuepDWTPPy]
		const _returnValuexzX7PSF = [_arrayValuekNjtgW3, _arrayValuem1laDmC]
		const _keyCallbackhY99Cs = () => { return _returnValuexzX7PSF };
		const _childItemIwK4B4G = new DisjointSetItem(_valueINumhWv, _keyCallbackhY99Cs)
		const _returnValueXMJyoN = await _childItemIwK4B4G.getRoot()
		const _returnValue97blNK = await _childItemIwK4B4G.getKey()
		const _returnValueBWurf2w = await _newVertexTA1H193.addChild(_childItemIwK4B4G)
		const _returnValuepGgf8J = await _graphsbwiaPb.addVertex(_newVertexTA1H193)
		const _returnValuexleim7x = await graphBridges(_graphsbwiaPb)
	});
})