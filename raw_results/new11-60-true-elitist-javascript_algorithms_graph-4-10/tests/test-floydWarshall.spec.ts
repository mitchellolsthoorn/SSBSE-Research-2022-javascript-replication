export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuevNp8v2 = 0.4238467692077936;
		const _getAllVerticesKjOrl7n = () => { return _returnValuevNp8v2 };
		const _returnValueq9jOqI3 = undefined;
		const _findEdgebsXpf1J = () => { return _returnValueq9jOqI3 };
		const _graphTa13jJ3 = {
			"getAllVertices": _getAllVerticesKjOrl7n,
		"findEdge": _findEdgebsXpf1J
	}
		const _returnValueUWdJHds = await floydWarshall(_graphTa13jJ3)
	});

	it('test for floydWarshall', async () => {
		const _returnValueEkTOh5b = []
		const _getAllVerticesWieDZ0 = () => { return _returnValueEkTOh5b };
		const _returnValueiyvIqE = []
		const _findEdgeg26aVZw = () => { return _returnValueiyvIqE };
		const _graphdxVwz8 = {
			"getAllVertices": _getAllVerticesWieDZ0,
		"findEdge": _findEdgeg26aVZw
	}
		const _returnValueyBMoGJo = await floydWarshall(_graphdxVwz8)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuewmxQ0X4 = -0.4604627708486255;
		const _arrayValueqCAU0yp = 6.882514504012523;
		const _returnValueQi4jSOF = [_arrayValuewmxQ0X4, _arrayValueqCAU0yp]
		const _getAllVerticesAKriE2M = () => { return _returnValueQi4jSOF };
		const _returnValueyoGiIKt = -3.9441147383208266;
		const _findEdgeHCAFW9F = () => { return _returnValueyoGiIKt };
		const _graphbGe9d4A = {
			"getAllVertices": _getAllVerticesAKriE2M,
		"findEdge": _findEdgeHCAFW9F
	}
		const _returnValue9vXMkn = await floydWarshall(_graphbGe9d4A)
	});
})