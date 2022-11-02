export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueAT4n59w = undefined;
		const _getAllVerticesqemFo0G = () => { return _returnValueAT4n59w };
		const _returnValuexYhPGt7 = undefined;
		const _getAdjacencyMatrixEyOG4mH = () => { return _returnValuexYhPGt7 };
		const _returnValueIbrTRt = "jKSmkruIl4n3i2ItAyWu4p32CTMb2a5NbnOO2MrkOIPUqBJqzNehdnTDPoHPuAtYslFmWBdnbT";
		const _getVerticesIndicesz8qktzV = () => { return _returnValueIbrTRt };
		const _graphjfzeu1 = {
			"getAllVertices": _getAllVerticesqemFo0G,
		"getAdjacencyMatrix": _getAdjacencyMatrixEyOG4mH,
		"getVerticesIndices": _getVerticesIndicesz8qktzV
	}
		const _returnValue0Kllu6 = await bfTravellingSalesman(_graphjfzeu1)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuelF8Uqoy = "UPB1f6xMF7wGMTorwWIPpiLk4ignfiP7jmCxislz2LMJmKTm4y0Dh12LJtwQBjHdVllrbLJoZvCgUnTiSM3sweRUXt6y426xxn9";
		const _getAllVerticest8Q89Gi = () => { return _returnValuelF8Uqoy };
		const _returnValuebQNPj4z = undefined;
		const _getAdjacencyMatrixLuFtZI1 = () => { return _returnValuebQNPj4z };
		const _returnValuebEAsA0l = -7.67671084617982;
		const _getVerticesIndiceszHbJKLs = () => { return _returnValuebEAsA0l };
		const _graphUFR0xc3 = {
			"getAllVertices": _getAllVerticest8Q89Gi,
		"getAdjacencyMatrix": _getAdjacencyMatrixLuFtZI1,
		"getVerticesIndices": _getVerticesIndiceszHbJKLs
	}
		const _returnValuenhKYlYc = await bfTravellingSalesman(_graphUFR0xc3)
	});
})