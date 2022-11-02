export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _getAllVerticesgTGfaAh = -9.88425231551212;
		const _returnValueJRmMIDV = null;
		const _returnValuePYPviLD = () => { return _returnValueJRmMIDV };
		const _getAdjacencyMatrixiHJcw0p = () => { return _returnValuePYPviLD };
		const _returnValueE6jf99U = null;
		const _getVerticesIndicesSWyCRq0 = () => { return _returnValueE6jf99U };
		const _graphjAy90kk = {
			"getAllVertices": _getAllVerticesgTGfaAh,
		"getAdjacencyMatrix": _getAdjacencyMatrixiHJcw0p,
		"getVerticesIndices": _getVerticesIndicesSWyCRq0
	}
		const _returnValueh0W6DhQ = await bfTravellingSalesman(_graphjAy90kk)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueo4ypqKa = 1.9241466418335857;
		const _getAllVerticesIYxdllW = () => { return _returnValueo4ypqKa };
		const _returnValueQMy5kiM = null;
		const _getAdjacencyMatrixd08UxbV = () => { return _returnValueQMy5kiM };
		const _returnValueeDCAgzq = null;
		const _returnValueck7Cw8 = () => { return _returnValueeDCAgzq };
		const _getVerticesIndicesrBV7CHC = () => { return _returnValueck7Cw8 };
		const _graphS0Ok0td = {
			"getAllVertices": _getAllVerticesIYxdllW,
		"getAdjacencyMatrix": _getAdjacencyMatrixd08UxbV,
		"getVerticesIndices": _getVerticesIndicesrBV7CHC
	}
		const _returnValueuajfjy8 = await bfTravellingSalesman(_graphS0Ok0td)
	});
})