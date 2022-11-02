export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphGFwou0E = false;
		const _returnValueIrj41dN = undefined;
		const _getKeysE7dqWP = () => { return _returnValueIrj41dN };
		const _startVertexOTs07Bm = {
			"getKey": _getKeysE7dqWP
	}
		const _returnValueYDJsdID = await dijkstra(_graphGFwou0E, _startVertexOTs07Bm)
	});

	it('test for dijkstra', async () => {
		const _returnValuepvKO413 = []
		const _getAllVerticesxFNz9dK = () => { return _returnValuepvKO413 };
		const _returnValueBGyNeq = -4.2371813308149475;
		const _findEdgekIefkV = () => { return _returnValueBGyNeq };
		const _graphAB8Uzqb = {
			"getAllVertices": _getAllVerticesxFNz9dK,
		"findEdge": _findEdgekIefkV
	}
		const _returnValuenejullv = null;
		const _getKeyLdM0KLY = () => { return _returnValuenejullv };
		const _startVertexpzVz1bh = {
			"getKey": _getKeyLdM0KLY
	}
		const _returnValueEPNOLzQ = await dijkstra(_graphAB8Uzqb, _startVertexpzVz1bh)
	});
})