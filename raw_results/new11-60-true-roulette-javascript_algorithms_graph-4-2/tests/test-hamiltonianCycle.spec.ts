export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValuefwog4G4 = -9.911936683279356;
		const _arrayValuedupzs4t = -3.0935462103455773;
		const _graphxrVzOlh = [_arrayValuefwog4G4, _arrayValuedupzs4t]
		const _returnValueS0T3eUt = await hamiltonianCycle(_graphxrVzOlh)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValue13Dx7h = true;
		const _getVerticesIndicesbuJdUPZ = () => { return _returnValue13Dx7h };
		const _returnValueSze1N6F = 6.403270643195896;
		const _getAdjacencyMatrixUjzUVuG = () => { return _returnValueSze1N6F };
		const _returnValuecCnM7Hx = 7.6862805353188755;
		const _getAllVerticesGOGCaLg = () => { return _returnValuecCnM7Hx };
		const _graphp8OsQ0R = {
			"getVerticesIndices": _getVerticesIndicesbuJdUPZ,
		"getAdjacencyMatrix": _getAdjacencyMatrixUjzUVuG,
		"getAllVertices": _getAllVerticesGOGCaLg
	}
		const _returnValueaUPdVYT = await hamiltonianCycle(_graphp8OsQ0R)
	});
})