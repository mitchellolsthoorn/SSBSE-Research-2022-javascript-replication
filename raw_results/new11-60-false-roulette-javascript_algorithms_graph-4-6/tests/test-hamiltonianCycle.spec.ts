export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphpI8uY4N = "FRM";
		const _returnValuewqtKNfY = await hamiltonianCycle(_graphpI8uY4N)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedoFtp5gJ = true;
		const _graphTjeIpY6 = new Graph(_isDirectedoFtp5gJ)
		const _returnValueZTq61Wq = await _graphTjeIpY6.getAllEdges()
		const _returnValueFzJVO5x = await _graphTjeIpY6.getAllVertices()
		const _returnValueTDR74Q6 = await hamiltonianCycle(_graphTjeIpY6)
	});
})