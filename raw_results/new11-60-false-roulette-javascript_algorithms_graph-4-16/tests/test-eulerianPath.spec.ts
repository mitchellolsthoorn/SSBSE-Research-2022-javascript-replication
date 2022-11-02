export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphM364gdJ = "xsCAAnjH7DvDDxfUqO4CFwGuIB";
		const _returnValueukmZj51 = await eulerianPath(_graphM364gdJ)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedIdwMsIQ = false;
		const _graphfpJarmd = new Graph(_isDirectedIdwMsIQ)
		const _returnValuegC9G7qJ = await _graphfpJarmd.getWeight()
		const _returnValueyWQApal = await _graphfpJarmd.getAdjacencyMatrix()
		const _returnValuepuAc1iP = await eulerianPath(_graphfpJarmd)
	});
})