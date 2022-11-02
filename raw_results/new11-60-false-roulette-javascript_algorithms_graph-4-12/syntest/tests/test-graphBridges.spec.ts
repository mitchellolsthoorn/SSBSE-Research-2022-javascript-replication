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
		const _returnValueCepTg56 = undefined;
		const _getAllVerticesujQwzNW = () => { return _returnValueCepTg56 };
		const _returnValue9wsGEE = {
		
	}
		const _findEdgePW2ti9i = () => { return _returnValue9wsGEE };
		const _graphT6qom2y = {
			"getAllVertices": _getAllVerticesujQwzNW,
		"findEdge": _findEdgePW2ti9i
	}
		const _returnValuePcZ0W4p = await graphBridges(_graphT6qom2y)
	});

	it('test for graphBridges', async () => {
		const _isDirectedm4PVkj8 = []
		const _graphbIBWWsc = new Graph(_isDirectedm4PVkj8)
		const _returnValueic56EHJ = await _graphbIBWWsc.toString()
		const _returnValuegrl2U1 = await _graphbIBWWsc.getVerticesIndices()
		const _returnValue0cYJIe = 4.544547737751888;
		const _getKeyjeZJJrX = () => { return _returnValue0cYJIe };
		const _startVertexXANzr1f = {
			"getKey": _getKeyjeZJJrX
	}
		const _endVertexNuxwUu = -2.0304604811472204;
		const _returnValueJAX6TEi = await _graphbIBWWsc.findEdge(_startVertexXANzr1f, _endVertexNuxwUu)
		const _returnValuebSOYLk = await _graphbIBWWsc.getAllEdges()
		const _valuesnTL4Yv = {
		
	}
		const _returnValueGRxTJnL = true;
		const _keyCallbackr7ulP7O = () => { return _returnValueGRxTJnL };
		const _newVertexHGCQqVK = new DisjointSetItem(_valuesnTL4Yv, _keyCallbackr7ulP7O)
		const _returnValueeC8u5We = await _newVertexHGCQqVK.getRoot()
		const _returnValuehcedQmu = await _graphbIBWWsc.addVertex(_newVertexHGCQqVK)
		const _returnValuedo3Yol = await graphBridges(_graphbIBWWsc)
	});
})