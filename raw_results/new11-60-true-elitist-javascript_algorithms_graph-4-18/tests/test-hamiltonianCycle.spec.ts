export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuePLY1o6t = -0.2444575130329767;
		const _getVerticesIndicesBe79at = () => { return _returnValuePLY1o6t };
		const _returnValueUEopD9o = true;
		const _getAdjacencyMatrixieEm5Ne = () => { return _returnValueUEopD9o };
		const _returnValueycLU8cT = 6.9738910385722015;
		const _getAllVerticesIbQaVzV = () => { return _returnValueycLU8cT };
		const _graphLNsI8ZC = {
			"getVerticesIndices": _getVerticesIndicesBe79at,
		"getAdjacencyMatrix": _getAdjacencyMatrixieEm5Ne,
		"getAllVertices": _getAllVerticesIbQaVzV
	}
		const _returnValueqI5ZxKU = await hamiltonianCycle(_graphLNsI8ZC)
	});
})