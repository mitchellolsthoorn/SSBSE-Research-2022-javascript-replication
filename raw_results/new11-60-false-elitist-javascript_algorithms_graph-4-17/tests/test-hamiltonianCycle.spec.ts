export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphXNB6zY6 = 1.8669253453589558;
		const _returnValueS9VPFxZ = await hamiltonianCycle(_graphXNB6zY6)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuedm27qJE = true;
		const _getVerticesIndicesfAbzw9O = () => { return _returnValuedm27qJE };
		const _returnValuejfomNkQ = "Q0PHKoPAmdTePiIoBYfWYNJlX2kAcnCCIQ9BdpdhStWkOs5zNLRiKy3ZZdtE5Ta8sbKaiMbkIg4eY6b8m8spOoxRQTjA2";
		const _getAdjacencyMatrixym61lj5 = () => { return _returnValuejfomNkQ };
		const _returnValueOwKdtpS = {
		
	}
		const _getAllVerticesel6Ml82 = () => { return _returnValueOwKdtpS };
		const _graphkUybjUy = {
			"getVerticesIndices": _getVerticesIndicesfAbzw9O,
		"getAdjacencyMatrix": _getAdjacencyMatrixym61lj5,
		"getAllVertices": _getAllVerticesel6Ml82
	}
		const _returnValuePaCJKwf = await hamiltonianCycle(_graphkUybjUy)
	});
})