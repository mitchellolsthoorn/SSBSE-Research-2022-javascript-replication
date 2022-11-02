export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuev1qKGF = false;
		const _getAllVerticesaIVkrGP = () => { return _returnValuev1qKGF };
		const _returnValuecBlNqGc = null;
		const _findEdgePXxZNmw = () => { return _returnValuecBlNqGc };
		const _graph05twdb = {
			"getAllVertices": _getAllVerticesaIVkrGP,
		"findEdge": _findEdgePXxZNmw
	}
		const _startVertexwrqhYIo = "8nxkbAXBh4gs2";
		const _returnValuebMqCKkj = await dijkstra(_graph05twdb, _startVertexwrqhYIo)
	});

	it('test for dijkstra', async () => {
		const _isDirectedAewn8m = true;
		const _graphv26oLFj = new Graph(_isDirectedAewn8m)
		const _returnValueCY4YIgP = await _graphv26oLFj.getAdjacencyMatrix()
		const _returnValuecAk81QR = await _graphv26oLFj.toString()
		const _returnValueWOZQgAx = await _graphv26oLFj.toString()
		const _returnValueOsbtvFg = null;
		const _getKeyPrEwsQt = () => { return _returnValueOsbtvFg };
		const _startVertexvcRh8dK = {
			"getKey": _getKeyPrEwsQt
	}
		const _returnValuee4BoOHM = await dijkstra(_graphv26oLFj, _startVertexvcRh8dK)
	});
})