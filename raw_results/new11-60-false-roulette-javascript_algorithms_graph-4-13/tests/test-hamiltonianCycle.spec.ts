export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _isDirectedzIgf9q2 = undefined;
		const _graphhgqpgfk = new Graph(_isDirectedzIgf9q2)
		const _returnValuel0v8XZ3 = await _graphhgqpgfk.reverse()
		const _returnValueoWxlDUz = await hamiltonianCycle(_graphhgqpgfk)
	});
})