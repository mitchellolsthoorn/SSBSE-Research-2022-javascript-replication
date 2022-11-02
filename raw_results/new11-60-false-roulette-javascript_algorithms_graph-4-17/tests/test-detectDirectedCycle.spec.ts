export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueK5jzGvG = undefined;
		const _getAllVerticeskLaMyMV = () => { return _returnValueK5jzGvG };
		const _graph872JO1 = {
			"getAllVertices": _getAllVerticeskLaMyMV
	}
		const _returnValuePpQ2Fdd = await detectDirectedCycle(_graph872JO1)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedSW2PVGG = true;
		const _graphj2zXGwo = new Graph(_isDirectedSW2PVGG)
		const _returnValuehC3OA5 = await _graphj2zXGwo.getAllVertices()
		const _returnValueVyNzBAe = await _graphj2zXGwo.getWeight()
		const _returnValuenIwxWr8 = await _graphj2zXGwo.getVerticesIndices()
		const _returnValueAGZDcOx = await detectDirectedCycle(_graphj2zXGwo)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectederHLmQT = "zu8BLQCN6XvMrCNkAFSOfwQilCga7E2xXcL2HnqGgt0";
		const _graphVPfFfcL = new Graph(_isDirectederHLmQT)
		const _vertexKeyL5SJW2X = false;
		const _returnValueI5Ua4zm = await _graphVPfFfcL.getVertexByKey(_vertexKeyL5SJW2X)
		const _returnValueBxRH2Tg = -0.4167907103932116;
		const _getKeyqm7W3uj = () => { return _returnValueBxRH2Tg };
		const _newVertexJpGs7r3 = {
			"getKey": _getKeyqm7W3uj
	}
		const _returnValueMg12iPJ = await _graphVPfFfcL.addVertex(_newVertexJpGs7r3)
		const _returnValueZWfVzFy = await detectDirectedCycle(_graphVPfFfcL)
	});
})