export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuegwyls2p = undefined;
		const _getAllVerticesWQzeGBV = () => { return _returnValuegwyls2p };
		const _returnValueDpotYtx = -6.379531169380881;
		const _getAdjacencyMatrixhNUJPa = () => { return _returnValueDpotYtx };
		const _getVerticesIndicesvIfwtqt = null;
		const _graphExZSy6r = {
			"getAllVertices": _getAllVerticesWQzeGBV,
		"getAdjacencyMatrix": _getAdjacencyMatrixhNUJPa,
		"getVerticesIndices": _getVerticesIndicesvIfwtqt
	}
		const _returnValue7Q0ktw = await bfTravellingSalesman(_graphExZSy6r)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueB1rxlaW = -3.454209236659623;
		const _getAllVerticess1bFMU = () => { return _returnValueB1rxlaW };
		const _returnValuebHkLagm = undefined;
		const _getAdjacencyMatrixE3jhE5 = () => { return _returnValuebHkLagm };
		const _returnValuevXF5I3w = true;
		const _getVerticesIndiceseJ0xfX = () => { return _returnValuevXF5I3w };
		const _graphJraSdsB = {
			"getAllVertices": _getAllVerticess1bFMU,
		"getAdjacencyMatrix": _getAdjacencyMatrixE3jhE5,
		"getVerticesIndices": _getVerticesIndiceseJ0xfX
	}
		const _returnValuehMvABzS = await bfTravellingSalesman(_graphJraSdsB)
	});
})