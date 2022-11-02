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
		const _arrayValueZHKQ8Pa = false;
		const _arrayValueIE5XgSg = -9.74771469106215;
		const _arrayValueVArSCT2 = "uqL3N0eXhgSzI3mHYnauefycuJ8NJRhLJjrduIF3M5NJrLyy";
		const _returnValueAAYYuCv = [_arrayValueZHKQ8Pa, _arrayValueIE5XgSg, _arrayValueVArSCT2]
		const _getAllVerticesC3rumAP = () => { return _returnValueAAYYuCv };
		const _returnValuepWDt6iT = null;
		const _findEdgeviZVqng = () => { return _returnValuepWDt6iT };
		const _graphAADaPI = {
			"getAllVertices": _getAllVerticesC3rumAP,
		"findEdge": _findEdgeviZVqng
	}
		const _returnValueBR55wa = await graphBridges(_graphAADaPI)
	});

	it('test for graphBridges', async () => {
		const _isDirectedBkzKJBE = true;
		const _graphDchb2us = new Graph(_isDirectedBkzKJBE)
		const _vertexKeyJgLN8To = undefined;
		const _returnValueBjnGa12 = await _graphDchb2us.getVertexByKey(_vertexKeyJgLN8To)
		const _valuevFaLVWL = {
		
	}
		const _arrayValuecP5vt8Q = undefined;
		const _returnValueDRDxgxy = [_arrayValuecP5vt8Q]
		const _keyCallbackgoRggAA = () => { return _returnValueDRDxgxy };
		const _newVertexfykpcYs = new DisjointSetItem(_valuevFaLVWL, _keyCallbackgoRggAA)
		const _returnValueHrvoSTW = await _newVertexfykpcYs.getRank()
		const _returnValueWK8RnSQ = await _newVertexfykpcYs.getKey()
		const _returnValueJXzKFLK = await _newVertexfykpcYs.getKey()
		const _returnValueZ2h8a8M = await _newVertexfykpcYs.getKey()
		const _returnValuevYGHta6 = await _graphDchb2us.addVertex(_newVertexfykpcYs)
		const _returnValueF5rFErB = await _graphDchb2us.getAllVertices()
		const _returnValuem4YPr22 = await graphBridges(_graphDchb2us)
	});
})