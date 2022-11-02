export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuer3kPKdc = -4.188407642684394;
		const _returnValuesnYeFHg = () => { return _returnValuer3kPKdc };
		const _getAllVerticesx634qsL = () => { return _returnValuesnYeFHg };
		const _returnValuelILWWL = "yqZJvx9wYFpsWG2Hmbaw2";
		const _getAllEdgesLr7o9mG = () => { return _returnValuelILWWL };
		const _graphUkUglb4 = {
			"getAllVertices": _getAllVerticesx634qsL,
		"getAllEdges": _getAllEdgesLr7o9mG
	}
		const _returnValueLRTjEsa = await detectUndirectedCycleUsingDisjointSet(_graphUkUglb4)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedA9T1u7A = false;
		const _graphcT9tkGW = new Graph(_isDirectedA9T1u7A)
		const _arrayValuew7g5I2B = undefined;
		const _arrayValueEX1dLBi = null;
		const _arrayValueCZGYO49 = {
		
	}
		const _arrayValueZ2AKiDK = null;
		const _vertexKeyxFkesr = [_arrayValuew7g5I2B, _arrayValueEX1dLBi, _arrayValueCZGYO49, _arrayValueZ2AKiDK]
		const _returnValueOAqDTg2 = await _graphcT9tkGW.getVertexByKey(_vertexKeyxFkesr)
		const _returnValuenJkmFvU = await _graphcT9tkGW.getAllEdges()
		const _returnValueb6X4Jap = 5.199831748643785;
		const _getNeighborsAd3Hb29 = () => { return _returnValueb6X4Jap };
		const _vertexE9CFTf = {
			"getNeighbors": _getNeighborsAd3Hb29
	}
		const _returnValueoB7VZJw = await _graphcT9tkGW.getNeighbors(_vertexE9CFTf)
		const _returnValueauNO10 = await _graphcT9tkGW.toString()
		const _returnValuenVwedTc = await _graphcT9tkGW.toString()
		const _returnValueHQCwQsi = await detectUndirectedCycleUsingDisjointSet(_graphcT9tkGW)
	});
})