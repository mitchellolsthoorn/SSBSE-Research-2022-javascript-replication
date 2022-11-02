export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueONSV4km = false;
		const _getAllVerticesSugJQ01 = () => { return _returnValueONSV4km };
		const _arrayValuehFTcBcB = false;
		const _arrayValueVrvHJsG = null;
		const _arrayValueOKxSgG2 = [_arrayValuehFTcBcB, _arrayValueVrvHJsG]
		const _arrayValueRnP4p2n = null;
		const _returnValuee6iQi4 = [_arrayValueOKxSgG2, _arrayValueRnP4p2n]
		const _findEdge2KEGcw = () => { return _returnValuee6iQi4 };
		const _graphtvFRZRM = {
			"getAllVertices": _getAllVerticesSugJQ01,
		"findEdge": _findEdge2KEGcw
	}
		const _returnValueIdvvTbF = await floydWarshall(_graphtvFRZRM)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueHHHcc1w = -6.841754623660366;
		const _arrayValueGwXYax3 = false;
		const _returnValueTfbnzBY = [_arrayValueHHHcc1w, _arrayValueGwXYax3]
		const _getAllVerticesRSeIuHf = () => { return _returnValueTfbnzBY };
		const _returnValuerahixf = "IbpxB1oyns";
		const _findEdgeBXi6GBM = () => { return _returnValuerahixf };
		const _graphOJKV9g = {
			"getAllVertices": _getAllVerticesRSeIuHf,
		"findEdge": _findEdgeBXi6GBM
	}
		const _returnValueaXeAL5P = await floydWarshall(_graphOJKV9g)
	});
})