export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuezpqmWOc = undefined;
		const _getAllEdgesGnMziJa = () => { return _returnValuezpqmWOc };
		const _returnValueGlUS9UD = undefined;
		const _getAllVerticesXeuU6U = () => { return _returnValueGlUS9UD };
		const _returnValuexyGUc2 = false;
		const _returnValueXxLXNh = () => { return _returnValuexyGUc2 };
		const _deleteEdgeI3JRt6i = () => { return _returnValueXxLXNh };
		const _graphOAd099u = {
			"getAllEdges": _getAllEdgesGnMziJa,
		"getAllVertices": _getAllVerticesXeuU6U,
		"deleteEdge": _deleteEdgeI3JRt6i
	}
		const _returnValueXb26bUA = await eulerianPath(_graphOAd099u)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedomBfwZ7 = false;
		const _graphHnoBXH = new Graph(_isDirectedomBfwZ7)
		const _vertexKeyvgkAOCd = "Ouc4tbIF8b4MLpKhOLtS48x1OSvtg4gzOazvTKtXvTAn";
		const _returnValuex8LF32T = await _graphHnoBXH.getVertexByKey(_vertexKeyvgkAOCd)
		const _returnValuemidVa0N = await _graphHnoBXH.reverse()
		const _returnValueI5U1PuE = await _graphHnoBXH.getAllVertices()
		const _returnValueXS71ssr = await _graphHnoBXH.getAdjacencyMatrix()
		const _returnValueBWyTjW = await _graphHnoBXH.toString()
		const _returnValueNeMraK9 = await eulerianPath(_graphHnoBXH)
	});
})