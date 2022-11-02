export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueOVxQQT = -2.955290162820888;
		const _graphRaBjlrt = () => { return _returnValueOVxQQT };
		const _returnValueIVJza6i = await hamiltonianCycle(_graphRaBjlrt)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedReZyFyA = false;
		const _graphwSsCZo = new Graph(_isDirectedReZyFyA)
		const _vertexKeyoUKleX = "y3wdVM7EFLiVa9VwMHmuOfoIic22bcD3rdlDv1MT1qsrQm60o";
		const _returnValueuOFmuLv = await _graphwSsCZo.getVertexByKey(_vertexKeyoUKleX)
		const _vertexKeyclFrIw7 = 9.228349857830914;
		const _returnValueujmTzGM = await _graphwSsCZo.getVertexByKey(_vertexKeyclFrIw7)
		const _returnValueIrMQPaq = await hamiltonianCycle(_graphwSsCZo)
	});
})