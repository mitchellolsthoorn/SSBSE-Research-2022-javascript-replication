export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _getAllVertices1lpQUw = {
		
	}
		const _graphEtRcIim = {
			"getAllVertices": _getAllVertices1lpQUw
	}
		const _returnValuewiC4hho = await detectDirectedCycle(_graphEtRcIim)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedHFdA0P2 = false;
		const _graphzZhzHF9 = new Graph(_isDirectedHFdA0P2)
		const _returnValuewgXpyWk = await _graphzZhzHF9.getAllEdges()
		const _returnValueCEDsYkw = await _graphzZhzHF9.getAdjacencyMatrix()
		const _returnValuecf0UIJI = []
		const _getKeysUTaHiW = () => { return _returnValuecf0UIJI };
		const _newVertexbAYzRh1 = {
			"getKey": _getKeysUTaHiW
	}
		const _returnValuevlGavO8 = await _graphzZhzHF9.addVertex(_newVertexbAYzRh1)
		const _returnValueWVQXMtq = await _graphzZhzHF9.getVerticesIndices()
		const _returnValueQjrZ4Qc = await detectDirectedCycle(_graphzZhzHF9)
	});
})