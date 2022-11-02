export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphUPzITX5 = null;
		const _returnValuehHDWHp = true;
		const _getKeyEi8cnRM = () => { return _returnValuehHDWHp };
		const _startVertexCJr1kcR = {
			"getKey": _getKeyEi8cnRM
	}
		const _returnValueX3g8Fo = await bellmanFord(_graphUPzITX5, _startVertexCJr1kcR)
	});

	it('test for bellmanFord', async () => {
		const _returnValuesOdOwjt = []
		const _getAllVerticesquacuCV = () => { return _returnValuesOdOwjt };
		const _getVertexByKeyLx1wRz4 = {
		
	}
		const _returnValuepfqAh5y = "ukQ836ebTf";
		const _getNeighborsyxzIIZ = () => { return _returnValuepfqAh5y };
		const _returnValuekMKOCf = null;
		const _findEdgePtWZjO2 = () => { return _returnValuekMKOCf };
		const _graphjFZt7DS = {
			"getAllVertices": _getAllVerticesquacuCV,
		"getVertexByKey": _getVertexByKeyLx1wRz4,
		"getNeighbors": _getNeighborsyxzIIZ,
		"findEdge": _findEdgePtWZjO2
	}
		const _returnValued3JnGR = undefined;
		const _arrayValuesqESOX4 = () => { return _returnValued3JnGR };
		const _returnValueXwmsZcp = [_arrayValuesqESOX4]
		const _returnValueYWjpkfv = () => { return _returnValueXwmsZcp };
		const _getKeyp0REGr = () => { return _returnValueYWjpkfv };
		const _startVertexaQogXAN = {
			"getKey": _getKeyp0REGr
	}
		const _returnValueSBbnbxf = await bellmanFord(_graphjFZt7DS, _startVertexaQogXAN)
	});
})