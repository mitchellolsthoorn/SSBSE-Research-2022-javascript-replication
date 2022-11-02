export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuejTVcd16 = {
		
	}
		const _getAllVerticesAxtRAh = () => { return _returnValuejTVcd16 };
		const _graphCaO6qSb = {
			"getAllVertices": _getAllVerticesAxtRAh
	}
		const _returnValue8XswEf = await detectDirectedCycle(_graphCaO6qSb)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedb2vE1AF = false;
		const _graphoFojF0E = new Graph(_isDirectedb2vE1AF)
		const _returnValueTisdVQ3 = await _graphoFojF0E.getWeight()
		const _returnValuetC46PI5 = await _graphoFojF0E.getVerticesIndices()
		const _returnValueJGvnKdT = await detectDirectedCycle(_graphoFojF0E)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedIrQv0wz = true;
		const _graphBQAasWL = new Graph(_isDirectedIrQv0wz)
		const _returnValuehf9C6rQ = await _graphBQAasWL.getAdjacencyMatrix()
		const _returnValueII5uUMu = await _graphBQAasWL.getAllEdges()
		const _returnValueG0vXVLX = await _graphBQAasWL.toString()
		const _returnValueVOqIzSm = []
		const _getKeych1g7eo = () => { return _returnValueVOqIzSm };
		const _newVertexvHmUikj = {
			"getKey": _getKeych1g7eo
	}
		const _returnValuejEMp1xJ = await _graphBQAasWL.addVertex(_newVertexvHmUikj)
		const _returnValue5yK2PX = await detectDirectedCycle(_graphBQAasWL)
	});
})