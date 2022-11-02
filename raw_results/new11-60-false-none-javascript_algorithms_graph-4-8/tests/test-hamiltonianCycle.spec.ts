export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphLmN1pKf = "eBSZphvn36A19Xjpy42y4q8oe1CldjW6bSDIMvO7ENwRcpTKRKkt3t4gdlBK";
		const _returnValueolUqZiE = await hamiltonianCycle(_graphLmN1pKf)
	});
})