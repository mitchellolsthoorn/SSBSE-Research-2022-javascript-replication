export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedMD6HAWY = true;
		const _graph7GxXSN = new Graph(_isDirectedMD6HAWY)
		const _returnValuexpVZN1N = await _graph7GxXSN.getVerticesIndices()
		const _returnValueEPBqtb0 = await kruskal(_graph7GxXSN)
	});

	it('test for kruskal', async () => {
		const _isDirectedL5jW8Yy = null;
		const _returnValueQfqaNvc = "Qk6OTHGcuaIgBGQSt8WC7M34mhq4MOmTlo3gJiIBk";
		const _getAllEdgesovo52IE = () => { return _returnValueQfqaNvc };
		const _returnValueoYtu9gF = 7.773611515091865;
		const _getAllVerticesPwsF0ur = () => { return _returnValueoYtu9gF };
		const _graphu99NziG = {
			"isDirected": _isDirectedL5jW8Yy,
		"getAllEdges": _getAllEdgesovo52IE,
		"getAllVertices": _getAllVerticesPwsF0ur
	}
		const _returnValuec56U6wV = await kruskal(_graphu99NziG)
	});
})