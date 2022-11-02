export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValue6HCDyn = -6.886012762564071;
		const _arrayValueOoRklBv = undefined;
		const _arrayValueZFFO8Be = -7.869079219536692;
		const _graphv5At7gj = [_arrayValue6HCDyn, _arrayValueOoRklBv, _arrayValueZFFO8Be]
		const _returnValueObrHxY = await hamiltonianCycle(_graphv5At7gj)
	});
})