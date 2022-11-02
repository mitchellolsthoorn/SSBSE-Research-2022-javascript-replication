export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuehznjcuU = "cePRi6fEGSQ1jRIXw1RC9hRGt8zZWiPeCdIWNTl2TKwb3iE56R75GLRXuEO5AoUAqMln4";
		const _getAllEdgesPczzHbK = () => { return _returnValuehznjcuU };
		const _returnValueCKTKZu = false;
		const _getAllVerticesIHXgbMD = () => { return _returnValueCKTKZu };
		const _returnValueKPLwYUE = 7.65357001598683;
		const _deleteEdgensiabzQ = () => { return _returnValueKPLwYUE };
		const _grapha5xNSd2 = {
			"getAllEdges": _getAllEdgesPczzHbK,
		"getAllVertices": _getAllVerticesIHXgbMD,
		"deleteEdge": _deleteEdgensiabzQ
	}
		const _returnValueZIjFnrj = await eulerianPath(_grapha5xNSd2)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedS7qRob6 = false;
		const _graphoTvyiuZ = new Graph(_isDirectedS7qRob6)
		const _returnValuema8eiUz = await _graphoTvyiuZ.reverse()
		const _returnValuegwJrVwW = await _graphoTvyiuZ.getAllEdges()
		const _returnValuenhfV0Pl = await eulerianPath(_graphoTvyiuZ)
	});
})