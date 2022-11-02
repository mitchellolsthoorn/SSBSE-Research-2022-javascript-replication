export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuei4DPdsi = null;
		const _getAllVerticesDODTlrz = () => { return _returnValuei4DPdsi };
		const _returnValuekEX7oex = true;
		const _getAdjacencyMatrixINxSCZp = () => { return _returnValuekEX7oex };
		const _arrayValueevuYssE = -8.263213987535563;
		const _returnValueeyD1ikw = [_arrayValueevuYssE]
		const _getVerticesIndicesCy5Hwbe = () => { return _returnValueeyD1ikw };
		const _graphQC49300 = {
			"getAllVertices": _getAllVerticesDODTlrz,
		"getAdjacencyMatrix": _getAdjacencyMatrixINxSCZp,
		"getVerticesIndices": _getVerticesIndicesCy5Hwbe
	}
		const _returnValueZHrWqgH = await bfTravellingSalesman(_graphQC49300)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuekTHapHQ = false;
		const _getAllVerticesmlm4Iy5 = () => { return _returnValuekTHapHQ };
		const _returnValueu0eOln6 = []
		const _getAdjacencyMatrixaCu76v3 = () => { return _returnValueu0eOln6 };
		const _returnValue4u63Iu = 3.7943208317983963;
		const _getVerticesIndicesK9EOqH = () => { return _returnValue4u63Iu };
		const _graphNFNVojm = {
			"getAllVertices": _getAllVerticesmlm4Iy5,
		"getAdjacencyMatrix": _getAdjacencyMatrixaCu76v3,
		"getVerticesIndices": _getVerticesIndicesK9EOqH
	}
		const _returnValueRahGpmq = await bfTravellingSalesman(_graphNFNVojm)
	});
})