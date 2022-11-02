export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueVTUqhPl = null;
		const _getAllVerticesWCGYHb1 = () => { return _returnValueVTUqhPl };
		const _returnValueUA2H02m = {
		
	}
		const _findEdgecfAuQfR = () => { return _returnValueUA2H02m };
		const _graphR24nJeZ = {
			"getAllVertices": _getAllVerticesWCGYHb1,
		"findEdge": _findEdgecfAuQfR
	}
		const _returnValueHM0Sx3t = await floydWarshall(_graphR24nJeZ)
	});

	it('test for floydWarshall', async () => {
		const _returnValueasmAlgg = -0.29599545970626373;
		const _getAllVertices9mHcIv = () => { return _returnValueasmAlgg };
		const _returnValuepuz7TZb = null;
		const _findEdgeQ0OPVS = () => { return _returnValuepuz7TZb };
		const _graphSmsgUgw = {
			"getAllVertices": _getAllVertices9mHcIv,
		"findEdge": _findEdgeQ0OPVS
	}
		const _returnValueoFAvnPu = await floydWarshall(_graphSmsgUgw)
	});

	it('test for floydWarshall', async () => {
		const _returnValuesEHN95q = "5UXOecPjs9Tt9NXH7hAiEocij27YGocpdneNcx1PaV7RnjMaF8MjgvePJt83RSgwKnTl0LpbdpKQ8u9sVGCrXfAN8EjIJ";
		const _arrayValueXmq9eV = () => { return _returnValuesEHN95q };
		const _returnValueTkEKb83 = [_arrayValueXmq9eV]
		const _getAllVerticesImzNpKv = () => { return _returnValueTkEKb83 };
		const _arrayValueOIPtBk = null;
		const _arrayValuew0TysZy = false;
		const _arrayValueeCxpmRF = -1.1294580923678001;
		const _returnValueCBkaQj = [_arrayValueOIPtBk, _arrayValuew0TysZy, _arrayValueeCxpmRF]
		const _findEdgelGwU1I7 = () => { return _returnValueCBkaQj };
		const _graphdC96Okj = {
			"getAllVertices": _getAllVerticesImzNpKv,
		"findEdge": _findEdgelGwU1I7
	}
		const _returnValueYZCCEgJ = await floydWarshall(_graphdC96Okj)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuepRCmR7a = undefined;
		const _arrayValuePSqCQVC = null;
		const _arrayValuecVz2XC = "uv2FJeQ3Q244pGl7WXhzCjsykAYeDwu6tI0qdfIdFVqQiMLFGRz3tHOhy3MAFIsRv";
		const _arrayValueD9voER6 = [_arrayValuePSqCQVC, _arrayValuecVz2XC]
		const _returnValueX1aFMoY = [_arrayValuepRCmR7a, _arrayValueD9voER6]
		const _getAllVerticesMUv2czo = () => { return _returnValueX1aFMoY };
		const _returnValuezhMER9e = undefined;
		const _findEdgeZPhu8EF = () => { return _returnValuezhMER9e };
		const _graphjZyOp34 = {
			"getAllVertices": _getAllVerticesMUv2czo,
		"findEdge": _findEdgeZPhu8EF
	}
		const _returnValueMWWCfX = await floydWarshall(_graphjZyOp34)
	});
})