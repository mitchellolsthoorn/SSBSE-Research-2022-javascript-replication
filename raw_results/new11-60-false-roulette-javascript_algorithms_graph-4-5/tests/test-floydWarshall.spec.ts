export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValuehUDySlq = "fg5j61bYKYgdTBeBiHwiHD15ayllzkwL9k4FF3AYbz5YeWScWxQDy7nrqDPaLmKA17O7KaYG0BEz7JpnN5gHxY";
		const _returnValueJ5mONvi = [_arrayValuehUDySlq]
		const _returnValueFwBox7 = () => { return _returnValueJ5mONvi };
		const _getAllVerticeslNCI7jh = () => { return _returnValueFwBox7 };
		const _arrayValuer0ICrue = undefined;
		const _arrayValue483eXK = null;
		const _returnValuekXebRAo = [_arrayValuer0ICrue, _arrayValue483eXK]
		const _findEdgewGZAqb1 = () => { return _returnValuekXebRAo };
		const _graphF8u5lIO = {
			"getAllVertices": _getAllVerticeslNCI7jh,
		"findEdge": _findEdgewGZAqb1
	}
		const _returnValuemmKI78S = await floydWarshall(_graphF8u5lIO)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueZGu6rqV = false;
		const _arrayValueDcnWJfS = [_arrayValueZGu6rqV]
		const _arrayValuekdgUZA5 = false;
		const _arrayValuergBNYs8 = -5.995635742312945;
		const _returnValuepojNYtt = [_arrayValueDcnWJfS, _arrayValuekdgUZA5, _arrayValuergBNYs8]
		const _getAllVerticeswI0TPcZ = () => { return _returnValuepojNYtt };
		const _arrayValuefrmQ2wZ = {
		
	}
		const _arrayValuePrZftyB = undefined;
		const _findEdgejBQHPWK = [_arrayValuefrmQ2wZ, _arrayValuePrZftyB]
		const _graphHhr74BZ = {
			"getAllVertices": _getAllVerticeswI0TPcZ,
		"findEdge": _findEdgejBQHPWK
	}
		const _returnValueETIBwRr = await floydWarshall(_graphHhr74BZ)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedJwZa6Pt = false;
		const _graphT0RLxfW = new Graph(_isDirectedJwZa6Pt)
		const _returnValuevZNx8u = await _graphT0RLxfW.getWeight()
		const _returnValueL9Zy0tn = await _graphT0RLxfW.getVerticesIndices()
		const _returnValueNwmwSr7 = await floydWarshall(_graphT0RLxfW)
	});

	it('test for floydWarshall', async () => {
		const _arrayValue3kqUBo = {
		
	}
		const _arrayValuenp92D1V = undefined;
		const _returnValuepNx4Zkq = [_arrayValue3kqUBo, _arrayValuenp92D1V]
		const _getAllVerticeshESj493 = () => { return _returnValuepNx4Zkq };
		const _returnValueCIwKIoW = null;
		const _findEdgeBzgleoP = () => { return _returnValueCIwKIoW };
		const _graphK7itGZ = {
			"getAllVertices": _getAllVerticeshESj493,
		"findEdge": _findEdgeBzgleoP
	}
		const _returnValuegf1v3ER = await floydWarshall(_graphK7itGZ)
	});
})