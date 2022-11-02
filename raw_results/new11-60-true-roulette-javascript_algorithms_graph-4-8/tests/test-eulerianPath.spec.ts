export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphUYM8rxs = false;
		const _returnValueYORGpeD = await eulerianPath(_graphUYM8rxs)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedFwU81OG = true;
		const _graphpFB42y = new Graph(_isDirectedFwU81OG)
		const _returnValueDwKftJ = await _graphpFB42y.getAllVertices()
		const _returnValuecJLZbDP = []
		const _getKeyIWhkDy = () => { return _returnValuecJLZbDP };
		const _startVertexnyfmgvA = {
			"getKey": _getKeyIWhkDy
	}
		const _endVertexweDWvb2 = undefined;
		const _returnValuemp5h86J = await _graphpFB42y.findEdge(_startVertexnyfmgvA, _endVertexweDWvb2)
		const _returnValuevAopKGa = await eulerianPath(_graphpFB42y)
	});
})