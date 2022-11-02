export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuehHD3W2 = "oq0QlxD";
		const _getAllVerticesqbCdjvW = () => { return _returnValuehHD3W2 };
		const _returnValueAL6mLfw = -4.1877990662418965;
		const _getVertexByKeyvJPeyqb = () => { return _returnValueAL6mLfw };
		const _returnValueFUuinzL = undefined;
		const _getNeighborsDV8K06x = () => { return _returnValueFUuinzL };
		const _returnValueYtiHPNt = undefined;
		const _returnValueFo9bsuA = () => { return _returnValueYtiHPNt };
		const _findEdgeXG7N8oq = () => { return _returnValueFo9bsuA };
		const _graphXBHvLa4 = {
			"getAllVertices": _getAllVerticesqbCdjvW,
		"getVertexByKey": _getVertexByKeyvJPeyqb,
		"getNeighbors": _getNeighborsDV8K06x,
		"findEdge": _findEdgeXG7N8oq
	}
		const _returnValueLtnB5dS = undefined;
		const _getKeyr2tdqAE = () => { return _returnValueLtnB5dS };
		const _startVertexLlYj9V3 = {
			"getKey": _getKeyr2tdqAE
	}
		const _returnValue0H0zTZ = await bellmanFord(_graphXBHvLa4, _startVertexLlYj9V3)
	});

	it('test for bellmanFord', async () => {
		const _isDirectednnu3Ym6 = false;
		const _graphZjoOKbH = new Graph(_isDirectednnu3Ym6)
		const _returnValue7uRNPn = await _graphZjoOKbH.toString()
		const _returnValueLWRdzaE = await _graphZjoOKbH.getVerticesIndices()
		const _arrayValuexMdtlZ3 = undefined;
		const _arrayValuedT7weut = null;
		const _arrayValueEpCVHXt = false;
		const _vertexKeyCLJuOW = [_arrayValuexMdtlZ3, _arrayValuedT7weut, _arrayValueEpCVHXt]
		const _returnValueMFMIWUM = await _graphZjoOKbH.getVertexByKey(_vertexKeyCLJuOW)
		const _returnValuefQdRZ9a = 6.091135792426094;
		const _getKeyxDWGaGW = () => { return _returnValuefQdRZ9a };
		const _newVertexderh5Lq = {
			"getKey": _getKeyxDWGaGW
	}
		const _returnValueN9M9Bdw = await _graphZjoOKbH.addVertex(_newVertexderh5Lq)
		const _returnValueh0cSPvM = await _graphZjoOKbH.getWeight()
		const _returnValueXfYlQng = false;
		const _getKeyx0xYmgU = () => { return _returnValueXfYlQng };
		const _startVertexamnVVoa = {
			"getKey": _getKeyx0xYmgU
	}
		const _returnValueojX9GkY = await bellmanFord(_graphZjoOKbH, _startVertexamnVVoa)
	});
})