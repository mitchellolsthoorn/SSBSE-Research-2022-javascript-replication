export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuenaBR3OX = "OHQ9syxhBQdcVcQ21iR7Uva15wjKPoV7NmZo71K52O2nW7gaongWCuwXp";
		const _getVerticesIndicesLY9hrue = () => { return _returnValuenaBR3OX };
		const _returnValueNMSbwjm = undefined;
		const _getAdjacencyMatrixv9ME2D = () => { return _returnValueNMSbwjm };
		const _returnValuepcDdRa1 = null;
		const _getAllVerticesQuHNYfE = () => { return _returnValuepcDdRa1 };
		const _graphmtm2uUW = {
			"getVerticesIndices": _getVerticesIndicesLY9hrue,
		"getAdjacencyMatrix": _getAdjacencyMatrixv9ME2D,
		"getAllVertices": _getAllVerticesQuHNYfE
	}
		const _returnValueQszwzgR = await hamiltonianCycle(_graphmtm2uUW)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueppXr9sK = undefined;
		const _getVerticesIndicesN6idVow = () => { return _returnValueppXr9sK };
		const _returnValueRhW20J = undefined;
		const _getAdjacencyMatrixFtFVul3 = () => { return _returnValueRhW20J };
		const _returnValueonFliS3 = -2.561373370784973;
		const _getAllVerticesgJ1f98t = () => { return _returnValueonFliS3 };
		const _graphR9rY9hO = {
			"getVerticesIndices": _getVerticesIndicesN6idVow,
		"getAdjacencyMatrix": _getAdjacencyMatrixFtFVul3,
		"getAllVertices": _getAllVerticesgJ1f98t
	}
		const _returnValueB0WjVLO = await hamiltonianCycle(_graphR9rY9hO)
	});
})