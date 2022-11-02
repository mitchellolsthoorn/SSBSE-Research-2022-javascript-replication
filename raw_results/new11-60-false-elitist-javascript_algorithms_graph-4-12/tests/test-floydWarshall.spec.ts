export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueLi6jUYN = -4.015737710451418;
		const _getAllVerticesBemjwRJ = () => { return _returnValueLi6jUYN };
		const _findEdgefHqDH4F = "tFO9O";
		const _graphT63px2Q = {
			"getAllVertices": _getAllVerticesBemjwRJ,
		"findEdge": _findEdgefHqDH4F
	}
		const _returnValueCM3Svvf = await floydWarshall(_graphT63px2Q)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueOOSmugb = undefined;
		const _arrayValuerLwun1G = true;
		const _returnValuez8uTYqL = [_arrayValueOOSmugb, _arrayValuerLwun1G]
		const _getAllVerticesEzcT9b = () => { return _returnValuez8uTYqL };
		const _arrayValueFEoWCdp = undefined;
		const _arrayValueGq1LbO0 = null;
		const _arrayValueo96LOPL = null;
		const _returnValueDHQshFi = [_arrayValueFEoWCdp, _arrayValueGq1LbO0, _arrayValueo96LOPL]
		const _findEdgeSzkzx9O = () => { return _returnValueDHQshFi };
		const _graphAtlD6nH = {
			"getAllVertices": _getAllVerticesEzcT9b,
		"findEdge": _findEdgeSzkzx9O
	}
		const _returnValueUF5E6uu = await floydWarshall(_graphAtlD6nH)
	});
})