export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueRYyOmzD = null;
		const _returnValuea6yYFCf = () => { return _returnValueRYyOmzD };
		const _graphfEpCg8v = () => { return _returnValuea6yYFCf };
		const _returnValueWtRI3Dd = await topologicalSort(_graphfEpCg8v)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedX2YRLBv = false;
		const _graphf9DhBdx = new Graph(_isDirectedX2YRLBv)
		const _returnValuewjBl6ec = await _graphf9DhBdx.getAdjacencyMatrix()
		const _returnValuevoT8MFu = "Z18Jmt73GQlWUeXsKOvQyPn2wjVJ9PG0M8DOY1aewKBgwr5rPAdHouWUK2Arl1Mb";
		const _vertexKeyJoW48iv = () => { return _returnValuevoT8MFu };
		const _returnValueSTNPYEX = await _graphf9DhBdx.getVertexByKey(_vertexKeyJoW48iv)
		const _returnValuenGIL6uR = await topologicalSort(_graphf9DhBdx)
	});
})