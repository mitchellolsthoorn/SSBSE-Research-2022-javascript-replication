export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueLwCGPYx = null;
		const _getVerticesIndicesMK5AjFj = () => { return _returnValueLwCGPYx };
		const _returnValuefnSUF9y = "wjUSTCsMQCBxwkSgmmJGMv4J3ufQNX20COwX7vUsjnKHbHdsBlcWBrXoVuXLrZamgjVuidpdmCgmR";
		const _getAdjacencyMatrixBtZrx9M = () => { return _returnValuefnSUF9y };
		const _arrayValueiLbLSQL = null;
		const _arrayValuenZfzroe = true;
		const _returnValuekjWwkpz = [_arrayValueiLbLSQL, _arrayValuenZfzroe]
		const _getAllVerticeseom00J = () => { return _returnValuekjWwkpz };
		const _graphk5EKMhH = {
			"getVerticesIndices": _getVerticesIndicesMK5AjFj,
		"getAdjacencyMatrix": _getAdjacencyMatrixBtZrx9M,
		"getAllVertices": _getAllVerticeseom00J
	}
		const _returnValuenGZS3xE = await hamiltonianCycle(_graphk5EKMhH)
	});
})