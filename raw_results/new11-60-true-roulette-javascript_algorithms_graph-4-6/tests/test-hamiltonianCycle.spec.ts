export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _isDirectedhVvrfj = true;
		const _graphKqT7cC3 = new Graph(_isDirectedhVvrfj)
		const _returnValuepXU5sU0 = await _graphKqT7cC3.getVerticesIndices()
		const _returnValuesQXBzde = await hamiltonianCycle(_graphKqT7cC3)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedfMyW2jt = true;
		const _graphzbtkm97 = new Graph(_isDirectedfMyW2jt)
		const _vertexKeyZPbm1DR = null;
		const _returnValueBxiAkL = await _graphzbtkm97.getVertexByKey(_vertexKeyZPbm1DR)
		const _returnValuemEEEiMV = -0.019663211906999933;
		const _vertexKeyIxhsI4G = () => { return _returnValuemEEEiMV };
		const _returnValueDmn3YXm = await _graphzbtkm97.getVertexByKey(_vertexKeyIxhsI4G)
		const _returnValueCbMVxHv = "ZClEsUqqFZi77vQduIk8GNEwu2WoPnAGRxHhmA2dT0RBOSIezibaSNSm";
		const _valueV5W3hU2 = () => { return _returnValueCbMVxHv };
		const _newVertexmgTIjj7 = new GraphVertex(_valueV5W3hU2)
		const _vertexYpzU5Le = 4.825017875956297;
		const _returnValueYLlsSnw = await _newVertexmgTIjj7.findEdge(_vertexYpzU5Le)
		const _returnValueDjQl0xD = await _newVertexmgTIjj7.getNeighbors()
		const _returnValuepadCFxJ = await _graphzbtkm97.addVertex(_newVertexmgTIjj7)
		const _returnValuebWw9gE = await _graphzbtkm97.getAllVertices()
		const _returnValuevQSaGlw = await hamiltonianCycle(_graphzbtkm97)
	});
})