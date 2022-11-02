export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _getVerticesIndicesMeNoRvZ = true;
		const _returnValueSkrkkKF = {
		
	}
		const _getAdjacencyMatrixwWkOSBR = () => { return _returnValueSkrkkKF };
		const _returnValuen31RZdN = false;
		const _getAllVerticeshVjcNP = () => { return _returnValuen31RZdN };
		const _graphPrO9EMY = {
			"getVerticesIndices": _getVerticesIndicesMeNoRvZ,
		"getAdjacencyMatrix": _getAdjacencyMatrixwWkOSBR,
		"getAllVertices": _getAllVerticeshVjcNP
	}
		const _returnValueqQ3ZKqe = await hamiltonianCycle(_graphPrO9EMY)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueJ2IYe5 = null;
		const _getVerticesIndicesO0s4SJj = () => { return _returnValueJ2IYe5 };
		const _arrayValueSMwek4v = 9.143837333929138;
		const _returnValueiwQdJ1M = [_arrayValueSMwek4v]
		const _returnValueNxnOoM8 = () => { return _returnValueiwQdJ1M };
		const _getAdjacencyMatrixXXALOgI = () => { return _returnValueNxnOoM8 };
		const _returnValuefAdladR = "rVIUYhEPOuCrpnNh1lFMugHmsbdjp1WW6H4QGqa7zLHBMvRiESp5QAqmA4ogAr7YPw7tMiiuEsiCzK";
		const _getAllVerticeszxjA9c9 = () => { return _returnValuefAdladR };
		const _graphcyCAhqA = {
			"getVerticesIndices": _getVerticesIndicesO0s4SJj,
		"getAdjacencyMatrix": _getAdjacencyMatrixXXALOgI,
		"getAllVertices": _getAllVerticeszxjA9c9
	}
		const _returnValueNw33LzX = await hamiltonianCycle(_graphcyCAhqA)
	});
})