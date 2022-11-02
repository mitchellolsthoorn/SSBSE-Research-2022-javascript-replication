export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphiWNmgWC = "tJCYXrYw9YU31ey82wr9HShjcYgcaiEpPEqyHOBKweFmJakz25oNxrfyhiX";
		const _returnValueUYozqEK = await kruskal(_graphiWNmgWC)
	});

	it('test for kruskal', async () => {
		const _isDirectedHNRgWp6 = "fkoQY84D7CyvXxvusH";
		const _returnValuey1Q7sOL = true;
		const _getAllEdgesBMp1x6 = () => { return _returnValuey1Q7sOL };
		const _returnValueHiferS = null;
		const _getAllVerticesPeozaGJ = () => { return _returnValueHiferS };
		const _graphBWWKY0y = {
			"isDirected": _isDirectedHNRgWp6,
		"getAllEdges": _getAllEdgesBMp1x6,
		"getAllVertices": _getAllVerticesPeozaGJ
	}
		const _returnValuejFD01N = await kruskal(_graphBWWKY0y)
	});

	it('test for kruskal', async () => {
		const _isDirectedbxRrKRQ = false;
		const _graphNuv00Yq = new Graph(_isDirectedbxRrKRQ)
		const _returnValueKozSvn6 = await _graphNuv00Yq.getAdjacencyMatrix()
		const _returnValuetYJEvP = await kruskal(_graphNuv00Yq)
	});
})