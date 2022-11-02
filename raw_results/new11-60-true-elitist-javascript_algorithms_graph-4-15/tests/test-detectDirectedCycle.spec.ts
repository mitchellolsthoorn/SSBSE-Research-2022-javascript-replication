export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueCwqs3Hr = undefined;
		const _getAllVerticesyHpsfjF = () => { return _returnValueCwqs3Hr };
		const _graphkSdKfZT = {
			"getAllVertices": _getAllVerticesyHpsfjF
	}
		const _returnValuevNTWHI = await detectDirectedCycle(_graphkSdKfZT)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectediBxqPXZ = true;
		const _graphaMP00ZX = new Graph(_isDirectediBxqPXZ)
		const _returnValuexeg3loJ = await _graphaMP00ZX.toString()
		const _returnValueFJgw1qQ = await detectDirectedCycle(_graphaMP00ZX)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedbJuS9Yq = true;
		const _graphVI1vCo = new Graph(_isDirectedbJuS9Yq)
		const _valueCgunKla = 1.8161991390134986;
		const _newVertexJqOos3a = new GraphVertex(_valueCgunKla)
		const _returnValueye0vU1 = await _newVertexJqOos3a.getEdges()
		const _returnValuef1wyNnw = true;
		const _arrayValuenWFlOq = () => { return _returnValuef1wyNnw };
		const _vertexXDjc1dO = [_arrayValuenWFlOq]
		const _returnValueaZA01zY = await _newVertexJqOos3a.findEdge(_vertexXDjc1dO)
		const _returnValueJXSUWk1 = await _newVertexJqOos3a.deleteAllEdges()
		const _edgeZwwn2UA = false;
		const _returnValuePfsDP8 = await _newVertexJqOos3a.deleteEdge(_edgeZwwn2UA)
		const _returnValueQaSCgxa = await _graphVI1vCo.addVertex(_newVertexJqOos3a)
		const _returnValuedmiw9xx = await _graphVI1vCo.getWeight()
		const _returnValuelBv89zK = await detectDirectedCycle(_graphVI1vCo)
	});
})