export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueUDkff1r = null;
		const _getAllVerticesq68oZYa = () => { return _returnValueUDkff1r };
		const _returnValueVnT5lxm = "g4saauatwuerjZTuH7WJiE";
		const _findEdgeRrdr10y = () => { return _returnValueVnT5lxm };
		const _graphh9wvFr9 = {
			"getAllVertices": _getAllVerticesq68oZYa,
		"findEdge": _findEdgeRrdr10y
	}
		const _returnValueXFxkTHI = await floydWarshall(_graphh9wvFr9)
	});

	it('test for floydWarshall', async () => {
		const _returnValuebOh3aE = true;
		const _getAllVerticesJFOFppO = () => { return _returnValuebOh3aE };
		const _returnValueTCWRmYU = undefined;
		const _findEdgePQri6nb = () => { return _returnValueTCWRmYU };
		const _graphlZJwrB = {
			"getAllVertices": _getAllVerticesJFOFppO,
		"findEdge": _findEdgePQri6nb
	}
		const _returnValuelZmaX53 = await floydWarshall(_graphlZJwrB)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueomAwqas = {
		
	}
		const _arrayValueZq1dsAv = null;
		const _returnValuejteGc7j = [_arrayValueomAwqas, _arrayValueZq1dsAv]
		const _getAllVerticesLV4CSii = () => { return _returnValuejteGc7j };
		const _returnValuexB7sOG = null;
		const _findEdgeJNd9DcI = () => { return _returnValuexB7sOG };
		const _graphjA2Drmx = {
			"getAllVertices": _getAllVerticesLV4CSii,
		"findEdge": _findEdgeJNd9DcI
	}
		const _returnValueIclcwr = await floydWarshall(_graphjA2Drmx)
	});
})