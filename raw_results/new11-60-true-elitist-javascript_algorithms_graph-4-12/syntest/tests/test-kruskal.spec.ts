export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValueY2s4V7a = false;
		const _arrayValueMBMY8wE = []
		const _arrayValueGalZC5S = -8.165276312783131;
		const _isDirectedK77wr6U = [_arrayValueY2s4V7a, _arrayValueMBMY8wE, _arrayValueGalZC5S]
		const _arrayValueuMW8aUM = "OR1493g0qo1uzXtnv6v82zoSQgPMkzKd5TDPEPtPVjvRQIPL3Wb";
		const _arrayValueYD9eSFg = 6.439973513289278;
		const _arrayValueOMno5E = false;
		const _returnValueTMwIBBd = [_arrayValueuMW8aUM, _arrayValueYD9eSFg, _arrayValueOMno5E]
		const _getAllEdgesVJ1IsQ8 = () => { return _returnValueTMwIBBd };
		const _returnValuekK9WAK = true;
		const _getAllVerticeszuugmX5 = () => { return _returnValuekK9WAK };
		const _graphBElN90x = {
			"isDirected": _isDirectedK77wr6U,
		"getAllEdges": _getAllEdgesVJ1IsQ8,
		"getAllVertices": _getAllVerticeszuugmX5
	}
		const _returnValueRRNBICv = await kruskal(_graphBElN90x)
	});

	it('test for kruskal', async () => {
		const _isDirectedpofqLfv = null;
		const _arrayValueYXyTgiP = 0.1331241601171751;
		const _returnValueIEDsA0 = [_arrayValueYXyTgiP]
		const _getAllEdgestoCgJGL = () => { return _returnValueIEDsA0 };
		const _returnValueOiTpW8Z = 2.237044985640569;
		const _getAllVerticesYtnlIM7 = () => { return _returnValueOiTpW8Z };
		const _graphQuP6QNh = {
			"isDirected": _isDirectedpofqLfv,
		"getAllEdges": _getAllEdgestoCgJGL,
		"getAllVertices": _getAllVerticesYtnlIM7
	}
		const _returnValueWIixnF = await kruskal(_graphQuP6QNh)
	});
})