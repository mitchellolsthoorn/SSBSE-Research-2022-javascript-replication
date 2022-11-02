export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphZG4HTQH = undefined;
		const _returnValueKQCYvUf = await bfTravellingSalesman(_graphZG4HTQH)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuebKl0SAr = true;
		const _getAllVerticesmIDvGaS = () => { return _returnValuebKl0SAr };
		const _returnValueAWQGy7c = {
		
	}
		const _getAdjacencyMatrixVrBGIaj = () => { return _returnValueAWQGy7c };
		const _returnValueImgIZ8W = -5.28673167330148;
		const _getVerticesIndicespmWaGJM = () => { return _returnValueImgIZ8W };
		const _graphtA96yGe = {
			"getAllVertices": _getAllVerticesmIDvGaS,
		"getAdjacencyMatrix": _getAdjacencyMatrixVrBGIaj,
		"getVerticesIndices": _getVerticesIndicespmWaGJM
	}
		const _returnValuec9199Oo = await bfTravellingSalesman(_graphtA96yGe)
	});
})