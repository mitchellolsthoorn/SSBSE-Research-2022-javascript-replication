export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuevbPZXH4 = undefined;
		const _getAllVerticesxPR3m5 = () => { return _returnValuevbPZXH4 };
		const _graphrcX5VYC = {
			"getAllVertices": _getAllVerticesxPR3m5
	}
		const _returnValueuU3mIht = await detectDirectedCycle(_graphrcX5VYC)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueJhCe30f = []
		const _getAllVerticesrOml2VH = () => { return _returnValueJhCe30f };
		const _graphzkA5zFY = {
			"getAllVertices": _getAllVerticesrOml2VH
	}
		const _returnValuewxKuUbQ = await detectDirectedCycle(_graphzkA5zFY)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedlVcfIXJ = true;
		const _graphsDd77yB = new Graph(_isDirectedlVcfIXJ)
		const _returnValueJZUe0jn = await _graphsDd77yB.getAdjacencyMatrix()
		const _returnValuedndAkrr = "TVx6lP9pfjgR55AYGADxnfcSbp6ZnsFYqFmPI";
		const _getKeyHlZGYC2 = () => { return _returnValuedndAkrr };
		const _newVertexUar4rxt = {
			"getKey": _getKeyHlZGYC2
	}
		const _returnValuejdfHhG4 = await _graphsDd77yB.addVertex(_newVertexUar4rxt)
		const _returnValuekhbwEQ7 = await detectDirectedCycle(_graphsDd77yB)
	});
})