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
		const _returnValueg1VyDa0 = {
		
	}
		const _getVerticesIndicesYFryB6J = () => { return _returnValueg1VyDa0 };
		const _arrayValueugFbGgw = "MnCYP8p8GE6OmV45LbfHRqejBiscsGrnB81WO4k2tO3xK8lvrF9vdKoYbAeJ9EjkV2qLAGowngf2oUkVkTxM9QJcXFdX15rcO2d";
		const _arrayValueyo99OB = null;
		const _arrayValueVqVHD8X = [_arrayValueyo99OB]
		const _arrayValueauvyUk9 = true;
		const _arrayValuebwSUziE = false;
		const _arrayValuefcwLZMd = "wkkGeXA8sJIION3raoH1AXk8g5Uf0pEVSyIaWwLtQHFzDd3DY866DzAqpmrcGrxN2WQLTOM1Vg6xQoceyV";
		const _arrayValuede0Eh5c = [_arrayValuebwSUziE, _arrayValuefcwLZMd]
		const _getAdjacencyMatrixosKiAPY = [_arrayValueugFbGgw, _arrayValueVqVHD8X, _arrayValueauvyUk9, _arrayValuede0Eh5c]
		const _arrayValueE9yPgoK = "ky8y5NsSXpZOsAULSfOf9V9ikkr9oPTNZFiT61Ir3e9quCwIVY";
		const _arrayValueLK9BLjw = "sR9HyQ6jcvJSDLjyw9AQ89wwdI7hlTXrk26XQ";
		const _returnValueNMVMyfo = [_arrayValueE9yPgoK, _arrayValueLK9BLjw]
		const _getAllVerticesCDNGw8 = () => { return _returnValueNMVMyfo };
		const _graphgT4Eeyo = {
			"getVerticesIndices": _getVerticesIndicesYFryB6J,
		"getAdjacencyMatrix": _getAdjacencyMatrixosKiAPY,
		"getAllVertices": _getAllVerticesCDNGw8
	}
		const _returnValuevMdMqhM = await hamiltonianCycle(_graphgT4Eeyo)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValued1FDOkL = "sPfJHFgQapj0cxNX0DMGiZZU52CoU8wEGnpdhtIOAqYr23k1fvMdSVy6hiHV1dVzvKfET6aih";
		const _getVerticesIndicesumCSecv = () => { return _returnValued1FDOkL };
		const _returnValuenUVM7Bg = 7.9974434349605446;
		const _getAdjacencyMatrixFjD1jfL = () => { return _returnValuenUVM7Bg };
		const _returnValuekyz2oW0 = false;
		const _getAllVerticesHGJ7tNW = () => { return _returnValuekyz2oW0 };
		const _graphHDDVidY = {
			"getVerticesIndices": _getVerticesIndicesumCSecv,
		"getAdjacencyMatrix": _getAdjacencyMatrixFjD1jfL,
		"getAllVertices": _getAllVerticesHGJ7tNW
	}
		const _returnValueHkWVnrM = await hamiltonianCycle(_graphHDDVidY)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirecteddehUWVu = true;
		const _graphOnxxHqa = new Graph(_isDirecteddehUWVu)
		const _valuelP9VSPq = true;
		const _newVertexPaHWXFF = new GraphVertex(_valuelP9VSPq)
		const _returnValuek62j8QG = await _newVertexPaHWXFF.deleteAllEdges()
		const _returnValueXnWbhJ = await _newVertexPaHWXFF.getDegree()
		const _returnValuedi9VOQt = await _newVertexPaHWXFF.getDegree()
		const _returnValueO7FQTCP = await _graphOnxxHqa.addVertex(_newVertexPaHWXFF)
		const _returnValueiybseS9 = await _graphOnxxHqa.getVerticesIndices()
		const _returnValueH9zUpgq = await hamiltonianCycle(_graphOnxxHqa)
	});
})