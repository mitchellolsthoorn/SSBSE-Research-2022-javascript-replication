export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graph6RZia1 = "tPb8WUtZ5";
		const _returnValueX8akH78 = await floydWarshall(_graph6RZia1)
	});

	it('test for floydWarshall', async () => {
		const _returnValueGQIcZgk = undefined;
		const _getAllVerticesAfRN4zf = () => { return _returnValueGQIcZgk };
		const _returnValueMv4sAHy = undefined;
		const _returnValueEds7jMv = () => { return _returnValueMv4sAHy };
		const _findEdgeH8WrRIK = () => { return _returnValueEds7jMv };
		const _graphEywN0Pz = {
			"getAllVertices": _getAllVerticesAfRN4zf,
		"findEdge": _findEdgeH8WrRIK
	}
		const _returnValueLLGlVBm = await floydWarshall(_graphEywN0Pz)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedO4kXWeB = false;
		const _graphFiNgMI = new Graph(_isDirectedO4kXWeB)
		const _returnValueRN2lre = await _graphFiNgMI.toString()
		const _returnValueFub0pE4 = await _graphFiNgMI.getAllEdges()
		const _returnValueQuPFaio = await _graphFiNgMI.reverse()
		const _returnValuewZVmoJC = await floydWarshall(_graphFiNgMI)
	});

	it('test for floydWarshall', async () => {
		const _returnValueCWjyU27 = "X2eVBpR4gzvaBL859HP0osoGglNYoyjPuQtQxENUuU86GS";
		const _arrayValuePeeqyr3 = () => { return _returnValueCWjyU27 };
		const _arrayValueJueKJ4C = false;
		const _returnValuedBQL2pw = [_arrayValuePeeqyr3, _arrayValueJueKJ4C]
		const _getAllVerticesLj8Hk79 = () => { return _returnValuedBQL2pw };
		const _findEdgesrWE8k1 = 1.3467062831918781;
		const _graphn8CSlR = {
			"getAllVertices": _getAllVerticesLj8Hk79,
		"findEdge": _findEdgesrWE8k1
	}
		const _returnValuez6ulxqx = await floydWarshall(_graphn8CSlR)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueo2HdAkz = "2fD6EEMUB0FPwHMsYxqWJSJRrUYvLJYdYl8inSeN";
		const _arrayValuedMHIxcq = false;
		const _returnValueI6h2Wwm = [_arrayValueo2HdAkz, _arrayValuedMHIxcq]
		const _getAllVertices3bM45O = () => { return _returnValueI6h2Wwm };
		const _returnValuejtGkEkw = 0.17395925264527534;
		const _findEdge5R9eHS = () => { return _returnValuejtGkEkw };
		const _graphTy9fDA = {
			"getAllVertices": _getAllVertices3bM45O,
		"findEdge": _findEdge5R9eHS
	}
		const _returnValuektec9U9 = await floydWarshall(_graphTy9fDA)
	});
})