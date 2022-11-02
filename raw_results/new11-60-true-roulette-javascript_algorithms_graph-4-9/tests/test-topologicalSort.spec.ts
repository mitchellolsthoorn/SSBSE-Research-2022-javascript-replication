export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphPsnmkUX = "SBJXytaPWyEtJJxuWzCqgnTrA9Efzi5m7iIJldRYQl4";
		const _returnValueC5CwmDA = await topologicalSort(_graphPsnmkUX)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedsnVXmsK = true;
		const _graphfmWfRIW = new Graph(_isDirectedsnVXmsK)
		const _vertexKeyzkOaPtD = null;
		const _returnValuep7PGZ6l = await _graphfmWfRIW.getVertexByKey(_vertexKeyzkOaPtD)
		const _returnValueOQvHBWG = await _graphfmWfRIW.getAllEdges()
		const _returnValue4afGtz = await topologicalSort(_graphfmWfRIW)
	});
})