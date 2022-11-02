export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedyHerxdE = -6.855206893292085;
		const _returnValueCpjxKdB = "R72DIBANZq2PSC2EbjX3XxzlVvfJKAaTl8kfaubm9Vd9S5GkBz8xOjq41YW98BLGHxsafL";
		const _getAllEdgesy3Xxr5s = () => { return _returnValueCpjxKdB };
		const _returnValuegprPq9C = undefined;
		const _returnValueECQiIi5 = () => { return _returnValuegprPq9C };
		const _getAllVerticesu3reOWa = () => { return _returnValueECQiIi5 };
		const _graphJahKzL6 = {
			"isDirected": _isDirectedyHerxdE,
		"getAllEdges": _getAllEdgesy3Xxr5s,
		"getAllVertices": _getAllVerticesu3reOWa
	}
		const _returnValueuugoiI = await kruskal(_graphJahKzL6)
	});

	it('test for kruskal', async () => {
		const _isDirectedSyfbNq = false;
		const _returnValuerHZkIig = "fSllZY3ERNnoVOshygGmI1kBR2avnDPb7";
		const _getAllEdgesxvczW8v = () => { return _returnValuerHZkIig };
		const _returnValueXseEy8a = true;
		const _getAllVerticesQmtAawn = () => { return _returnValueXseEy8a };
		const _graphKDnkMAJ = {
			"isDirected": _isDirectedSyfbNq,
		"getAllEdges": _getAllEdgesxvczW8v,
		"getAllVertices": _getAllVerticesQmtAawn
	}
		const _returnValueCHzllN = await kruskal(_graphKDnkMAJ)
	});
})