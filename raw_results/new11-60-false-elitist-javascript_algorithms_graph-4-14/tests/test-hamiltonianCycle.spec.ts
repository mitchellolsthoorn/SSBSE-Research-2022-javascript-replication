export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuejUwaKn0 = "5tilfVMlLPc8U8kIQz06aXl4RRvkUyCb9rgmwT87BLmXYxEMQm3hYmtju";
		const _getVerticesIndicesZrpd6zL = () => { return _returnValuejUwaKn0 };
		const _returnValuekAAJzdl = "DItDiZxoiZEnugH7AyNyDwzqY6HcheZznFXwN6dO7m1JP9bC1jvz8z1CN86Bz30SNvHNbH7N";
		const _getAdjacencyMatrixCqW9BEF = () => { return _returnValuekAAJzdl };
		const _returnValueE3W6ECR = true;
		const _getAllVerticesNXDx61I = () => { return _returnValueE3W6ECR };
		const _graphwVSYEYJ = {
			"getVerticesIndices": _getVerticesIndicesZrpd6zL,
		"getAdjacencyMatrix": _getAdjacencyMatrixCqW9BEF,
		"getAllVertices": _getAllVerticesNXDx61I
	}
		const _returnValueeWxyaOZ = await hamiltonianCycle(_graphwVSYEYJ)
	});
})