export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueAJfcGoJ = null;
		const _graphfwyeCls = () => { return _returnValueAJfcGoJ };
		const _returnValueZ61oVaT = await floydWarshall(_graphfwyeCls)
	});

	it('test for floydWarshall', async () => {
		const _returnValuecLU2eYP = 9.76515733041468;
		const _getAllVerticesNZRJ7g = () => { return _returnValuecLU2eYP };
		const _returnValueAA7ma2D = -4.443774524314554;
		const _returnValueRsxY4HT = () => { return _returnValueAA7ma2D };
		const _findEdgePfutDjz = () => { return _returnValueRsxY4HT };
		const _graphIZdiTic = {
			"getAllVertices": _getAllVerticesNZRJ7g,
		"findEdge": _findEdgePfutDjz
	}
		const _returnValue3cpTaE = await floydWarshall(_graphIZdiTic)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuedzG4Luj = undefined;
		const _arrayValueOtcDGgb = undefined;
		const _arrayValuejbi4CLM = undefined;
		const _returnValueDtY87fN = [_arrayValuedzG4Luj, _arrayValueOtcDGgb, _arrayValuejbi4CLM]
		const _getAllVerticesxzuuvml = () => { return _returnValueDtY87fN };
		const _returnValueeqKvilq = true;
		const _findEdgekl2S3K = () => { return _returnValueeqKvilq };
		const _graphFmq0cM = {
			"getAllVertices": _getAllVerticesxzuuvml,
		"findEdge": _findEdgekl2S3K
	}
		const _returnValuepHSHOKg = await floydWarshall(_graphFmq0cM)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuegdGPQgo = undefined;
		const _arrayValuemInlDv = true;
		const _returnValuenrnmF66 = undefined;
		const _arrayValueZljxtR3 = () => { return _returnValuenrnmF66 };
		const _returnValueIu6L2iF = [_arrayValuegdGPQgo, _arrayValuemInlDv, _arrayValueZljxtR3]
		const _getAllVerticesUetf6g = () => { return _returnValueIu6L2iF };
		const _returnValueGH1o8iW = true;
		const _findEdgeHZocpR7 = () => { return _returnValueGH1o8iW };
		const _graphJdQ5D68 = {
			"getAllVertices": _getAllVerticesUetf6g,
		"findEdge": _findEdgeHZocpR7
	}
		const _returnValueWroSRPG = await floydWarshall(_graphJdQ5D68)
	});
})