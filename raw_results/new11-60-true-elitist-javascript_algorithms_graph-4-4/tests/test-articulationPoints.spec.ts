export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueL7CQ9kB = null;
		const _getAllVerticesblSPKNf = () => { return _returnValueL7CQ9kB };
		const _graphJMOqZjS = {
			"getAllVertices": _getAllVerticesblSPKNf
	}
		const _returnValuerJDeh1e = await articulationPoints(_graphJMOqZjS)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedUdGhtl8 = true;
		const _graphQO8K5zf = new Graph(_isDirectedUdGhtl8)
		const _returnValueesfp8Bu = []
		const _getKeyaSalYog = () => { return _returnValueesfp8Bu };
		const _newVertexqMmSLQg = {
			"getKey": _getKeyaSalYog
	}
		const _returnValueMbmPtHx = await _graphQO8K5zf.addVertex(_newVertexqMmSLQg)
		const _returnValueFlyF47i = await _graphQO8K5zf.toString()
		const _returnValueLpkZd80 = await _graphQO8K5zf.getWeight()
		const _returnValueNRlNZj = null;
		const _getNeighborsuDqldr = () => { return _returnValueNRlNZj };
		const _vertexF7GcMRP = {
			"getNeighbors": _getNeighborsuDqldr
	}
		const _returnValuevNlAIoU = await _graphQO8K5zf.getNeighbors(_vertexF7GcMRP)
		const _returnValueMphPvUx = await articulationPoints(_graphQO8K5zf)
	});
})