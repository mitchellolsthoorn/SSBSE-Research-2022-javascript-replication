export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedCf4zUWV = undefined;
		const _returnValuehCirTHL = []
		const _getAllEdgeszTOAgpy = () => { return _returnValuehCirTHL };
		const _returnValueT3XX7nK = {
		
	}
		const _getAllVerticesiG8XsjZ = () => { return _returnValueT3XX7nK };
		const _graphK5CEviE = {
			"isDirected": _isDirectedCf4zUWV,
		"getAllEdges": _getAllEdgeszTOAgpy,
		"getAllVertices": _getAllVerticesiG8XsjZ
	}
		const _returnValueJzbGCHg = await kruskal(_graphK5CEviE)
	});

	it('test for kruskal', async () => {
		const _isDirectedAGFLO0K = -9.369176248978333;
		const _returnValueXQsufPY = null;
		const _getAllEdgesYGInhiF = () => { return _returnValueXQsufPY };
		const _getAllVerticesD957Ah9 = "KD3MI1IR9c2d2PqOYh";
		const _graphNMc9J33 = {
			"isDirected": _isDirectedAGFLO0K,
		"getAllEdges": _getAllEdgesYGInhiF,
		"getAllVertices": _getAllVerticesD957Ah9
	}
		const _returnValueVzMZDkJ = await kruskal(_graphNMc9J33)
	});
})