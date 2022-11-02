export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueqEYegSZ = null;
		const _getAllEdgesZrNrv0W = () => { return _returnValueqEYegSZ };
		const _returnValuexHHixn1 = undefined;
		const _getAllVerticesCASYUpR = () => { return _returnValuexHHixn1 };
		const _returnValueeAmgey4 = {
		
	}
		const _deleteEdge9ChuhH = () => { return _returnValueeAmgey4 };
		const _graphMsnfwri = {
			"getAllEdges": _getAllEdgesZrNrv0W,
		"getAllVertices": _getAllVerticesCASYUpR,
		"deleteEdge": _deleteEdge9ChuhH
	}
		const _returnValueySmuuG0 = await eulerianPath(_graphMsnfwri)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedPu50if7 = true;
		const _graphqRusqQA = new Graph(_isDirectedPu50if7)
		const _returnValueloX3CrI = await _graphqRusqQA.getAdjacencyMatrix()
		const _vertexKeyaAwD55M = true;
		const _returnValueIP0Cpzs = await _graphqRusqQA.getVertexByKey(_vertexKeyaAwD55M)
		const _returnValueuWjZK5K = await eulerianPath(_graphqRusqQA)
	});
})