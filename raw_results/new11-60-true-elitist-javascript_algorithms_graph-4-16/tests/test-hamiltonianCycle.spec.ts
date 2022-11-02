export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValueSHIAPy = {
		
	}
		const _getVerticesIndicesXdw8CLO = [_arrayValueSHIAPy]
		const _returnValueHREiWYZ = "LC1l18Av1lrD7KNH";
		const _getAdjacencyMatrixSZF31gp = () => { return _returnValueHREiWYZ };
		const _returnValueBiTjTAF = {
		
	}
		const _getAllVerticessJkihB = () => { return _returnValueBiTjTAF };
		const _graphWRzpGot = {
			"getVerticesIndices": _getVerticesIndicesXdw8CLO,
		"getAdjacencyMatrix": _getAdjacencyMatrixSZF31gp,
		"getAllVertices": _getAllVerticessJkihB
	}
		const _returnValueGAvFAud = await hamiltonianCycle(_graphWRzpGot)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuebI7faTR = false;
		const _getVerticesIndicesFGbzsbS = () => { return _returnValuebI7faTR };
		const _returnValueInvgMW = true;
		const _getAdjacencyMatrixUHwRMKv = () => { return _returnValueInvgMW };
		const _returnValuemzByklC = false;
		const _getAllVerticesavTr2G = () => { return _returnValuemzByklC };
		const _graph8af7VK = {
			"getVerticesIndices": _getVerticesIndicesFGbzsbS,
		"getAdjacencyMatrix": _getAdjacencyMatrixUHwRMKv,
		"getAllVertices": _getAllVerticesavTr2G
	}
		const _returnValueAGi6x0I = await hamiltonianCycle(_graph8af7VK)
	});
})