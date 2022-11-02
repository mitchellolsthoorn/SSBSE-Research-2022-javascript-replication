export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuetiHZa6v = "yxV1bJFxPwbjMLNSksRNT6rgb9gS8FNSQUkzCcvUZbYkONa37JiybM5y9y1yR8BBRn4JysjaejiA2fOrsi5YbGJm";
		const _getAllVerticesEbOBeoh = () => { return _returnValuetiHZa6v };
		const _returnValueoUJhkZT = null;
		const _findEdgegSP6lrD = () => { return _returnValueoUJhkZT };
		const _graphMsbfDA = {
			"getAllVertices": _getAllVerticesEbOBeoh,
		"findEdge": _findEdgegSP6lrD
	}
		const _returnValueZiQkJs0 = await floydWarshall(_graphMsbfDA)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedQPA8Wn = true;
		const _graphiml1fGG = new Graph(_isDirectedQPA8Wn)
		const _returnValueBp2Qmqm = await _graphiml1fGG.toString()
		const _vertexKeygyQzVtG = -0.44912898167706494;
		const _returnValuePIzHdkL = await _graphiml1fGG.getVertexByKey(_vertexKeygyQzVtG)
		const _returnValueJ6MPxyB = await floydWarshall(_graphiml1fGG)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueZ3fAFYh = {
		
	}
		const _returnValueOpWm1Ix = [_arrayValueZ3fAFYh]
		const _getAllVerticesd7nQeS = () => { return _returnValueOpWm1Ix };
		const _returnValueFXGIqWZ = -6.053368080271892;
		const _findEdgemV0MElq = () => { return _returnValueFXGIqWZ };
		const _graphbHdVhdz = {
			"getAllVertices": _getAllVerticesd7nQeS,
		"findEdge": _findEdgemV0MElq
	}
		const _returnValuePTDfTtG = await floydWarshall(_graphbHdVhdz)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueeLVn3TS = null;
		const _arrayValueiKRtId4 = true;
		const _returnValueiyaQKTz = [_arrayValueeLVn3TS, _arrayValueiKRtId4]
		const _getAllVerticesWkBXilv = () => { return _returnValueiyaQKTz };
		const _returnValuefEVEcB4 = null;
		const _findEdgeujVx8hJ = () => { return _returnValuefEVEcB4 };
		const _graphHAHhXMq = {
			"getAllVertices": _getAllVerticesWkBXilv,
		"findEdge": _findEdgeujVx8hJ
	}
		const _returnValueo1l7k2 = await floydWarshall(_graphHAHhXMq)
	});
})