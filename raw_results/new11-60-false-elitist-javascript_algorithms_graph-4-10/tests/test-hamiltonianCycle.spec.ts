export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueIkkfW5g = true;
		const _getVerticesIndicesAN8KDsp = () => { return _returnValueIkkfW5g };
		const _returnValueqrkGuRq = {
		
	}
		const _getAdjacencyMatrixb7ZacNS = () => { return _returnValueqrkGuRq };
		const _returnValueOTRQSVa = "rKcRiFD2AwKHrzEG6C3";
		const _getAllVerticesAXIsovl = () => { return _returnValueOTRQSVa };
		const _graphwMHHBV = {
			"getVerticesIndices": _getVerticesIndicesAN8KDsp,
		"getAdjacencyMatrix": _getAdjacencyMatrixb7ZacNS,
		"getAllVertices": _getAllVerticesAXIsovl
	}
		const _returnValue4SIxRD = await hamiltonianCycle(_graphwMHHBV)
	});
})