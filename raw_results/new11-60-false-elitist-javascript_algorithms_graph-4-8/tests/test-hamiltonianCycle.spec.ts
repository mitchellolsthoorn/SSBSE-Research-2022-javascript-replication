export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueRPPwect = "z2LKUml2RLhzTuSVkSin4cXiB0Jyi2D58B6DZC7cR9RwjUjujQy3Hju2leJRvZFX3P22vGqE4gExWux45UhtMp1";
		const _getVerticesIndicesYipm4K2 = () => { return _returnValueRPPwect };
		const _returnValueqodeUn = false;
		const _getAdjacencyMatrixqPX9bB0 = () => { return _returnValueqodeUn };
		const _arrayValueQT1bfZ = null;
		const _arrayValuejnP7Q5c = undefined;
		const _returnValueAlBo7ff = [_arrayValueQT1bfZ, _arrayValuejnP7Q5c]
		const _getAllVerticesz9O6MU = () => { return _returnValueAlBo7ff };
		const _graphCxAimFh = {
			"getVerticesIndices": _getVerticesIndicesYipm4K2,
		"getAdjacencyMatrix": _getAdjacencyMatrixqPX9bB0,
		"getAllVertices": _getAllVerticesz9O6MU
	}
		const _returnValuepuxzOkz = await hamiltonianCycle(_graphCxAimFh)
	});
})