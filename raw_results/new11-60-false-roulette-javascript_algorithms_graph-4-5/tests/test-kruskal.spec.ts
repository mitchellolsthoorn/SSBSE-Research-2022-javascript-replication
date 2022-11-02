export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphMCSyFVe = "7s8lTjIVZKNKOqB6tWokFvte6rJDJyGGn4SVJf7DjJQk3Hu4Fg6SdRO35TFRUT2uakM9";
		const _returnValuecOX2q6m = await kruskal(_graphMCSyFVe)
	});

	it('test for kruskal', async () => {
		const _isDirected6AAWYb = null;
		const _returnValueVsD9oj = "q9wI3uDirjzLDDmxecs7dPP8x9Tq4AHW8HweBrBKzhskXiYTPjeYpH";
		const _getAllEdgesnZIYQz = () => { return _returnValueVsD9oj };
		const _returnValueho5gJZS = null;
		const _returnValueqL4EGo = () => { return _returnValueho5gJZS };
		const _getAllVerticesmbJRZSm = () => { return _returnValueqL4EGo };
		const _graphsuldN0 = {
			"isDirected": _isDirected6AAWYb,
		"getAllEdges": _getAllEdgesnZIYQz,
		"getAllVertices": _getAllVerticesmbJRZSm
	}
		const _returnValueJDOPRo1 = await kruskal(_graphsuldN0)
	});

	it('test for kruskal', async () => {
		const _arrayValuenBvF77l = 0.8671795505984559;
		const _arrayValueo1AVqqv = -8.184404557048804;
		const _isDirectedwCfvrEK = [_arrayValuenBvF77l, _arrayValueo1AVqqv]
		const _returnValuebnzpc8C = undefined;
		const _getAllEdgesD1YiIoI = () => { return _returnValuebnzpc8C };
		const _getAllVerticesFwpdxHy = []
		const _graphpGgMfWu = {
			"isDirected": _isDirectedwCfvrEK,
		"getAllEdges": _getAllEdgesD1YiIoI,
		"getAllVertices": _getAllVerticesFwpdxHy
	}
		const _returnValuep60DEOu = await kruskal(_graphpGgMfWu)
	});
})