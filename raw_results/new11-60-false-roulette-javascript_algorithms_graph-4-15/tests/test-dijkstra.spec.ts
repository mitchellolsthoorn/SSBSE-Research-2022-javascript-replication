export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _getAllVerticesHUzYvG = null;
		const _returnValueFYnU3i9 = undefined;
		const _findEdgeW8fGdTD = () => { return _returnValueFYnU3i9 };
		const _graphhTmMmG6 = {
			"getAllVertices": _getAllVerticesHUzYvG,
		"findEdge": _findEdgeW8fGdTD
	}
		const _returnValueDtuvDLS = null;
		const _startVertexu6SpSuh = () => { return _returnValueDtuvDLS };
		const _returnValueOeuN2r = await dijkstra(_graphhTmMmG6, _startVertexu6SpSuh)
	});

	it('test for dijkstra', async () => {
		const _returnValueo3GeFVR = []
		const _getAllVerticeszmg2QVE = () => { return _returnValueo3GeFVR };
		const _returnValueKdeJXqz = 1.6113306571088852;
		const _findEdgeGehD01 = () => { return _returnValueKdeJXqz };
		const _graphYFJiGLd = {
			"getAllVertices": _getAllVerticeszmg2QVE,
		"findEdge": _findEdgeGehD01
	}
		const _returnValuecdK3jyn = undefined;
		const _getKeyBCQoTp = () => { return _returnValuecdK3jyn };
		const _startVertexeStIeOX = {
			"getKey": _getKeyBCQoTp
	}
		const _returnValueFHsqAFu = await dijkstra(_graphYFJiGLd, _startVertexeStIeOX)
	});
})