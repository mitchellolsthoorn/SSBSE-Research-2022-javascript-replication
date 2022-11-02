export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueD0EoVnr = null;
		const _graph3Dz1k4 = () => { return _returnValueD0EoVnr };
		const _returnValuecMkxLUf = "m7VsDdk6SfZVOJxvIZ1MfroLaNXx2KGYKhsX1A35IjDxql3vRarodDOyXeMJgtkkF6ihwahDSuCzEkfdGJGn4ULIrtFB";
		const _getKeyTCLZYLb = () => { return _returnValuecMkxLUf };
		const _startVertexjh05eWb = {
			"getKey": _getKeyTCLZYLb
	}
		const _returnValuecaZTiY = await dijkstra(_graph3Dz1k4, _startVertexjh05eWb)
	});

	it('test for dijkstra', async () => {
		const _isDirectedHGrZCuZ = false;
		const _graphKmXJODr = new Graph(_isDirectedHGrZCuZ)
		const _returnValueL4qbaTo = await _graphKmXJODr.getAllEdges()
		const _returnValueR8QpyzD = await _graphKmXJODr.getVerticesIndices()
		const _returnValuex16Jo6F = await _graphKmXJODr.getWeight()
		const _returnValueQgn4ZK7 = await _graphKmXJODr.getVerticesIndices()
		const _returnValuez5FXrBn = undefined;
		const _getKeyVejP1Fi = () => { return _returnValuez5FXrBn };
		const _startVertexV9Kz0Gx = {
			"getKey": _getKeyVejP1Fi
	}
		const _returnValueDAd1eE7 = await dijkstra(_graphKmXJODr, _startVertexV9Kz0Gx)
	});
})