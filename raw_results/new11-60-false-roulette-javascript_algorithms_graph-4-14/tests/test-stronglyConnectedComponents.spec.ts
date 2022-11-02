export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueXKzdhF = "F2yL6HURka0An41fp5Yx78ZvmUbJvCu3U";
		const _reverseOFB1xJv = () => { return _returnValueXKzdhF };
		const _graphaPhNrU = {
			"reverse": _reverseOFB1xJv
	}
		const _returnValuel8ariJr = await stronglyConnectedComponents(_graphaPhNrU)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedKy8o5fC = true;
		const _graphQ1Vmrpo = new Graph(_isDirectedKy8o5fC)
		const _returnValueSv5iyL = await _graphQ1Vmrpo.toString()
		const _arrayValuepl3rf4v = null;
		const _arrayValueEiCorEW = undefined;
		const _returnValuemGXDyjA = [_arrayValuepl3rf4v, _arrayValueEiCorEW]
		const _getNeighborstAfzkRl = () => { return _returnValuemGXDyjA };
		const _vertexE9HppnO = {
			"getNeighbors": _getNeighborstAfzkRl
	}
		const _returnValueLy6XUg = await _graphQ1Vmrpo.getNeighbors(_vertexE9HppnO)
		const _returnValuedI9rfpa = await stronglyConnectedComponents(_graphQ1Vmrpo)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedsZWxqQJ = false;
		const _graphN9jamS8 = new Graph(_isDirectedsZWxqQJ)
		const _returnValuerPKcM4I = await _graphN9jamS8.reverse()
		const _valuetk44bm7 = "v2oGWrLA279DWHupIQQCfvl9iYfTzYzV9PeG7DASIWEAUdXtagvtQMaoqjbOlJHsrNbXNKjQ";
		const _newVertexnGHDfJm = new GraphVertex(_valuetk44bm7)
		const _returnValuewAH0AGa = -3.130503133834793;
		const _vertexlJe1rJZ = () => { return _returnValuewAH0AGa };
		const _returnValueKAu63Em = await _newVertexnGHDfJm.hasNeighbor(_vertexlJe1rJZ)
		const _returnValuerEzTBVd = await _newVertexnGHDfJm.getDegree()
		const _returnValueHAEUyXK = await _newVertexnGHDfJm.deleteAllEdges()
		const _returnValueStdKi88 = await _graphN9jamS8.addVertex(_newVertexnGHDfJm)
		const _returnValueIcCpwp8 = await _graphN9jamS8.getAdjacencyMatrix()
		const _returnValueiTgDR6 = await _graphN9jamS8.getAllVertices()
		const _returnValueO0dIZRd = await stronglyConnectedComponents(_graphN9jamS8)
	});
})