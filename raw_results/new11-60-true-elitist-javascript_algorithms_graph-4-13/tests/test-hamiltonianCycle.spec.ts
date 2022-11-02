export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueL8cEADC = null;
		const _getVerticesIndicest79d7Ik = () => { return _returnValueL8cEADC };
		const _returnValueMr1jWbm = 0.1253592763667566;
		const _getAdjacencyMatrixGbJfbC2 = () => { return _returnValueMr1jWbm };
		const _returnValueaw6nQfh = undefined;
		const _getAllVerticeszZVtdf = () => { return _returnValueaw6nQfh };
		const _graphkebDYDp = {
			"getVerticesIndices": _getVerticesIndicest79d7Ik,
		"getAdjacencyMatrix": _getAdjacencyMatrixGbJfbC2,
		"getAllVertices": _getAllVerticeszZVtdf
	}
		const _returnValueKmoVhF = await hamiltonianCycle(_graphkebDYDp)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueliWg01 = "GE";
		const _getVerticesIndicesDkMaSGW = () => { return _returnValueliWg01 };
		const _returnValuePyqOQaB = undefined;
		const _getAdjacencyMatrixtohDN5O = () => { return _returnValuePyqOQaB };
		const _arrayValueO9FYFDM = -3.803927349539867;
		const _arrayValueWnNkMtn = -9.477076109999699;
		const _returnValueXp4THlT = [_arrayValueO9FYFDM, _arrayValueWnNkMtn]
		const _getAllVerticesQ54lUq = () => { return _returnValueXp4THlT };
		const _graphxVK6d9A = {
			"getVerticesIndices": _getVerticesIndicesDkMaSGW,
		"getAdjacencyMatrix": _getAdjacencyMatrixtohDN5O,
		"getAllVertices": _getAllVerticesQ54lUq
	}
		const _returnValuebio1yUF = await hamiltonianCycle(_graphxVK6d9A)
	});
})