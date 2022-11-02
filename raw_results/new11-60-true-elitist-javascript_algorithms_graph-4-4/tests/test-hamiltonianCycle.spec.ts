export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueZZMgKCF = 8.728825119006398;
		const _returnValuehCkuKtw = () => { return _returnValueZZMgKCF };
		const _getVerticesIndices2iHyvb = () => { return _returnValuehCkuKtw };
		const _returnValueS5KbohL = undefined;
		const _getAdjacencyMatrixwe2kD85 = () => { return _returnValueS5KbohL };
		const _arrayValueCVIoq66 = 0.9512774260344319;
		const _arrayValuejgsg1Oy = {
		
	}
		const _returnValueAWKDyJZ = [_arrayValueCVIoq66, _arrayValuejgsg1Oy]
		const _returnValueVamtxAw = () => { return _returnValueAWKDyJZ };
		const _getAllVerticesprJYCqx = () => { return _returnValueVamtxAw };
		const _graphz5fXAw8 = {
			"getVerticesIndices": _getVerticesIndices2iHyvb,
		"getAdjacencyMatrix": _getAdjacencyMatrixwe2kD85,
		"getAllVertices": _getAllVerticesprJYCqx
	}
		const _returnValueh7VZpT = await hamiltonianCycle(_graphz5fXAw8)
	});
})