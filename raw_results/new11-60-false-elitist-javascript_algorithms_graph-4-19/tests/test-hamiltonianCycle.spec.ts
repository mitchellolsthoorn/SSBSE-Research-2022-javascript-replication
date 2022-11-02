export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueJ7z9HU5 = null;
		const _getVerticesIndicesRxYC4N2 = () => { return _returnValueJ7z9HU5 };
		const _returnValuen6dJ736 = 1.7384467864006385;
		const _returnValuec9Ubowt = () => { return _returnValuen6dJ736 };
		const _getAdjacencyMatrixl6b1Auj = () => { return _returnValuec9Ubowt };
		const _returnValuersjtlIj = 0.8560811573172149;
		const _getAllVerticesAQ9yiO = () => { return _returnValuersjtlIj };
		const _graphhfbYtfQ = {
			"getVerticesIndices": _getVerticesIndicesRxYC4N2,
		"getAdjacencyMatrix": _getAdjacencyMatrixl6b1Auj,
		"getAllVertices": _getAllVerticesAQ9yiO
	}
		const _returnValueh6E8wiJ = await hamiltonianCycle(_graphhfbYtfQ)
	});
})