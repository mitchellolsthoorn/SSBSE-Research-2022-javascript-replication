export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuemXYMHsE = "uhbO7JkNgWkQxqeokjKvErtemC0d2gCzPF2QknjQEM9elhG4nXQJp8lIgl7OxhKYV";
		const _getAllVerticesilSDYs = () => { return _returnValuemXYMHsE };
		const _returnValueXqTNUEy = 4.911655057846449;
		const _returnValueMKn1Xf4 = () => { return _returnValueXqTNUEy };
		const _findEdgeSP3PYQa = () => { return _returnValueMKn1Xf4 };
		const _graphkdSd6qh = {
			"getAllVertices": _getAllVerticesilSDYs,
		"findEdge": _findEdgeSP3PYQa
	}
		const _returnValueVOUD6CH = await floydWarshall(_graphkdSd6qh)
	});

	it('test for floydWarshall', async () => {
		const _returnValueupFgzKg = []
		const _getAllVerticesqsMeQUY = () => { return _returnValueupFgzKg };
		const _returnValueQcXYCce = -1.588878606978577;
		const _findEdgeU4Ys2Dz = () => { return _returnValueQcXYCce };
		const _graphVOxGSwF = {
			"getAllVertices": _getAllVerticesqsMeQUY,
		"findEdge": _findEdgeU4Ys2Dz
	}
		const _returnValueCDFjxjH = await floydWarshall(_graphVOxGSwF)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueGSZa5yZ = undefined;
		const _arrayValueTfqNzW1 = false;
		const _returnValue0D7Yr0 = [_arrayValueGSZa5yZ, _arrayValueTfqNzW1]
		const _getAllVerticesCn6U30u = () => { return _returnValue0D7Yr0 };
		const _returnValueJClabt = null;
		const _findEdgel1nLmGF = () => { return _returnValueJClabt };
		const _graphLcfab3 = {
			"getAllVertices": _getAllVerticesCn6U30u,
		"findEdge": _findEdgel1nLmGF
	}
		const _returnValue7tvErC = await floydWarshall(_graphLcfab3)
	});
})