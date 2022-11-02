export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueuVQgmtd = true;
		const _getAllVerticesXC1dbOg = () => { return _returnValueuVQgmtd };
		const _returnValuemashlE4 = false;
		const _getAdjacencyMatrixzxB26Q8 = () => { return _returnValuemashlE4 };
		const _returnValueQPs4j5 = "ONpRzeiY7GBOIDTuVA7QHViV0zVX3gOhInOTIhKT7y";
		const _getVerticesIndicesWvKdLhU = () => { return _returnValueQPs4j5 };
		const _graphYzsypnL = {
			"getAllVertices": _getAllVerticesXC1dbOg,
		"getAdjacencyMatrix": _getAdjacencyMatrixzxB26Q8,
		"getVerticesIndices": _getVerticesIndicesWvKdLhU
	}
		const _returnValueBfJa9Ts = await bfTravellingSalesman(_graphYzsypnL)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedEFp7ql = false;
		const _graphxgzYsvB = new Graph(_isDirectedEFp7ql)
		const _returnValueVA5N0aW = "3evRvX2TukP6UQJefPOFNHeBtv5oM36sYUdOkIECRT19znqiv6AKFuR7MtJWhiRfFpqgMPxj";
		const _getKeyBDDQBhV = () => { return _returnValueVA5N0aW };
		const _newVertexofXeRnv = {
			"getKey": _getKeyBDDQBhV
	}
		const _returnValueOcgNbFF = await _graphxgzYsvB.addVertex(_newVertexofXeRnv)
		const _returnValueS74Tgsz = await _graphxgzYsvB.getAllEdges()
		const _returnValueqfd1FI3 = await bfTravellingSalesman(_graphxgzYsvB)
	});
})