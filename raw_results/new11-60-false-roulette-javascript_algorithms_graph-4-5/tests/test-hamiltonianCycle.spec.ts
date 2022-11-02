export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuemmYG3VX = "CH2rUs1x8CV4jX2yTsli3nQbc6prJeQT9QwY1Vs59FmTxCOc8oKOb9RaUA8PuUzOhDMKT9lLQ1Tn";
		const _getVerticesIndicesa65Ce8q = () => { return _returnValuemmYG3VX };
		const _returnValuej8sbtrf = -1.6448151164487186;
		const _getAdjacencyMatrixk7SH0C2 = () => { return _returnValuej8sbtrf };
		const _arrayValueae3rJpU = {
		
	}
		const _returnValueo5iQbcF = [_arrayValueae3rJpU]
		const _getAllVerticesBxoZe0 = () => { return _returnValueo5iQbcF };
		const _graphpbrmzE = {
			"getVerticesIndices": _getVerticesIndicesa65Ce8q,
		"getAdjacencyMatrix": _getAdjacencyMatrixk7SH0C2,
		"getAllVertices": _getAllVerticesBxoZe0
	}
		const _returnValue0pLShy = await hamiltonianCycle(_graphpbrmzE)
	});
})