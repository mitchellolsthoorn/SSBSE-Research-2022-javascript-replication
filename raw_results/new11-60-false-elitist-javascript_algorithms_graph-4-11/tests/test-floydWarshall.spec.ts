export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuefIbsfYk = "qnX2L7NKoFLANMqC5s3aFjxYkFEAh58FrcRXqeQtc1LWaBKQvvhtmaHgLnUl5EF9E12DT";
		const _getAllVerticesw9RKzB3 = () => { return _returnValuefIbsfYk };
		const _returnValueUDPfwto = undefined;
		const _findEdgeSa9Lf0p = () => { return _returnValueUDPfwto };
		const _graphgGzlAaD = {
			"getAllVertices": _getAllVerticesw9RKzB3,
		"findEdge": _findEdgeSa9Lf0p
	}
		const _returnValuec91nxKy = await floydWarshall(_graphgGzlAaD)
	});

	it('test for floydWarshall', async () => {
		const _returnValueci9f0sg = []
		const _getAllVerticesqFgXe2Y = () => { return _returnValueci9f0sg };
		const _returnValuekecwTb5 = null;
		const _findEdgeE46ZK26 = () => { return _returnValuekecwTb5 };
		const _graphoYp6gjR = {
			"getAllVertices": _getAllVerticesqFgXe2Y,
		"findEdge": _findEdgeE46ZK26
	}
		const _returnValueXQHhp2D = await floydWarshall(_graphoYp6gjR)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuec4ymbal = []
		const _arrayValueIlyxXNS = false;
		const _returnValuey7vZL5 = [_arrayValuec4ymbal, _arrayValueIlyxXNS]
		const _getAllVerticesiOKAGQ = () => { return _returnValuey7vZL5 };
		const _returnValueXhLebgm = -0.23293737100328293;
		const _returnValuegBJCGa = () => { return _returnValueXhLebgm };
		const _findEdgeknMwidx = () => { return _returnValuegBJCGa };
		const _graphp5ewIe = {
			"getAllVertices": _getAllVerticesiOKAGQ,
		"findEdge": _findEdgeknMwidx
	}
		const _returnValueG4OVBff = await floydWarshall(_graphp5ewIe)
	});
})