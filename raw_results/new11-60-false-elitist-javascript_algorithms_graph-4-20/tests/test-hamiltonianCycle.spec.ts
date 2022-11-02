export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuesiyyjST = undefined;
		const _getVerticesIndicesTrN19eF = () => { return _returnValuesiyyjST };
		const _returnValueogG7ck6 = -0.8762805407098018;
		const _getAdjacencyMatrixW75RKcU = () => { return _returnValueogG7ck6 };
		const _returnValueU98xj5N = null;
		const _getAllVerticesnvqIi25 = () => { return _returnValueU98xj5N };
		const _graphnkNUG29 = {
			"getVerticesIndices": _getVerticesIndicesTrN19eF,
		"getAdjacencyMatrix": _getAdjacencyMatrixW75RKcU,
		"getAllVertices": _getAllVerticesnvqIi25
	}
		const _returnValuek2UJ0m7 = await hamiltonianCycle(_graphnkNUG29)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuepYqxqxj = null;
		const _getVerticesIndicesPmdmV58 = () => { return _returnValuepYqxqxj };
		const _returnValueUeV2p7T = {
		
	}
		const _getAdjacencyMatrixEhUPM0u = () => { return _returnValueUeV2p7T };
		const _arrayValuezPWjHG = {
		
	}
		const _returnValuefIX8Gb = [_arrayValuezPWjHG]
		const _getAllVerticesaRxfgZa = () => { return _returnValuefIX8Gb };
		const _graphjbjRNB = {
			"getVerticesIndices": _getVerticesIndicesPmdmV58,
		"getAdjacencyMatrix": _getAdjacencyMatrixEhUPM0u,
		"getAllVertices": _getAllVerticesaRxfgZa
	}
		const _returnValueaRVod12 = await hamiltonianCycle(_graphjbjRNB)
	});
})