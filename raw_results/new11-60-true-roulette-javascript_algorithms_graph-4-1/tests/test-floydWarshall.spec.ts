export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueFPBcR7m = 9.493181769957264;
		const _getAllVerticesRFAD5fO = () => { return _returnValueFPBcR7m };
		const _returnValuepLSZXDH = true;
		const _findEdgeApiLt7o = () => { return _returnValuepLSZXDH };
		const _graphoCUpH8l = {
			"getAllVertices": _getAllVerticesRFAD5fO,
		"findEdge": _findEdgeApiLt7o
	}
		const _returnValuefPHi5tQ = await floydWarshall(_graphoCUpH8l)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedDjWjy0u = true;
		const _graphfqn74Ur = new Graph(_isDirectedDjWjy0u)
		const _returnValuepVzoFWB = await _graphfqn74Ur.getVerticesIndices()
		const _returnValuexYCxEw = await _graphfqn74Ur.getAllVertices()
		const _returnValueNeoDUAT = await _graphfqn74Ur.getAdjacencyMatrix()
		const _returnValueuHO0cg8 = await floydWarshall(_graphfqn74Ur)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueua7n9fY = true;
		const _arrayValuePWp7cFp = "wsqsO3MBxGAw4uXyF9PBNZ43eKXuQM3JKPbghtpz5BfIuiJ11afvEJMz";
		const _returnValueIiaNiQO = [_arrayValueua7n9fY, _arrayValuePWp7cFp]
		const _getAllVerticesA40PLOr = () => { return _returnValueIiaNiQO };
		const _returnValuepA1sE8w = false;
		const _findEdgeEuNltv0 = () => { return _returnValuepA1sE8w };
		const _graphMZWg5Mc = {
			"getAllVertices": _getAllVerticesA40PLOr,
		"findEdge": _findEdgeEuNltv0
	}
		const _returnValuegnO2I5t = await floydWarshall(_graphMZWg5Mc)
	});
})