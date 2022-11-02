export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuetoGdE7y = null;
		const _getAllVerticesfTB2lo = () => { return _returnValuetoGdE7y };
		const _returnValuefvOfGUP = null;
		const _findEdgeDV3mOEZ = () => { return _returnValuefvOfGUP };
		const _graphVYFCWMn = {
			"getAllVertices": _getAllVerticesfTB2lo,
		"findEdge": _findEdgeDV3mOEZ
	}
		const _returnValueEOJfU5 = null;
		const _getKeyXvUndYi = () => { return _returnValueEOJfU5 };
		const _startVertexS33XVDu = {
			"getKey": _getKeyXvUndYi
	}
		const _returnValuezBR0qtK = await dijkstra(_graphVYFCWMn, _startVertexS33XVDu)
	});

	it('test for dijkstra', async () => {
		const _returnValuemcT08hH = []
		const _getAllVerticesezNEWp = () => { return _returnValuemcT08hH };
		const _returnValuePGDJXUl = undefined;
		const _findEdgetuNRFLk = () => { return _returnValuePGDJXUl };
		const _graphVnpAesT = {
			"getAllVertices": _getAllVerticesezNEWp,
		"findEdge": _findEdgetuNRFLk
	}
		const _returnValuez4HTAa0 = undefined;
		const _getKeyWBQFOhR = () => { return _returnValuez4HTAa0 };
		const _startVertexOdOSukR = {
			"getKey": _getKeyWBQFOhR
	}
		const _returnValueFQ5WDVl = await dijkstra(_graphVnpAesT, _startVertexOdOSukR)
	});
})