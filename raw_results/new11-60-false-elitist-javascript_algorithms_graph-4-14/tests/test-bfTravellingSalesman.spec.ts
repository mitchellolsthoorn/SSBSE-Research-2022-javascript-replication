export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueBnj2EEu = {
		
	}
		const _returnValueCvVTpGE = "Avqw5cV";
		const _arrayValuekssSlfB = () => { return _returnValueCvVTpGE };
		const _arrayValueN96hlkQ = [_arrayValueBnj2EEu, _arrayValuekssSlfB]
		const _returnValueLAyJXIP = true;
		const _returnValueiq6MbzG = () => { return _returnValueLAyJXIP };
		const _arrayValueVGYO28 = () => { return _returnValueiq6MbzG };
		const _returnValuefAKeJ0H = [_arrayValueN96hlkQ, _arrayValueVGYO28]
		const _getAllVerticesjyc6Hlm = () => { return _returnValuefAKeJ0H };
		const _returnValueIfPOSNc = {
		
	}
		const _getAdjacencyMatrixD08DnX9 = () => { return _returnValueIfPOSNc };
		const _returnValueMgvqoST = false;
		const _getVerticesIndicese34tVW3 = () => { return _returnValueMgvqoST };
		const _graphgoBySfu = {
			"getAllVertices": _getAllVerticesjyc6Hlm,
		"getAdjacencyMatrix": _getAdjacencyMatrixD08DnX9,
		"getVerticesIndices": _getVerticesIndicese34tVW3
	}
		const _returnValueJb1QL6e = await bfTravellingSalesman(_graphgoBySfu)
	});
})