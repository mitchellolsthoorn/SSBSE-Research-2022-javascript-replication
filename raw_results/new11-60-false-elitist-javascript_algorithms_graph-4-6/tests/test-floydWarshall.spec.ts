export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _getAllVerticesrRZmTS = null;
		const _returnValueu6EzKxd = "UrFcJoJh1FRhZv8qrBb25wrmkHeea6S4TKrcYIYqgeP1PkH4atIY9HFcd6l7wIe1h";
		const _findEdgeNxGhHST = () => { return _returnValueu6EzKxd };
		const _graphuvOuGA = {
			"getAllVertices": _getAllVerticesrRZmTS,
		"findEdge": _findEdgeNxGhHST
	}
		const _returnValueIH0MGHg = await floydWarshall(_graphuvOuGA)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuevZzmzSN = -9.97010711261033;
		const _returnValueExCy7IY = [_arrayValuevZzmzSN]
		const _getAllVerticeszmujAqi = () => { return _returnValueExCy7IY };
		const _returnValuejHlDJJH = "WLwk7e45Kc7PqrCxBS28Trouh6GlKQDnTFEHS5cVz9XVDvmw2iQ7oXSDluFVLlaptvDbLPKdTTP3HIuPqFoTxRcTAjtrLc";
		const _findEdgeDz2FSH = () => { return _returnValuejHlDJJH };
		const _graphTxxnHHZ = {
			"getAllVertices": _getAllVerticeszmujAqi,
		"findEdge": _findEdgeDz2FSH
	}
		const _returnValueL9e0pk4 = await floydWarshall(_graphTxxnHHZ)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuexOYPtk = null;
		const _arrayValuea2rOWqU = false;
		const _returnValuenYoQ160 = [_arrayValuexOYPtk, _arrayValuea2rOWqU]
		const _getAllVerticesWqUsEXR = () => { return _returnValuenYoQ160 };
		const _returnValueM0xnDWd = -9.042071634935361;
		const _findEdgequqcZiU = () => { return _returnValueM0xnDWd };
		const _graphfMm2p0 = {
			"getAllVertices": _getAllVerticesWqUsEXR,
		"findEdge": _findEdgequqcZiU
	}
		const _returnValueU8bY8dI = await floydWarshall(_graphfMm2p0)
	});
})