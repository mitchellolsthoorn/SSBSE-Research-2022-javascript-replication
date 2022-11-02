export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueN5fPgS = {
		
	}
		const _getAllVerticesT13h8pt = () => { return _returnValueN5fPgS };
		const _graphkxYCUC = {
			"getAllVertices": _getAllVerticesT13h8pt
	}
		const _returnValueS6i4aI6 = await detectDirectedCycle(_graphkxYCUC)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedVcxXJFL = false;
		const _graphHJNbFdZ = new Graph(_isDirectedVcxXJFL)
		const _returnValueuKFPKX = await _graphHJNbFdZ.getAllEdges()
		const _returnValueFajZfHu = await _graphHJNbFdZ.getAllEdges()
		const _returnValuesbs4OZp = await _graphHJNbFdZ.getAllVertices()
		const _returnValueVHrccp2 = await detectDirectedCycle(_graphHJNbFdZ)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedOk38NMz = false;
		const _graphbLGv0bQ = new Graph(_isDirectedOk38NMz)
		const _returnValuepswYElM = await _graphbLGv0bQ.getAllEdges()
		const _returnValueMVcqPDk = await _graphbLGv0bQ.getVerticesIndices()
		const _returnValueh3QAFi9 = await _graphbLGv0bQ.reverse()
		const _returnValuethakWA0 = []
		const _getKeyT2f9xUD = () => { return _returnValuethakWA0 };
		const _newVertexolODf9O = {
			"getKey": _getKeyT2f9xUD
	}
		const _returnValueWrhNUEI = await _graphbLGv0bQ.addVertex(_newVertexolODf9O)
		const _returnValuevF1zRp = await detectDirectedCycle(_graphbLGv0bQ)
	});
})