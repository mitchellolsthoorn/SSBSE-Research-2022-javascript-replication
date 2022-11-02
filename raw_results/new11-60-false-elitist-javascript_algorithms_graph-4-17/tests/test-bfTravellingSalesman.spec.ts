export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _getAllVerticesVIXdFCV = -0.7560563037379815;
		const _returnValuevWox82G = null;
		const _getAdjacencyMatrixzv5zrQd = () => { return _returnValuevWox82G };
		const _arrayValueLqtjpRl = "GR0u8YSVpkStGH8YD9DiqYMr3o81D4EtHUpAahBrKOvvfVwk2Mzyks1UtyQK7mxnvxP";
		const _returnValueUKVkUis = [_arrayValueLqtjpRl]
		const _getVerticesIndicesKivanI0 = () => { return _returnValueUKVkUis };
		const _graphF4Hjh0 = {
			"getAllVertices": _getAllVerticesVIXdFCV,
		"getAdjacencyMatrix": _getAdjacencyMatrixzv5zrQd,
		"getVerticesIndices": _getVerticesIndicesKivanI0
	}
		const _returnValuetHqRiT = await bfTravellingSalesman(_graphF4Hjh0)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueNelOVRf = 8.670093518267098;
		const _getAllVertices3rG6km = () => { return _returnValueNelOVRf };
		const _returnValueYCNTGh = {
		
	}
		const _getAdjacencyMatrixSiZ7XkD = () => { return _returnValueYCNTGh };
		const _returnValueaxVRxDE = true;
		const _getVerticesIndicesqerlMpr = () => { return _returnValueaxVRxDE };
		const _graphZYh31aN = {
			"getAllVertices": _getAllVertices3rG6km,
		"getAdjacencyMatrix": _getAdjacencyMatrixSiZ7XkD,
		"getVerticesIndices": _getVerticesIndicesqerlMpr
	}
		const _returnValuedmMApWs = await bfTravellingSalesman(_graphZYh31aN)
	});
})