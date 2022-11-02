export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _getVerticesIndicesJOn7dEr = -5.845222563086644;
		const _getAdjacencyMatrixPpizwIe = null;
		const _returnValueSzoUT9c = undefined;
		const _arrayValuehs458oj = () => { return _returnValueSzoUT9c };
		const _arrayValueKszg1Ds = 9.251730546289537;
		const _arrayValueKkPJQI = [_arrayValueKszg1Ds]
		const _returnValuewjAP7uf = [_arrayValuehs458oj, _arrayValueKkPJQI]
		const _getAllVerticeso69KlQ = () => { return _returnValuewjAP7uf };
		const _graphQxefNrn = {
			"getVerticesIndices": _getVerticesIndicesJOn7dEr,
		"getAdjacencyMatrix": _getAdjacencyMatrixPpizwIe,
		"getAllVertices": _getAllVerticeso69KlQ
	}
		const _returnValuew9BlRmL = await hamiltonianCycle(_graphQxefNrn)
	});

	it('test for hamiltonianCycle', async () => {
		const _arrayValueHPkh8vn = null;
		const _returnValueuBSdRn3 = [_arrayValueHPkh8vn]
		const _getVerticesIndicesxG7NoI = () => { return _returnValueuBSdRn3 };
		const _returnValuev44s9F2 = 9.669428613976375;
		const _getAdjacencyMatrixsZPgh3K = () => { return _returnValuev44s9F2 };
		const _returnValuefriFcPp = "N5lmT2JsFfUbMmYi19NCU3nu5rsVB63N7xIbIHm18mxuDgOB6A4JmwtD1XANZrmZ725qpf1zu2L4cDj27xIZSmiJWQNrw76EZa";
		const _getAllVerticesdVhixfJ = () => { return _returnValuefriFcPp };
		const _graphNtRn2n = {
			"getVerticesIndices": _getVerticesIndicesxG7NoI,
		"getAdjacencyMatrix": _getAdjacencyMatrixsZPgh3K,
		"getAllVertices": _getAllVerticesdVhixfJ
	}
		const _returnValuexin7SNq = await hamiltonianCycle(_graphNtRn2n)
	});
})