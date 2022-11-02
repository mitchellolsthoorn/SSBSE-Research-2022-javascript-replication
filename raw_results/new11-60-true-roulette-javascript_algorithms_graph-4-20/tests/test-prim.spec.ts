export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValue0EUHT5 = null;
		const _arrayValueKIpspyb = null;
		const _graphwpFJUNC = [_arrayValue0EUHT5, _arrayValueKIpspyb]
		const _returnValuecbblE8y = await prim(_graphwpFJUNC)
	});

	it('test for prim', async () => {
		const _arrayValueTCXmhkp = "TiwqVa7nJQUCaFv1KY7Mu5TryHAbcNZ59k81IRwyTbQAYQwWXNj8Hm6Yd";
		const _arrayValueDkqrSpX = "YegtbC62bpLlGhbo0K";
		const _isDirectedFxHAYPP = [_arrayValueTCXmhkp, _arrayValueDkqrSpX]
		const _returnValueqhhLnn6 = null;
		const _getAllVerticesXPXsfk8 = () => { return _returnValueqhhLnn6 };
		const _graphJaOkQAw = {
			"isDirected": _isDirectedFxHAYPP,
		"getAllVertices": _getAllVerticesXPXsfk8
	}
		const _returnValuegl0FmDt = await prim(_graphJaOkQAw)
	});

	it('test for prim', async () => {
		const _isDirectedLXY3JQV = false;
		const _graphGXJjWQH = new Graph(_isDirectedLXY3JQV)
		const _returnValueWao7lBL = await _graphGXJjWQH.getAdjacencyMatrix()
		const _valuelZ7P2AB = 2.5327135338117817;
		const _returnValueSxAbY2H = true;
		const _keyCallbackq7N8Xrc = () => { return _returnValueSxAbY2H };
		const _newVertexnh6uLFp = new DisjointSetItem(_valuelZ7P2AB, _keyCallbackq7N8Xrc)
		const _returnValueo2GiEjY = await _newVertexnh6uLFp.getRank()
		const _returnValueh8GmGXU = await _newVertexnh6uLFp.getRank()
		const _returnValuezn4ctoI = await _newVertexnh6uLFp.getChildren()
		const _returnValueG6XSiNp = await _newVertexnh6uLFp.getRoot()
		const _returnValueLCIEEl = await _graphGXJjWQH.addVertex(_newVertexnh6uLFp)
		const _returnValuepFLsi3u = await prim(_graphGXJjWQH)
	});
})