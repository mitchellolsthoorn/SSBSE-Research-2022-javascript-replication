export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueJKB6JY = "NaHT8RZDNgtlVMPqbPO319gCyn7JwXiTHbNhQwhNAUUHdELftJb";
		const _getVerticesIndicesnZYYnqP = () => { return _returnValueJKB6JY };
		const _returnValueIqH9061 = null;
		const _getAdjacencyMatrixlvnDaoZ = () => { return _returnValueIqH9061 };
		const _arrayValuekBGt1R = true;
		const _arrayValueyxbx2Yt = "HiFJCx9FvHlNLvx6RGe3FUxGZjYx1OhYyuBANFrCWgx79Gm7of";
		const _arrayValueyUEeBR8 = -9.413550428196524;
		const _arrayValueB5b1RGp = true;
		const _returnValueZTakseX = [_arrayValuekBGt1R, _arrayValueyxbx2Yt, _arrayValueyUEeBR8, _arrayValueB5b1RGp]
		const _getAllVerticesd8eFaRN = () => { return _returnValueZTakseX };
		const _graphv6Jo21E = {
			"getVerticesIndices": _getVerticesIndicesnZYYnqP,
		"getAdjacencyMatrix": _getAdjacencyMatrixlvnDaoZ,
		"getAllVertices": _getAllVerticesd8eFaRN
	}
		const _returnValuer6wgzIs = await hamiltonianCycle(_graphv6Jo21E)
	});
})