export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphPio2yeD = "gWyKjkjk9aNWI7bleIB";
		const _returnValueI8FJXVm = await hamiltonianCycle(_graphPio2yeD)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueUZHIm7 = -8.58594517627983;
		const _getVerticesIndicesJv2fd2 = () => { return _returnValueUZHIm7 };
		const _returnValueu6ql09p = -4.750423529010529;
		const _getAdjacencyMatrixnJclDL0 = () => { return _returnValueu6ql09p };
		const _arrayValueo7SR2ea = null;
		const _returnValueFqfrwkz = [_arrayValueo7SR2ea]
		const _getAllVerticeskmTKPJ = () => { return _returnValueFqfrwkz };
		const _graphAHb1W3U = {
			"getVerticesIndices": _getVerticesIndicesJv2fd2,
		"getAdjacencyMatrix": _getAdjacencyMatrixnJclDL0,
		"getAllVertices": _getAllVerticeskmTKPJ
	}
		const _returnValuenZUKsCD = await hamiltonianCycle(_graphAHb1W3U)
	});
})