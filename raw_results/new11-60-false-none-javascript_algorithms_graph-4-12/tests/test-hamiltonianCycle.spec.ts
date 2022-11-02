export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValueMlwkziv = -1.1709027800182277;
		const _arrayValuejc4iwhK = -1.3631166273114594;
		const _graphgurCXKT = [_arrayValueMlwkziv, _arrayValuejc4iwhK]
		const _returnValuePn6RObR = await hamiltonianCycle(_graphgurCXKT)
	});
})