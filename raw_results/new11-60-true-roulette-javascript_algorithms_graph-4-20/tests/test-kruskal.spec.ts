export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphMzz5hFZ = "KvZDXEo4eMOxLXnkCSgHuyazDdBDO7X73NxIU4Md2pCBHWHtlDV0TAa0";
		const _returnValueP3eJhQ1 = await kruskal(_graphMzz5hFZ)
	});

	it('test for kruskal', async () => {
		const _isDirectedlojjFHa = "qBG5M2pdBa7iBP2LBo6TB7ECrBmuhG";
		const _returnValuedk9zayz = undefined;
		const _getAllEdgesp0OPNw = () => { return _returnValuedk9zayz };
		const _returnValueRf46DJf = "O2btk48n3dQ65wa7MsVnPBlRHwdP6b8LYy1bdO7NRq4OcbDojlr4ab1yWd1CFhmyoAGQfLOuewgzFo1QtYBd7WpKt";
		const _getAllVerticesnxdCxwj = () => { return _returnValueRf46DJf };
		const _graphrYHSN0O = {
			"isDirected": _isDirectedlojjFHa,
		"getAllEdges": _getAllEdgesp0OPNw,
		"getAllVertices": _getAllVerticesnxdCxwj
	}
		const _returnValueoxylAr8 = await kruskal(_graphrYHSN0O)
	});

	it('test for kruskal', async () => {
		const _isDirectedoOtIxS5 = false;
		const _graphsNx68yd = new Graph(_isDirectedoOtIxS5)
		const _returnValueFzQdMcK = await _graphsNx68yd.getAllEdges()
		const _returnValuejnAbVg = await _graphsNx68yd.getWeight()
		const _returnValuexS8jbUI = await kruskal(_graphsNx68yd)
	});
})