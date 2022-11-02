export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuerBHGH1a = null;
		const _getVerticesIndicesCPchyR6 = () => { return _returnValuerBHGH1a };
		const _returnValueIScgqu = true;
		const _getAdjacencyMatrixlsmVMCO = () => { return _returnValueIScgqu };
		const _returnValueH6ZbYYN = -9.013623294062679;
		const _getAllVerticesSUMX3Y9 = () => { return _returnValueH6ZbYYN };
		const _graphwwZ4jM6 = {
			"getVerticesIndices": _getVerticesIndicesCPchyR6,
		"getAdjacencyMatrix": _getAdjacencyMatrixlsmVMCO,
		"getAllVertices": _getAllVerticesSUMX3Y9
	}
		const _returnValuelmZCeg = await hamiltonianCycle(_graphwwZ4jM6)
	});
})