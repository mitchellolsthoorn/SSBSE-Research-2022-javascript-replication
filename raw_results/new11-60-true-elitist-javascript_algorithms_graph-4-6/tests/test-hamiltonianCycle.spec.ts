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
		const _arrayValuermAvtFF = undefined;
		const _arrayValuebEeznlK = false;
		const _arrayValueZr9DCg7 = undefined;
		const _arrayValueDSJO0DA = [_arrayValuebEeznlK, _arrayValueZr9DCg7]
		const _returnValuenW46DTU = [_arrayValuermAvtFF, _arrayValueDSJO0DA]
		const _getVerticesIndicesz96ygVT = () => { return _returnValuenW46DTU };
		const _returnValuew2GJPX = false;
		const _getAdjacencyMatrixlUcsQWX = () => { return _returnValuew2GJPX };
		const _returnValueBAKsFFP = -4.751228150357173;
		const _getAllVerticesdo6qTi = () => { return _returnValueBAKsFFP };
		const _graphUAzxfLr = {
			"getVerticesIndices": _getVerticesIndicesz96ygVT,
		"getAdjacencyMatrix": _getAdjacencyMatrixlUcsQWX,
		"getAllVertices": _getAllVerticesdo6qTi
	}
		const _returnValueaYhMaf = await hamiltonianCycle(_graphUAzxfLr)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedl5Q5wQ8 = true;
		const _graphLqi9akA = new Graph(_isDirectedl5Q5wQ8)
		const _returnValue39rmDe = await _graphLqi9akA.reverse()
		const _returnValueoyshJFA = await _graphLqi9akA.reverse()
		const _returnValueq60waA7 = "Se1bsHrzN4mSR6jIq2DHMQiJg1gH84yL81ndyq5XAA0S";
		const _getNeighborsHehgEsS = () => { return _returnValueq60waA7 };
		const _vertexMxfyccw = {
			"getNeighbors": _getNeighborsHehgEsS
	}
		const _returnValuerc0XtM = await _graphLqi9akA.getNeighbors(_vertexMxfyccw)
		const _valueo0jqdOf = []
		const _newVertexWPvavD = new GraphVertex(_valueo0jqdOf)
		const _returnValueChkp5q = await _newVertexWPvavD.getKey()
		const _edgefGLBye9 = true;
		const _returnValueYVcf9AC = await _newVertexWPvavD.deleteEdge(_edgefGLBye9)
		const _returnValueQUTUJa = await _newVertexWPvavD.getEdges()
		const _returnValuegdpKU8j = {
		
	}
		const _callbackgiKduOC = () => { return _returnValuegdpKU8j };
		const _returnValueSEcYZA = await _newVertexWPvavD.toString(_callbackgiKduOC)
		const _returnValuec9f7eC1 = await _graphLqi9akA.addVertex(_newVertexWPvavD)
		const _returnValuepv8m49m = await hamiltonianCycle(_graphLqi9akA)
	});
})