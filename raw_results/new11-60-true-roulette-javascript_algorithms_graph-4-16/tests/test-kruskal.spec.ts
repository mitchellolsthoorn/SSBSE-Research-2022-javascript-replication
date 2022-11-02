export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedFnLrTOp = -0.5653999655063746;
		const _returnValuelVZRAbD = null;
		const _getAllEdgesG18mQV2 = () => { return _returnValuelVZRAbD };
		const _arrayValueNDsWRwW = false;
		const _returnValuealJL2Ou = [_arrayValueNDsWRwW]
		const _getAllVerticesEJa8Kud = () => { return _returnValuealJL2Ou };
		const _graphn7OKtRe = {
			"isDirected": _isDirectedFnLrTOp,
		"getAllEdges": _getAllEdgesG18mQV2,
		"getAllVertices": _getAllVerticesEJa8Kud
	}
		const _returnValueBWhl8f = await kruskal(_graphn7OKtRe)
	});

	it('test for kruskal', async () => {
		const _isDirectedwhFcyhH = false;
		const _graphs59oelp = new Graph(_isDirectedwhFcyhH)
		const _returnValueDDxHXb = await _graphs59oelp.reverse()
		const _returnValueWFzs5r6 = await _graphs59oelp.getAdjacencyMatrix()
		const _returnValueu9m5xY = await _graphs59oelp.reverse()
		const _vertexKeyj9bCii = undefined;
		const _returnValueSWNkFQE = await _graphs59oelp.getVertexByKey(_vertexKeyj9bCii)
		const _returnValueKSwzsu = await _graphs59oelp.getAdjacencyMatrix()
		const _returnValuezWBlgCk = await kruskal(_graphs59oelp)
	});
})