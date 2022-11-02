export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueUhoedvW = undefined;
		const _getAllEdgesxxPeFqK = () => { return _returnValueUhoedvW };
		const _arrayValueMvRmzEg = 7.394813754342795;
		const _returnValuegHAGUN1 = [_arrayValueMvRmzEg]
		const _getAllVerticesMXmcxLt = () => { return _returnValuegHAGUN1 };
		const _returnValuegT6mUx4 = "xr8lhnXDqKC26cH4nSQLLJMp9Yw";
		const _deleteEdgeMEiTQdZ = () => { return _returnValuegT6mUx4 };
		const _graphLTWR267 = {
			"getAllEdges": _getAllEdgesxxPeFqK,
		"getAllVertices": _getAllVerticesMXmcxLt,
		"deleteEdge": _deleteEdgeMEiTQdZ
	}
		const _returnValue99JxdU = await eulerianPath(_graphLTWR267)
	});

	it('test for eulerianPath', async () => {
		const _returnValueos7udVu = []
		const _getAllEdgesdA7LoIB = () => { return _returnValueos7udVu };
		const _returnValueF56HvE = undefined;
		const _getAllVerticesDzEWvo = () => { return _returnValueF56HvE };
		const _returnValueO4bikS = "qByunH0ma";
		const _deleteEdgezCtUJNr = () => { return _returnValueO4bikS };
		const _graphl8AtOPM = {
			"getAllEdges": _getAllEdgesdA7LoIB,
		"getAllVertices": _getAllVerticesDzEWvo,
		"deleteEdge": _deleteEdgezCtUJNr
	}
		const _returnValueO4FJFP2 = await eulerianPath(_graphl8AtOPM)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedvfCxxY = false;
		const _graphqPKnHVw = new Graph(_isDirectedvfCxxY)
		const _returnValuetM5fZBh = await _graphqPKnHVw.getVerticesIndices()
		const _vertexKeypv5y2Fx = null;
		const _returnValueltsbSq = await _graphqPKnHVw.getVertexByKey(_vertexKeypv5y2Fx)
		const _returnValueICWhsf = await eulerianPath(_graphqPKnHVw)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedwybBe44 = false;
		const _graphqEknpSn = new Graph(_isDirectedwybBe44)
		const _returnValuetEJVub = await _graphqEknpSn.getAdjacencyMatrix()
		const _valueByLFL4l = 7.541690871262105;
		const _newVertexNlO5Vzd = new GraphVertex(_valueByLFL4l)
		const _requiredEdgegN2AOVy = undefined;
		const _returnValueRkhO1gP = await _newVertexNlO5Vzd.hasEdge(_requiredEdgegN2AOVy)
		const _returnValueheJoJSq = await _newVertexNlO5Vzd.getNeighbors()
		const _edgeGN4Km6Q = null;
		const _returnValuehyOfUUw = await _newVertexNlO5Vzd.addEdge(_edgeGN4Km6Q)
		const _requiredEdgeveZs8tg = -2.3430882122347096;
		const _returnValuejatfaHa = await _newVertexNlO5Vzd.hasEdge(_requiredEdgeveZs8tg)
		const _returnValueRYDKUW = await _graphqEknpSn.addVertex(_newVertexNlO5Vzd)
		const _returnValueYZBfkAT = await eulerianPath(_graphqEknpSn)
	});
})