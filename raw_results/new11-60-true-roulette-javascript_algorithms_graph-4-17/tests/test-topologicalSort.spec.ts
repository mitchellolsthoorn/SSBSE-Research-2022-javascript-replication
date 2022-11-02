export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphICA53Zs = "XJcbxGrFiwoWd3RoSSt4bl8mjfcy2dMGSP89CT0tfG7";
		const _returnValueAY93flG = await topologicalSort(_graphICA53Zs)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedCWPbPlD = false;
		const _graphP1C7lcf = new Graph(_isDirectedCWPbPlD)
		const _returnValuetyo6xVh = await _graphP1C7lcf.getVerticesIndices()
		const _returnValuec5OCFH = await _graphP1C7lcf.reverse()
		const _returnValuetXJUvrw = await _graphP1C7lcf.getAllVertices()
		const _returnValueOEywlPo = await _graphP1C7lcf.getAdjacencyMatrix()
		const _returnValueylmFMgv = await topologicalSort(_graphP1C7lcf)
	});
})