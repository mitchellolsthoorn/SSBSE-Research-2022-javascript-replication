export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _isDirectedMQOEmoV = "lQI6Sc11ifT6q7ghWTxHFlHHwCDIvHnlXycv9l3KzDSbvQq7Feubgv2STMq643DI0flJDbGPyREb5LIwsD6ULQNHdJU1I6EKV";
		const _graphfEodrL = new Graph(_isDirectedMQOEmoV)
		const _returnValuejsPzLrk = await _graphfEodrL.reverse()
		const _returnValuewzyuIl1 = "U5aJkhQJsTsHw8imPf4rxlpFsWM1djacw8";
		const _getKeyngnx4sB = () => { return _returnValuewzyuIl1 };
		const _startVertexxGkJmqF = {
			"getKey": _getKeyngnx4sB
	}
		const _endVertexWd6CQp2 = null;
		const _returnValuet1kMDwy = await _graphfEodrL.findEdge(_startVertexxGkJmqF, _endVertexWd6CQp2)
		const _returnValuedT1ycmD = await _graphfEodrL.getVerticesIndices()
		const _returnValued6oUcxK = await _graphfEodrL.getAdjacencyMatrix()
		const _returnValuewjzD2YO = await articulationPoints(_graphfEodrL)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedOeQYtPX = false;
		const _graphj4UZ302 = new Graph(_isDirectedOeQYtPX)
		const _returnValuemmTtWbk = undefined;
		const _getKeyDa7FK5a = () => { return _returnValuemmTtWbk };
		const _newVertexqZrg9qA = {
			"getKey": _getKeyDa7FK5a
	}
		const _returnValueZoRPoK3 = await _graphj4UZ302.addVertex(_newVertexqZrg9qA)
		const _returnValuejDvezHE = await articulationPoints(_graphj4UZ302)
	});
})