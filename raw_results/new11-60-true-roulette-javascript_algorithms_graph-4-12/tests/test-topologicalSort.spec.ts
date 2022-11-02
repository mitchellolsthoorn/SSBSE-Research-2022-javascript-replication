export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueTC80uMy = null;
		const _getAllVerticesZrtXYkm = () => { return _returnValueTC80uMy };
		const _graphVMM6fwv = {
			"getAllVertices": _getAllVerticesZrtXYkm
	}
		const _returnValueXiKFvi = await topologicalSort(_graphVMM6fwv)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedCkIsVNv = false;
		const _graphNZGfPG = new Graph(_isDirectedCkIsVNv)
		const _returnValueVWujuxC = await _graphNZGfPG.getWeight()
		const _returnValueOEC3zJM = await _graphNZGfPG.getAllVertices()
		const _returnValueHj8sBMe = await topologicalSort(_graphNZGfPG)
	});
})