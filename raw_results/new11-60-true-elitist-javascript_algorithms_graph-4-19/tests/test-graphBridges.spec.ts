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
		const _returnValueBjGQOLu = 3.5614762144193968;
		const _getAllVerticesnSNJEb4 = () => { return _returnValueBjGQOLu };
		const _returnValuecnCqTv = undefined;
		const _findEdgeNjz3V1W = () => { return _returnValuecnCqTv };
		const _graphglBrDHX = {
			"getAllVertices": _getAllVerticesnSNJEb4,
		"findEdge": _findEdgeNjz3V1W
	}
		const _returnValueg02LsbH = await graphBridges(_graphglBrDHX)
	});

	it('test for graphBridges', async () => {
		const _isDirectedEHNUL2r = false;
		const _graphTW52m4 = new Graph(_isDirectedEHNUL2r)
		const _valueJX61QH7 = 0.4626226653388734;
		const _returnValueoPfDKVJ = null;
		const _keyCallbackqMB1zCV = () => { return _returnValueoPfDKVJ };
		const _newVertexADMuCdA = new DisjointSetItem(_valueJX61QH7, _keyCallbackqMB1zCV)
		const _returnValuekK9kw4J = await _newVertexADMuCdA.getRoot()
		const _returnValueeY67JnC = await _newVertexADMuCdA.getChildren()
		const _returnValuey5GdDFb = await _graphTW52m4.addVertex(_newVertexADMuCdA)
		const _returnValuekHlHmtR = await _graphTW52m4.getAllEdges()
		const _returnValueboa1gd3 = await graphBridges(_graphTW52m4)
	});
})