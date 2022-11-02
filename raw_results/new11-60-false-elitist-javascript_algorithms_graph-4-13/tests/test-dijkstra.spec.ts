export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValuefsszGE = false;
		const _returnValueAAV40V5 = [_arrayValuefsszGE]
		const _getAllVerticeszqWZpyh = () => { return _returnValueAAV40V5 };
		const _returnValue5baem4 = {
		
	}
		const _findEdgeeVoATf1 = () => { return _returnValue5baem4 };
		const _grapht6ImzHJ = {
			"getAllVertices": _getAllVerticeszqWZpyh,
		"findEdge": _findEdgeeVoATf1
	}
		const _returnValueE8bWfqH = "y8zwyqlcVzfCGhVtDFnKnPEkUpNX1DMblGYMMfyxk2R6Bso6z9dvjJmWkhqjZ6Sr";
		const _getKeyAgVaynR = () => { return _returnValueE8bWfqH };
		const _startVertexxb5X7he = {
			"getKey": _getKeyAgVaynR
	}
		const _returnValuePN6E5Ky = await dijkstra(_grapht6ImzHJ, _startVertexxb5X7he)
	});

	it('test for dijkstra', async () => {
		const _returnValuehWMQFj8 = []
		const _getAllVerticesWJDs4ra = () => { return _returnValuehWMQFj8 };
		const _returnValuehWI3ftk = -5.288274662565407;
		const _findEdgedbQPazS = () => { return _returnValuehWI3ftk };
		const _graphbwtc2k = {
			"getAllVertices": _getAllVerticesWJDs4ra,
		"findEdge": _findEdgedbQPazS
	}
		const _returnValueyt76nxV = 2.0612547158014465;
		const _getKeyst9Mo7x = () => { return _returnValueyt76nxV };
		const _startVertex244cuz = {
			"getKey": _getKeyst9Mo7x
	}
		const _returnValueI4kcZn8 = await dijkstra(_graphbwtc2k, _startVertex244cuz)
	});
})