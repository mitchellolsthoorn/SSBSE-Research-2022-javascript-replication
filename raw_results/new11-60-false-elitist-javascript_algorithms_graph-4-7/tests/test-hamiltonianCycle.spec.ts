export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueKYhs8Ca = 4.591887145009432;
		const _getVerticesIndices4HiDXd = () => { return _returnValueKYhs8Ca };
		const _getAdjacencyMatrixHINZhv = true;
		const _returnValuegQPLMD8 = "EcOGzKR1S1oJboskjpN4flP8uNS3GgiaUg19s6X43LyFW8OTMJFgPubdyDYYszOAIJvJwybfmqD2R1zu40b";
		const _getAllVerticesZc8WRz = () => { return _returnValuegQPLMD8 };
		const _graphdD5U7NA = {
			"getVerticesIndices": _getVerticesIndices4HiDXd,
		"getAdjacencyMatrix": _getAdjacencyMatrixHINZhv,
		"getAllVertices": _getAllVerticesZc8WRz
	}
		const _returnValueSEegNzF = await hamiltonianCycle(_graphdD5U7NA)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueGmEImGY = {
		
	}
		const _getVerticesIndicesbYhemkI = () => { return _returnValueGmEImGY };
		const _returnValuedqbVMxn = "wkX7GGAsB";
		const _getAdjacencyMatrixYmx9Za = () => { return _returnValuedqbVMxn };
		const _returnValueOg3OsWT = -2.814629551678207;
		const _getAllVerticescOuGFS = () => { return _returnValueOg3OsWT };
		const _graphe8tXC7z = {
			"getVerticesIndices": _getVerticesIndicesbYhemkI,
		"getAdjacencyMatrix": _getAdjacencyMatrixYmx9Za,
		"getAllVertices": _getAllVerticescOuGFS
	}
		const _returnValueE85sImA = await hamiltonianCycle(_graphe8tXC7z)
	});
})