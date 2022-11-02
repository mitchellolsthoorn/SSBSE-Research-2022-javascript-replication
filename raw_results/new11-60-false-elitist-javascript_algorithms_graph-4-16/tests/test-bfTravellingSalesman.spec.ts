export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueBiGcdSW = 8.120842047551186;
		const _arrayValuexXU1fdH = [_arrayValueBiGcdSW]
		const _arrayValueOax1dvF = "MK8yh6E58kJznnfpiEPW";
		const _arrayValuenD0CJy9 = true;
		const _getAllVerticesVOV7G2 = [_arrayValuexXU1fdH, _arrayValueOax1dvF, _arrayValuenD0CJy9]
		const _returnValueCYyf7CE = undefined;
		const _getAdjacencyMatrixDgqwYjb = () => { return _returnValueCYyf7CE };
		const _returnValueJHumHJD = null;
		const _getVerticesIndiceskrB5ibb = () => { return _returnValueJHumHJD };
		const _graphXktpky6 = {
			"getAllVertices": _getAllVerticesVOV7G2,
		"getAdjacencyMatrix": _getAdjacencyMatrixDgqwYjb,
		"getVerticesIndices": _getVerticesIndiceskrB5ibb
	}
		const _returnValuerZMo493 = await bfTravellingSalesman(_graphXktpky6)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuebaqtm57 = true;
		const _getAllVerticesmRaFj40 = () => { return _returnValuebaqtm57 };
		const _returnValueeOOD8qf = "9aAwbCzqOi0YZyE7woBjJsX1pBiD";
		const _returnValueLm26HcN = () => { return _returnValueeOOD8qf };
		const _getAdjacencyMatrixyAE7gls = () => { return _returnValueLm26HcN };
		const _arrayValueAsdd1N = undefined;
		const _arrayValueF5uL9jV = "W8SxTXig7HsnEGMZvcM7lyv1eCzVfmmdFdzciTX7bkqVgem8pJpuYlISW79dmIk9pj1oQkDbH3RpiA5RjVDTFr9qcsfcX4sP6";
		const _returnValuefSndgb2 = [_arrayValueAsdd1N, _arrayValueF5uL9jV]
		const _getVerticesIndicesSeuatp9 = () => { return _returnValuefSndgb2 };
		const _graphZ5uG7A = {
			"getAllVertices": _getAllVerticesmRaFj40,
		"getAdjacencyMatrix": _getAdjacencyMatrixyAE7gls,
		"getVerticesIndices": _getVerticesIndicesSeuatp9
	}
		const _returnValuelSgIegM = await bfTravellingSalesman(_graphZ5uG7A)
	});
})