export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueqP9xJA = "92yjd41tAx";
		const _getAllVerticesnWegbrA = () => { return _returnValueqP9xJA };
		const _returnValued8DeHyJ = {
		
	}
		const _findEdgePiMAdQg = () => { return _returnValued8DeHyJ };
		const _graphoV1qcHh = {
			"getAllVertices": _getAllVerticesnWegbrA,
		"findEdge": _findEdgePiMAdQg
	}
		const _startVertexGnTGfMW = -7.680698241034948;
		const _returnValueoRLlTsp = await dijkstra(_graphoV1qcHh, _startVertexGnTGfMW)
	});

	it('test for dijkstra', async () => {
		const _isDirectedUq2r6I9 = false;
		const _graph8rnioO = new Graph(_isDirectedUq2r6I9)
		const _vertexKeyFw6CcZi = 6.4666803336667975;
		const _returnValue2Wi0xz = await _graph8rnioO.getVertexByKey(_vertexKeyFw6CcZi)
		const _returnValueKug6mLm = await _graph8rnioO.getAllEdges()
		const _returnValueYlubr6 = 8.587456570729156;
		const _getKeyL8kIhtr = () => { return _returnValueYlubr6 };
		const _startVertexyO7QzCG = {
			"getKey": _getKeyL8kIhtr
	}
		const _returnValuegZ9FPFo = await dijkstra(_graph8rnioO, _startVertexyO7QzCG)
	});
})