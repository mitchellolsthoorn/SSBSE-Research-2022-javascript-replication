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
		const _returnValueURrtj45 = false;
		const _returnValuewv879gZ = () => { return _returnValueURrtj45 };
		const _getVerticesIndicesTF40Rf = () => { return _returnValuewv879gZ };
		const _returnValuemmVnHrC = undefined;
		const _returnValueYBpOkpb = () => { return _returnValuemmVnHrC };
		const _getAdjacencyMatrixDXCwoqd = () => { return _returnValueYBpOkpb };
		const _returnValuew08HGZ2 = "afWY7QiBRV5wssxStt2mmpCPysL5HlR01uPm4xwpKQ45AsAQOLD31";
		const _getAllVerticesJ5NOLMs = () => { return _returnValuew08HGZ2 };
		const _graphxfLSolh = {
			"getVerticesIndices": _getVerticesIndicesTF40Rf,
		"getAdjacencyMatrix": _getAdjacencyMatrixDXCwoqd,
		"getAllVertices": _getAllVerticesJ5NOLMs
	}
		const _returnValueySKJK6o = await hamiltonianCycle(_graphxfLSolh)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedbZdK9n = true;
		const _graphURuWRPL = new Graph(_isDirectedbZdK9n)
		const _valueO76ulZt = 4.569608945767866;
		const _newVertexRHIiKxv = new GraphVertex(_valueO76ulZt)
		const _returnValueuEf7jjH = await _newVertexRHIiKxv.getKey()
		const _returnValuewoe4Cih = {
		
	}
		const _callbackcunAKmZ = () => { return _returnValuewoe4Cih };
		const _returnValuecp8boI = await _newVertexRHIiKxv.toString(_callbackcunAKmZ)
		const _returnValuekLeKcgT = await _newVertexRHIiKxv.getNeighbors()
		const _returnValuevjLOCNS = await _graphURuWRPL.addVertex(_newVertexRHIiKxv)
		const _returnValueFbmnDu3 = await _graphURuWRPL.getAdjacencyMatrix()
		const _returnValueqIznTXq = await _graphURuWRPL.getAllEdges()
		const _returnValuenO8rZWC = await hamiltonianCycle(_graphURuWRPL)
	});
})