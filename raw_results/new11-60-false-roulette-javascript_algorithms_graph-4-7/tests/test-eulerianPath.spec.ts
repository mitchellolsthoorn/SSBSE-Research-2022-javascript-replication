export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValue85eR9k = false;
		const _returnValueqGFJmvF = () => { return _returnValue85eR9k };
		const _getAllEdgesC2UEfBk = () => { return _returnValueqGFJmvF };
		const _returnValueEMEAyE2 = undefined;
		const _getAllVerticesGk2OkFa = () => { return _returnValueEMEAyE2 };
		const _returnValueoRjUzJa = false;
		const _deleteEdgeXkyk5gu = () => { return _returnValueoRjUzJa };
		const _graphxsDRX6m = {
			"getAllEdges": _getAllEdgesC2UEfBk,
		"getAllVertices": _getAllVerticesGk2OkFa,
		"deleteEdge": _deleteEdgeXkyk5gu
	}
		const _returnValuecPNeC8A = await eulerianPath(_graphxsDRX6m)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedpPbghqy = true;
		const _graphs1DacOI = new Graph(_isDirectedpPbghqy)
		const _returnValuevAO3WxW = await _graphs1DacOI.getAllEdges()
		const _returnValueLx60yDc = await _graphs1DacOI.reverse()
		const _returnValueO0d4pvP = await _graphs1DacOI.getVerticesIndices()
		const _returnValueYbrmEup = await _graphs1DacOI.getAdjacencyMatrix()
		const _returnValueXhp1G9s = await _graphs1DacOI.getAllEdges()
		const _returnValuetvN4S0T = await eulerianPath(_graphs1DacOI)
	});
})