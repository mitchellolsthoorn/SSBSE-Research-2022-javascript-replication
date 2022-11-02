export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValue31kSzk = null;
		const _arrayValuesW9bRM9 = false;
		const _returnValueRqzw1R4 = [_arrayValue31kSzk, _arrayValuesW9bRM9]
		const _getVerticesIndicesOxlWcmu = () => { return _returnValueRqzw1R4 };
		const _returnValueihfI9vD = false;
		const _getAdjacencyMatrixbOC09Ja = () => { return _returnValueihfI9vD };
		const _returnValuep7hSOqi = undefined;
		const _getAllVerticesDPSY22K = () => { return _returnValuep7hSOqi };
		const _graphQGnRosy = {
			"getVerticesIndices": _getVerticesIndicesOxlWcmu,
		"getAdjacencyMatrix": _getAdjacencyMatrixbOC09Ja,
		"getAllVertices": _getAllVerticesDPSY22K
	}
		const _returnValuePjPW0FN = await hamiltonianCycle(_graphQGnRosy)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueYdPlYg7 = undefined;
		const _getVerticesIndicesVKIu3JP = () => { return _returnValueYdPlYg7 };
		const _returnValueFo9PmGJ = {
		
	}
		const _getAdjacencyMatrixXzDMLOM = () => { return _returnValueFo9PmGJ };
		const _arrayValuegRKiGrf = null;
		const _returnValueHYrLwB7 = [_arrayValuegRKiGrf]
		const _getAllVerticesTIsQnl = () => { return _returnValueHYrLwB7 };
		const _graphdBvQU2E = {
			"getVerticesIndices": _getVerticesIndicesVKIu3JP,
		"getAdjacencyMatrix": _getAdjacencyMatrixXzDMLOM,
		"getAllVertices": _getAllVerticesTIsQnl
	}
		const _returnValue2GsnSb = await hamiltonianCycle(_graphdBvQU2E)
	});
})