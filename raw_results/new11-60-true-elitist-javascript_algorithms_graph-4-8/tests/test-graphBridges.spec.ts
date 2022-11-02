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
		const _returnValuekNP6PYL = "IbXKpY78o";
		const _getAllVerticesWOPf5KX = () => { return _returnValuekNP6PYL };
		const _returnValueTUbS90Z = {
		
	}
		const _findEdgeAbeEOAZ = () => { return _returnValueTUbS90Z };
		const _graphHtlhwZ5 = {
			"getAllVertices": _getAllVerticesWOPf5KX,
		"findEdge": _findEdgeAbeEOAZ
	}
		const _returnValuebg0mATK = await graphBridges(_graphHtlhwZ5)
	});

	it('test for graphBridges', async () => {
		const _isDirectedLfJa4n = false;
		const _graphDh3kFrd = new Graph(_isDirectedLfJa4n)
		const _arrayValuexioh2c = []
		const _valueXAg2DzA = [_arrayValuexioh2c]
		const _returnValueywbqHU5 = true;
		const _keyCallbackCBWCHbR = () => { return _returnValueywbqHU5 };
		const _newVertexGoFkX7i = new DisjointSetItem(_valueXAg2DzA, _keyCallbackCBWCHbR)
		const _returnValueuFmfiMG = await _newVertexGoFkX7i.getRoot()
		const _returnValueBaBxpaB = await _newVertexGoFkX7i.getKey()
		const _returnValueNrEv7uv = await _newVertexGoFkX7i.getRoot()
		const _returnValueIln6cR = await _newVertexGoFkX7i.getRank()
		const _returnValueLmUM0b1 = await _newVertexGoFkX7i.isRoot()
		const _returnValueRIIkQM2 = await _graphDh3kFrd.addVertex(_newVertexGoFkX7i)
		const _returnValuewaHNebb = await _graphDh3kFrd.getVerticesIndices()
		const _returnValuemuNMsl = await graphBridges(_graphDh3kFrd)
	});
})