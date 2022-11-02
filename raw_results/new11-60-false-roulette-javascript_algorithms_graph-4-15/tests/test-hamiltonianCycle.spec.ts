export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuevvHXbLs = null;
		const _graphBjqyIWv = () => { return _returnValuevvHXbLs };
		const _returnValueiDEOXc7 = await hamiltonianCycle(_graphBjqyIWv)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedHGQiPCr = false;
		const _graphQkM0qDr = new Graph(_isDirectedHGQiPCr)
		const _returnValueFuOWQsd = await _graphQkM0qDr.getAllVertices()
		const _returnValueTyxxTl = await _graphQkM0qDr.getAllVertices()
		const _returnValueX40E7O = await _graphQkM0qDr.getAllVertices()
		const _returnValuems21c1B = await hamiltonianCycle(_graphQkM0qDr)
	});
})