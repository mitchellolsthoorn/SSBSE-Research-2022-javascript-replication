export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _isDirectedSMmqrsm = true;
		const _graphR06x42A = new Graph(_isDirectedSMmqrsm)
		const _returnValueizIfUnJ = await _graphR06x42A.reverse()
		const _arrayValueLPuh5TS = "dKcpBkpaoSluMfguWZDokn0c2vjzy6C5MmY1NnN";
		const _returnValuenPt68Ap = [_arrayValueLPuh5TS]
		const _getKeyYuZ81cH = () => { return _returnValuenPt68Ap };
		const _startVertexqEZ8a7C = {
			"getKey": _getKeyYuZ81cH
	}
		const _returnValueD40ym5N = await dijkstra(_graphR06x42A, _startVertexqEZ8a7C)
	});

	it('test for dijkstra', async () => {
		const _isDirectedtmh4wwI = false;
		const _graphzkPg1oc = new Graph(_isDirectedtmh4wwI)
		const _returnValueZN3Ir74 = await _graphzkPg1oc.getAllEdges()
		const _returnValuerjNmWz5 = await _graphzkPg1oc.getWeight()
		const _valuesaNtdc = "6UObzOrA46A1tMnKEo6p4NmpVYMzagQyTvLxuAlSV";
		const _startVertexr5gB8j = new GraphVertex(_valuesaNtdc)
		const _returnValueg0g0TcS = await _startVertexr5gB8j.deleteAllEdges()
		const _returnValueHWcjV3f = await _startVertexr5gB8j.getKey()
		const _returnValueDuLrdTQ = await dijkstra(_graphzkPg1oc, _startVertexr5gB8j)
	});
})