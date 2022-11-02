export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedhz4UWhB = true;
		const _graphGqDmeT = new Graph(_isDirectedhz4UWhB)
		const _returnValuefesRAx7 = await _graphGqDmeT.reverse()
		const _returnValueWQgdn4 = await _graphGqDmeT.toString()
		const _returnValueu3XJZL = await _graphGqDmeT.getAllEdges()
		const _returnValueTiNB4mW = await _graphGqDmeT.getWeight()
		const _returnValuezzbk7Y2 = await kruskal(_graphGqDmeT)
	});

	it('test for kruskal', async () => {
		const _isDirectedFcSCMY = false;
		const _graphsRJZrPB = new Graph(_isDirectedFcSCMY)
		const _returnValueEd1o5k2 = await _graphsRJZrPB.reverse()
		const _returnValuemCgUyZr = await kruskal(_graphsRJZrPB)
	});
})