export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphJEjKPjm = null;
		const _returnValue4NeskK = await hamiltonianCycle(_graphJEjKPjm)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueGsP2sDp = undefined;
		const _getVerticesIndicesCAhhuCI = () => { return _returnValueGsP2sDp };
		const _returnValueFS2U1qV = null;
		const _getAdjacencyMatrixCsklh4C = () => { return _returnValueFS2U1qV };
		const _returnValuexTP7Bcq = true;
		const _getAllVerticesAFEBPZM = () => { return _returnValuexTP7Bcq };
		const _graphj3fqwRL = {
			"getVerticesIndices": _getVerticesIndicesCAhhuCI,
		"getAdjacencyMatrix": _getAdjacencyMatrixCsklh4C,
		"getAllVertices": _getAllVerticesAFEBPZM
	}
		const _returnValueBF5tFC = await hamiltonianCycle(_graphj3fqwRL)
	});
})