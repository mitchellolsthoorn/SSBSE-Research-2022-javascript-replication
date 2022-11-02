export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValueTIZCjNi = null;
		const _arrayValueRVSv3DR = false;
		const _arrayValueLtWnabX = "np7mLE5XqEsJyMT1GgU4GZYrm7TT5ZB1zfMnlwWbC4xbE5BDsaIcV9K3kMvV9JEzwDeYXhvCeB8bMnAiRMSCIlR7uCIez6Wr2r";
		const _arrayValuenTXn8ZE = null;
		const _arrayValueC9anjCO = "4XPj1ioUTuE5hEqTzlcT5fLfNYSBt8thg70MD9qmvkMMnNFxnv3ajxsRLiL9DkB45r";
		const _returnValuegXs7AWo = [_arrayValueTIZCjNi, _arrayValueRVSv3DR, _arrayValueLtWnabX, _arrayValuenTXn8ZE, _arrayValueC9anjCO]
		const _returnValueNoTIuA4 = () => { return _returnValuegXs7AWo };
		const _returnValuevseVD0J = () => { return _returnValueNoTIuA4 };
		const _getVerticesIndicesWpsegZ = () => { return _returnValuevseVD0J };
		const _returnValueeNRSLa6 = undefined;
		const _getAdjacencyMatrix31tYdf = () => { return _returnValueeNRSLa6 };
		const _returnValueDT9n9JB = 0.5680600067926544;
		const _getAllVerticesezklEh = () => { return _returnValueDT9n9JB };
		const _graphLyLc1km = {
			"getVerticesIndices": _getVerticesIndicesWpsegZ,
		"getAdjacencyMatrix": _getAdjacencyMatrix31tYdf,
		"getAllVertices": _getAllVerticesezklEh
	}
		const _returnValuerF87Wc5 = await hamiltonianCycle(_graphLyLc1km)
	});
})