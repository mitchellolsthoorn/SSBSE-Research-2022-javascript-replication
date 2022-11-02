export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphsJXXSgA = true;
		const _returnValueC4zCJF = await bfTravellingSalesman(_graphsJXXSgA)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValueGcMoof = false;
		const _arrayValueqqXSUEZ = 2.343902489940586;
		const _returnValueGqeFFWv = [_arrayValueGcMoof, _arrayValueqqXSUEZ]
		const _getAllVerticescK4B3t5 = () => { return _returnValueGqeFFWv };
		const _returnValueDNWpRod = null;
		const _getAdjacencyMatrixZOcHL5n = () => { return _returnValueDNWpRod };
		const _returnValueJgYWdde = undefined;
		const _getVerticesIndiceskXK51aX = () => { return _returnValueJgYWdde };
		const _graphzgBTN89 = {
			"getAllVertices": _getAllVerticescK4B3t5,
		"getAdjacencyMatrix": _getAdjacencyMatrixZOcHL5n,
		"getVerticesIndices": _getVerticesIndiceskXK51aX
	}
		const _returnValueuDWbCcn = await bfTravellingSalesman(_graphzgBTN89)
	});
})