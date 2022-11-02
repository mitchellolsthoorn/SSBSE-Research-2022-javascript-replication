export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueF2OH4zZ = undefined;
		const _getAllVerticesNegMOlW = () => { return _returnValueF2OH4zZ };
		const _returnValuepUadecU = "F8kBkOr9o6fMlsmA2laxtporAQx2LL";
		const _findEdgesztXEH = () => { return _returnValuepUadecU };
		const _graphYXwvInx = {
			"getAllVertices": _getAllVerticesNegMOlW,
		"findEdge": _findEdgesztXEH
	}
		const _arrayValuelDMjA7t = false;
		const _arrayValueC12da67 = "PRFazgmhzE83UJ";
		const _returnValuepwrJzM = {
		
	}
		const _arrayValueSZaZzcz = () => { return _returnValuepwrJzM };
		const _startVertex4KJYG4 = [_arrayValuelDMjA7t, _arrayValueC12da67, _arrayValueSZaZzcz]
		const _returnValueVaULnC = await dijkstra(_graphYXwvInx, _startVertex4KJYG4)
	});

	it('test for dijkstra', async () => {
		const _isDirectedIWtUITf = false;
		const _graphBRvuae = new Graph(_isDirectedIWtUITf)
		const _returnValueaXa7gIq = await _graphBRvuae.getVerticesIndices()
		const _returnValueb6ZsVW3 = await _graphBRvuae.getAllVertices()
		const _returnValueIbfGAyt = null;
		const _getKeyRLpGQ5A = () => { return _returnValueIbfGAyt };
		const _startVertexP2grqpW = {
			"getKey": _getKeyRLpGQ5A
	}
		const _returnValuecaTWvia = await dijkstra(_graphBRvuae, _startVertexP2grqpW)
	});
})