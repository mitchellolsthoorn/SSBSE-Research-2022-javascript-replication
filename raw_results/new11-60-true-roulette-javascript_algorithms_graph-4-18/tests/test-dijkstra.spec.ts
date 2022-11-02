export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValuegDGEM6A = "xVdGoMnfbE8PkVQBj85Am5WTrzk66DIAQrNsuR3GrFDGrai5mV";
		const _arrayValuevjJ7UN = null;
		const _arrayValuej8IW9or = false;
		const _graphDHVtTQ0 = [_arrayValuegDGEM6A, _arrayValuevjJ7UN, _arrayValuej8IW9or]
		const _startVertexg6SS6w = null;
		const _returnValueE2doeRC = await dijkstra(_graphDHVtTQ0, _startVertexg6SS6w)
	});

	it('test for dijkstra', async () => {
		const _isDirectedVlZ7Tv = true;
		const _graphskYYJOu = new Graph(_isDirectedVlZ7Tv)
		const _returnValueMuoqSfS = await _graphskYYJOu.getVerticesIndices()
		const _vertexKeys6Nv934 = "um5JK4zU9jtmi29wicLHGVNQ1b1MPnpdwefHVqF5ehNX2cK7WY";
		const _returnValueUkgeX1q = await _graphskYYJOu.getVertexByKey(_vertexKeys6Nv934)
		const _returnValuex4Hyrck = await _graphskYYJOu.getAllVertices()
		const _returnValuerdfkf6T = await _graphskYYJOu.getAllEdges()
		const _returnValuefEOXQcS = await _graphskYYJOu.getWeight()
		const _arrayValue7VpjxZ = "BR1CLumMYSfTTnYQub1AeMFntcweTMHdjT";
		const _arrayValueqPsDWjE = -9.74669705897869;
		const _valuedYGcjqU = [_arrayValue7VpjxZ, _arrayValueqPsDWjE]
		const _returnValuee4O5YnM = null;
		const _keyCallbacklnTXJ3Y = () => { return _returnValuee4O5YnM };
		const _startVertexVK52cin = new DisjointSetItem(_valuedYGcjqU, _keyCallbacklnTXJ3Y)
		const _returnValueAY8r8jY = await _startVertexVK52cin.isRoot()
		const _returnValuezOmiLfE = await _startVertexVK52cin.getRank()
		const _returnValueh9uSFao = await dijkstra(_graphskYYJOu, _startVertexVK52cin)
	});

	it('test for dijkstra', async () => {
		const _isDirectedKcSb4Jt = false;
		const _graphrSNjokU = new Graph(_isDirectedKcSb4Jt)
		const _returnValueqWftw45 = await _graphrSNjokU.getWeight()
		const _returnValuec89Xk45 = null;
		const _getNeighborsdqSo4tW = () => { return _returnValuec89Xk45 };
		const _vertexabzfzaX = {
			"getNeighbors": _getNeighborsdqSo4tW
	}
		const _returnValuebamR6Xh = await _graphrSNjokU.getNeighbors(_vertexabzfzaX)
		const _arrayValueRHJx39D = null;
		const _arrayValueX59ImHm = undefined;
		const _arrayValuejDmJMI = -2.941322782818453;
		const _valueYdzetAe = [_arrayValueRHJx39D, _arrayValueX59ImHm, _arrayValuejDmJMI]
		const _startVertexC2nlxXD = new GraphVertex(_valueYdzetAe)
		const _vertexZDs0GBQ = undefined;
		const _returnValuefajjFmk = await _startVertexC2nlxXD.hasNeighbor(_vertexZDs0GBQ)
		const _vertexkepHUq2 = undefined;
		const _returnValuevOsiIbF = await _startVertexC2nlxXD.hasNeighbor(_vertexkepHUq2)
		const _vertexBw61SBD = true;
		const _returnValuenupwgX = await _startVertexC2nlxXD.hasNeighbor(_vertexBw61SBD)
		const _returnValueh6mPwh = await _startVertexC2nlxXD.getNeighbors()
		const _returnValuefL1ssI = await dijkstra(_graphrSNjokU, _startVertexC2nlxXD)
	});
})