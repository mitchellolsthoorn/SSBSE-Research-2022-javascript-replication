export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueLzcPogR = -7.935995907153013;
		const _getVerticesIndicesYaQE8Sz = () => { return _returnValueLzcPogR };
		const _arrayValueQYoDH4b = "QQhOI03UpBeIp";
		const _returnValuebciOjvz = [_arrayValueQYoDH4b]
		const _getAdjacencyMatrixpv43br = () => { return _returnValuebciOjvz };
		const _returnValueq3kAvuI = "xPYcUyK7p67p7As1cKqL2Icbd56mPpZ";
		const _getAllVertices5RfZDX = () => { return _returnValueq3kAvuI };
		const _graphcMCJtEh = {
			"getVerticesIndices": _getVerticesIndicesYaQE8Sz,
		"getAdjacencyMatrix": _getAdjacencyMatrixpv43br,
		"getAllVertices": _getAllVertices5RfZDX
	}
		const _returnValuez6J9Gbw = await hamiltonianCycle(_graphcMCJtEh)
	});
})