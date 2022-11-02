export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuexWEhVqV = false;
		const _getVerticesIndices0USNot = () => { return _returnValuexWEhVqV };
		const _returnValuekM2Br32 = true;
		const _getAdjacencyMatrixzq08Ap = () => { return _returnValuekM2Br32 };
		const _returnValue0t3MZQ = null;
		const _returnValueYeGef2Z = () => { return _returnValue0t3MZQ };
		const _getAllVerticesJH6JEPY = () => { return _returnValueYeGef2Z };
		const _graphWHMJFDJ = {
			"getVerticesIndices": _getVerticesIndices0USNot,
		"getAdjacencyMatrix": _getAdjacencyMatrixzq08Ap,
		"getAllVertices": _getAllVerticesJH6JEPY
	}
		const _returnValuePAhrvS = await hamiltonianCycle(_graphWHMJFDJ)
	});
})