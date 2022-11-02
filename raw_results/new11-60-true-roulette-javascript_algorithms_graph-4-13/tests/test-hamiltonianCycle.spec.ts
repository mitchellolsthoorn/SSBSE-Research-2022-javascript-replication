export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueH99ah8 = true;
		const _getVerticesIndicesvoBT1q6 = () => { return _returnValueH99ah8 };
		const _arrayValue2DGMW5 = null;
		const _arrayValueOuvwiaa = undefined;
		const _returnValueDC4myv4 = [_arrayValue2DGMW5, _arrayValueOuvwiaa]
		const _getAdjacencyMatrixtuOrczg = () => { return _returnValueDC4myv4 };
		const _returnValueRUZ9BuP = undefined;
		const _getAllVerticesjGwyIqK = () => { return _returnValueRUZ9BuP };
		const _graphOyZRP6G = {
			"getVerticesIndices": _getVerticesIndicesvoBT1q6,
		"getAdjacencyMatrix": _getAdjacencyMatrixtuOrczg,
		"getAllVertices": _getAllVerticesjGwyIqK
	}
		const _returnValueG5B1Dxd = await hamiltonianCycle(_graphOyZRP6G)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedSAwEewx = true;
		const _graphNAvKWfU = new Graph(_isDirectedSAwEewx)
		const _vertexKeysHAUbDv = -0.2673753758917172;
		const _returnValueaJ2LBQr = await _graphNAvKWfU.getVertexByKey(_vertexKeysHAUbDv)
		const _returnValueX4VYTbH = await _graphNAvKWfU.getAllEdges()
		const _returnValuekG9QGLN = 0.594400206888464;
		const _getNeighborsp2oo36a = () => { return _returnValuekG9QGLN };
		const _vertexo0d9Xv = {
			"getNeighbors": _getNeighborsp2oo36a
	}
		const _returnValuexSoHNd = await _graphNAvKWfU.getNeighbors(_vertexo0d9Xv)
		const _returnValuet1WtLPy = await hamiltonianCycle(_graphNAvKWfU)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedzVP8Mkw = false;
		const _graphXF2f6gF = new Graph(_isDirectedzVP8Mkw)
		const _returnValueFFAJIkx = await _graphXF2f6gF.getWeight()
		const _valuealoPdHN = {
		
	}
		const _newVertexYDGDgtA = new GraphVertex(_valuealoPdHN)
		const _returnValuelRYB7Rl = await _newVertexYDGDgtA.getNeighbors()
		const _vertextE4zGw = "vLlD6Fs4hAY9RQ3fMo5qFXJuwHEg5wRwLSjRht9afgfMHIKrMFfMbGsnn12QmQnD2EE";
		const _returnValuegniJ8Ij = await _newVertexYDGDgtA.findEdge(_vertextE4zGw)
		const _returnValueXSxRFuD = await _newVertexYDGDgtA.getEdges()
		const _returnValuexZ2zlcz = await _newVertexYDGDgtA.getNeighbors()
		const _returnValueibCzHg2 = await _graphXF2f6gF.addVertex(_newVertexYDGDgtA)
		const _returnValuesWHUkzZ = await _graphXF2f6gF.reverse()
		const _returnValuek0ClfCG = await hamiltonianCycle(_graphXF2f6gF)
	});
})