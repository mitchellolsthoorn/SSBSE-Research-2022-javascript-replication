export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuegNSQqCW = []
		const _getVerticesIndicesdtBQsHq = () => { return _returnValuegNSQqCW };
		const _getAdjacencyMatrixTQVFYS9 = true;
		const _arrayValueChsNRgi = {
		
	}
		const _returnValueey85JYB = [_arrayValueChsNRgi]
		const _getAllVerticesl0nltcF = () => { return _returnValueey85JYB };
		const _graphwvZUBF = {
			"getVerticesIndices": _getVerticesIndicesdtBQsHq,
		"getAdjacencyMatrix": _getAdjacencyMatrixTQVFYS9,
		"getAllVertices": _getAllVerticesl0nltcF
	}
		const _returnValuexd0Vwt6 = await hamiltonianCycle(_graphwvZUBF)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueMkwdTdt = undefined;
		const _getVerticesIndicespE20I6Z = () => { return _returnValueMkwdTdt };
		const _returnValueVeTomWU = {
		
	}
		const _getAdjacencyMatrixiHKhqdF = () => { return _returnValueVeTomWU };
		const _returnValuetnLVZAe = false;
		const _getAllVerticessxi9uPv = () => { return _returnValuetnLVZAe };
		const _graphwZCg4Ia = {
			"getVerticesIndices": _getVerticesIndicespE20I6Z,
		"getAdjacencyMatrix": _getAdjacencyMatrixiHKhqdF,
		"getAllVertices": _getAllVerticessxi9uPv
	}
		const _returnValueNEOZeBc = await hamiltonianCycle(_graphwZCg4Ia)
	});
})