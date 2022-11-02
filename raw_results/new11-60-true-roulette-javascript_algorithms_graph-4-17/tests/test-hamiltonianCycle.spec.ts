export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _arrayValuezTAJsh1 = -1.8675973633054959;
		const _graphiyLiJfl = [_arrayValuezTAJsh1]
		const _returnValueykb2iKw = await hamiltonianCycle(_graphiyLiJfl)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuec5bLUeu = undefined;
		const _getVerticesIndicesx5CM5h = () => { return _returnValuec5bLUeu };
		const _returnValueDocA9Mj = 6.505501712134205;
		const _getAdjacencyMatrixTscsVpg = () => { return _returnValueDocA9Mj };
		const _returnValueeyoZOyw = "lltJ9xYDNXPfA9WuWeWAgPuBnzOLWAvgwO5sSgxfwqfdWxcJgpnWuxbWEfaYGiDNbRNazFxr50ge3p";
		const _getAllVerticesaNTREBJ = () => { return _returnValueeyoZOyw };
		const _graphvriQCt5 = {
			"getVerticesIndices": _getVerticesIndicesx5CM5h,
		"getAdjacencyMatrix": _getAdjacencyMatrixTscsVpg,
		"getAllVertices": _getAllVerticesaNTREBJ
	}
		const _returnValueWtdytFL = await hamiltonianCycle(_graphvriQCt5)
	});
})