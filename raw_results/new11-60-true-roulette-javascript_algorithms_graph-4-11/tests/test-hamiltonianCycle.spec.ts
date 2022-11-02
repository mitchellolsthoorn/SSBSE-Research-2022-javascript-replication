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
		const _arrayValuergckVcx = "Dwi3J1clEvQTrdjvMENbwvsSBEez3FDaCVvF";
		const _arrayValuemQldaH2 = -8.081818566068069;
		const _returnValueKwKJ3Gf = [_arrayValuergckVcx, _arrayValuemQldaH2]
		const _getVerticesIndicesmf4xfgT = () => { return _returnValueKwKJ3Gf };
		const _returnValuenwr1QFr = "jF2WnxDfWn4fvPH1KyKqCbi9rN5Nz63iaBrEL4lVcb";
		const _getAdjacencyMatrixjW0Mi8a = () => { return _returnValuenwr1QFr };
		const _returnValueVC41lda = "7sleulA3PzDAQCF6jYQ1iff5KGPJBA9fKVPTgiXx8yEWW2THgpR3mCi";
		const _getAllVerticesxfqDJ2S = () => { return _returnValueVC41lda };
		const _graphzxHi58T = {
			"getVerticesIndices": _getVerticesIndicesmf4xfgT,
		"getAdjacencyMatrix": _getAdjacencyMatrixjW0Mi8a,
		"getAllVertices": _getAllVerticesxfqDJ2S
	}
		const _returnValueC271qtZ = await hamiltonianCycle(_graphzxHi58T)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedfkNq37z = true;
		const _graphnMaSwo = new Graph(_isDirectedfkNq37z)
		const _returnValueZJOy8AC = null;
		const _valueLe6wtw5 = () => { return _returnValueZJOy8AC };
		const _newVertexPT0poQF = new GraphVertex(_valueLe6wtw5)
		const _returnValueT0ihno = await _newVertexPT0poQF.deleteAllEdges()
		const _vertexkhVZh2K = -0.5975676350663548;
		const _returnValueuhWTMU = await _newVertexPT0poQF.hasNeighbor(_vertexkhVZh2K)
		const _returnValueduC5vXn = await _graphnMaSwo.addVertex(_newVertexPT0poQF)
		const _returnValueh0agxBR = await _graphnMaSwo.getWeight()
		const _vertexKeypmJhpIQ = {
		
	}
		const _returnValuev90srW5 = await _graphnMaSwo.getVertexByKey(_vertexKeypmJhpIQ)
		const _returnValuehUCGG9d = await _graphnMaSwo.getAllEdges()
		const _returnValueCxFYkSu = await hamiltonianCycle(_graphnMaSwo)
	});
})