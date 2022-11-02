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
		const _graphw5TotsL = "NfkZv";
		const _returnValuejdPdcp3 = await hamiltonianCycle(_graphw5TotsL)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueHTvMZah = {
		
	}
		const _getVerticesIndices6cftFi = () => { return _returnValueHTvMZah };
		const _returnValueemG6vxc = undefined;
		const _getAdjacencyMatrixKk6PzNt = () => { return _returnValueemG6vxc };
		const _returnValuel7o2Ku4 = -0.46681862978123867;
		const _getAllVerticesymgAJ2 = () => { return _returnValuel7o2Ku4 };
		const _graphUm0Yz8 = {
			"getVerticesIndices": _getVerticesIndices6cftFi,
		"getAdjacencyMatrix": _getAdjacencyMatrixKk6PzNt,
		"getAllVertices": _getAllVerticesymgAJ2
	}
		const _returnValueZM2KOcJ = await hamiltonianCycle(_graphUm0Yz8)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirecteddLKqnuX = false;
		const _graphJhWDqWb = new Graph(_isDirecteddLKqnuX)
		const _valuemDz6UxE = true;
		const _newVertexqqSkQwk = new GraphVertex(_valuemDz6UxE)
		const _returnValuerLNtQA = await _newVertexqqSkQwk.getNeighbors()
		const _returnValueI1VBaHW = await _newVertexqqSkQwk.getNeighbors()
		const _returnValues1P8VM = await _graphJhWDqWb.addVertex(_newVertexqqSkQwk)
		const _returnValuezvJoBgh = await _graphJhWDqWb.reverse()
		const _returnValueCCPMxav = await _graphJhWDqWb.getWeight()
		const _returnValuemhr8oqB = await hamiltonianCycle(_graphJhWDqWb)
	});
})