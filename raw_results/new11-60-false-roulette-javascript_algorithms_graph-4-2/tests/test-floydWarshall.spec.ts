export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphsO0eSOI = "a6H91SDWvVDb2QN0uaP0uaejVgkm6Ne9g2fSR9sD5MX1Ym7ozPHTX4";
		const _returnValueT1x5doF = await floydWarshall(_graphsO0eSOI)
	});

	it('test for floydWarshall', async () => {
		const _returnValueaXiSP9l = undefined;
		const _getAllVerticesk9Xyg82 = () => { return _returnValueaXiSP9l };
		const _returnValueJme6qTX = null;
		const _findEdgeMi5ckY = () => { return _returnValueJme6qTX };
		const _graphzL7e5OM = {
			"getAllVertices": _getAllVerticesk9Xyg82,
		"findEdge": _findEdgeMi5ckY
	}
		const _returnValuepBaOP8z = await floydWarshall(_graphzL7e5OM)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedwYy1VUm = true;
		const _graphYQEZCI0 = new Graph(_isDirectedwYy1VUm)
		const _returnValue2qWA3T = await _graphYQEZCI0.getAllEdges()
		const _returnValuexd1OZU = await _graphYQEZCI0.getVerticesIndices()
		const _returnValueo5w2Zhz = await _graphYQEZCI0.getAdjacencyMatrix()
		const _returnValuevvigHWt = await _graphYQEZCI0.getVerticesIndices()
		const _returnValuerOkXkSs = await floydWarshall(_graphYQEZCI0)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueOg9yALx = null;
		const _returnValuer05QKLY = [_arrayValueOg9yALx]
		const _getAllVerticesbMDPLe6 = () => { return _returnValuer05QKLY };
		const _findEdgeXXgE6H = true;
		const _graphBkOoSz = {
			"getAllVertices": _getAllVerticesbMDPLe6,
		"findEdge": _findEdgeXXgE6H
	}
		const _returnValueLQmH9Y = await floydWarshall(_graphBkOoSz)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueBtUgDk = -3.0916127791315073;
		const _arrayValuejEu8eFT = {
		
	}
		const _arrayValuer7zBOh = -3.890006588218114;
		const _returnValuej114PcP = [_arrayValuer7zBOh]
		const _arrayValueGEKhtT4 = () => { return _returnValuej114PcP };
		const _arrayValueStmTY8 = "fKkKWwCBHAgXKIRhGoig3UNlzXGQ";
		const _arrayValuezyUqRV = [_arrayValuejEu8eFT, _arrayValueGEKhtT4, _arrayValueStmTY8]
		const _returnValueFbAjeKu = null;
		const _arrayValueHZMe3lM = () => { return _returnValueFbAjeKu };
		const _returnValueQmqYB6Z = [_arrayValueBtUgDk, _arrayValuezyUqRV, _arrayValueHZMe3lM]
		const _getAllVerticesOyudcWE = () => { return _returnValueQmqYB6Z };
		const _returnValuexRv6DiF = -3.0306524608689065;
		const _findEdgeN0GZ1MG = () => { return _returnValuexRv6DiF };
		const _graphNobHmB = {
			"getAllVertices": _getAllVerticesOyudcWE,
		"findEdge": _findEdgeN0GZ1MG
	}
		const _returnValueJyzaCgt = await floydWarshall(_graphNobHmB)
	});
})