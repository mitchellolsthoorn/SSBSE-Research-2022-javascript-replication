export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueqLy6mbU = undefined;
		const _graphBxN8HU2 = () => { return _returnValueqLy6mbU };
		const _returnValueaCpStBB = await hamiltonianCycle(_graphBxN8HU2)
	});
})