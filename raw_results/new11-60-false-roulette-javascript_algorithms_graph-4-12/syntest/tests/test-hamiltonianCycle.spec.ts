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
		const _graphm45aaD0 = "vyp6aX8ITBTXq76GCXwsEM19isPMFx1jxLoMvIaiH3zlWbnqGwBaJKh2QDhhD4nt8sBb5C0rSLt6Rfx7T8r3OVifK";
		const _returnValueqvSCaFk = await hamiltonianCycle(_graphm45aaD0)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueBN5mvM = {
		
	}
		const _getVerticesIndicespmsCARK = () => { return _returnValueBN5mvM };
		const _returnValuenzoXC5O = null;
		const _getAdjacencyMatrixi6wObL4 = () => { return _returnValuenzoXC5O };
		const _returnValuexEBEcc5 = -4.815476506008878;
		const _getAllVerticesGtCpIFI = () => { return _returnValuexEBEcc5 };
		const _graphpYU8Ksn = {
			"getVerticesIndices": _getVerticesIndicespmsCARK,
		"getAdjacencyMatrix": _getAdjacencyMatrixi6wObL4,
		"getAllVertices": _getAllVerticesGtCpIFI
	}
		const _returnValueOnJgBtB = await hamiltonianCycle(_graphpYU8Ksn)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedkizVJAE = true;
		const _graph6LpNl2 = new Graph(_isDirectedkizVJAE)
		const _valuehrSn8e = "76F7eFre9WgVq54Jt6Kh2SAFRMkYRNSDqi8eQcUgO2wHqh0Cvk8oRW9R4R";
		const _newVertexsP2smEA = new GraphVertex(_valuehrSn8e)
		const _returnValueRAYXotV = await _newVertexsP2smEA.getKey()
		const _edgeifOWcXo = true;
		const _returnValuef2pQeWQ = await _newVertexsP2smEA.deleteEdge(_edgeifOWcXo)
		const _returnValuehWCq9WJ = await _graph6LpNl2.addVertex(_newVertexsP2smEA)
		const _returnValueicvuI2Q = await _graph6LpNl2.getVerticesIndices()
		const _returnValueodrGvn7 = await hamiltonianCycle(_graph6LpNl2)
	});
})