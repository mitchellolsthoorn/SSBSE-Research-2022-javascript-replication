export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueBfU69U8 = false;
		const _getAllVerticess5pzyAe = () => { return _returnValueBfU69U8 };
		const _returnValueHAlLaeO = true;
		const _findEdgedAFxHKF = () => { return _returnValueHAlLaeO };
		const _graphYIs3h5P = {
			"getAllVertices": _getAllVerticess5pzyAe,
		"findEdge": _findEdgedAFxHKF
	}
		const _returnValueHLIWkoE = await floydWarshall(_graphYIs3h5P)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueDNaZAoa = false;
		const _returnValueK69bJDp = [_arrayValueDNaZAoa]
		const _getAllVerticesC5QRcbR = () => { return _returnValueK69bJDp };
		const _returnValueFgMtULm = false;
		const _findEdgesUoHQlM = () => { return _returnValueFgMtULm };
		const _graph9WnZRX = {
			"getAllVertices": _getAllVerticesC5QRcbR,
		"findEdge": _findEdgesUoHQlM
	}
		const _returnValuedRpflf = await floydWarshall(_graph9WnZRX)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueO6Uoz6P = {
		
	}
		const _arrayValueCzd6Tmg = "nyXGcf6AmgDSCQvowmrj8ofkIhzwkTsQSP";
		const _returnValueN4bL2U = [_arrayValueO6Uoz6P, _arrayValueCzd6Tmg]
		const _getAllVerticeslJMWnXb = () => { return _returnValueN4bL2U };
		const _findEdgeuBzKJJI = false;
		const _graph3eFbZs = {
			"getAllVertices": _getAllVerticeslJMWnXb,
		"findEdge": _findEdgeuBzKJJI
	}
		const _returnValueaSE2pt = await floydWarshall(_graph3eFbZs)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueS9bKyhj = undefined;
		const _arrayValueMzssH0a = "Hf7sALAczmlPApp1Yjg4OIVw";
		const _arrayValuebCjcSK6 = [_arrayValueS9bKyhj, _arrayValueMzssH0a]
		const _arrayValueFpr2BOk = {
		
	}
		const _arrayValuePlRUScb = null;
		const _arrayValuei6p8rw4 = {
		
	}
		const _arrayValueqkYyHn4 = [_arrayValuePlRUScb, _arrayValuei6p8rw4]
		const _returnValueqidwnae = [_arrayValueFpr2BOk, _arrayValueqkYyHn4]
		const _arrayValuePJzQRU = () => { return _returnValueqidwnae };
		const _returnValueZ8BOncc = [_arrayValuebCjcSK6, _arrayValuePJzQRU]
		const _getAllVertices428pJy = () => { return _returnValueZ8BOncc };
		const _returnValueEY3Jw6F = false;
		const _findEdgeD4fluO = () => { return _returnValueEY3Jw6F };
		const _graphOnkQH9c = {
			"getAllVertices": _getAllVertices428pJy,
		"findEdge": _findEdgeD4fluO
	}
		const _returnValuelzncsG = await floydWarshall(_graphOnkQH9c)
	});
})