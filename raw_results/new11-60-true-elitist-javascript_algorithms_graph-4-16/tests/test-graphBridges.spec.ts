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
		const _returnValueomIiozj = 6.215599114219835;
		const _getAllVerticesoBK8bzP = () => { return _returnValueomIiozj };
		const _returnValuecQFF4R5 = undefined;
		const _findEdgeT2FuWYd = () => { return _returnValuecQFF4R5 };
		const _graphbiMu9cx = {
			"getAllVertices": _getAllVerticesoBK8bzP,
		"findEdge": _findEdgeT2FuWYd
	}
		const _returnValuev4dn15c = await graphBridges(_graphbiMu9cx)
	});

	it('test for graphBridges', async () => {
		const _isDirectedcoBzpGm = false;
		const _graphNqDKTJK = new Graph(_isDirectedcoBzpGm)
		const _returnValuemhMjQ6h = await _graphNqDKTJK.getAllEdges()
		const _returnValueHTS0al = await _graphNqDKTJK.getAdjacencyMatrix()
		const _arrayValueOPOFLuo = null;
		const _valueSqZYPp = [_arrayValueOPOFLuo]
		const _returnValueE6kiHc = false;
		const _keyCallbackMihF9p = () => { return _returnValueE6kiHc };
		const _newVertexdxdMoxt = new DisjointSetItem(_valueSqZYPp, _keyCallbackMihF9p)
		const _returnValueFKScT6 = await _newVertexdxdMoxt.getKey()
		const _returnValueDMWmxom = await _newVertexdxdMoxt.isRoot()
		const _returnValueLyCvZ2m = await _graphNqDKTJK.addVertex(_newVertexdxdMoxt)
		const _returnValueEUiz03G = await graphBridges(_graphNqDKTJK)
	});
})