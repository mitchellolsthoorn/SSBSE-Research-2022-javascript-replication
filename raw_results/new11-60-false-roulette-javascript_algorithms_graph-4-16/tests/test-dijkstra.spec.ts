export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuek7Sz9eK = "vl3awNnhOUJvt8CJQS4rZoSIyZic8ei5Z4EFOiG9tbFwzvUX8CS61sW4rhGIAf8L1XHQDS68a8iNIgHkZLkBasXI3e";
		const _getAllVerticesWrmKrul = () => { return _returnValuek7Sz9eK };
		const _findEdgeic4dJV4 = false;
		const _graphN39quSp = {
			"getAllVertices": _getAllVerticesWrmKrul,
		"findEdge": _findEdgeic4dJV4
	}
		const _returnValuexvFm72q = -0.17492998517615632;
		const _arrayValueiHTQIuV = () => { return _returnValuexvFm72q };
		const _arrayValueFYUmYNe = "IIxMNsuSdhObmkKHXV1mMGnO9jtLeuKYsgVzguowX7PtU1gL24Pzst3dYwfhmVym3431MPrLMjUCGgDr9NMq";
		const _returnValueE3S2PS0 = 9.608806508491792;
		const _arrayValuehEOpeV = () => { return _returnValueE3S2PS0 };
		const _startVertexH5shQVy = [_arrayValueiHTQIuV, _arrayValueFYUmYNe, _arrayValuehEOpeV]
		const _returnValueUmt2N31 = await dijkstra(_graphN39quSp, _startVertexH5shQVy)
	});

	it('test for dijkstra', async () => {
		const _isDirectedJXlyJXr = false;
		const _graphPH8svuw = new Graph(_isDirectedJXlyJXr)
		const _returnValuezcVXoH = await _graphPH8svuw.reverse()
		const _returnValueMlKnPjG = await _graphPH8svuw.getVerticesIndices()
		const _vertexKeySGUrl73 = null;
		const _returnValuedYp4D6h = await _graphPH8svuw.getVertexByKey(_vertexKeySGUrl73)
		const _valuefU3ECF = "FRyjir7HTwdioTxbo9Ysyf4UwxxXXU";
		const _returnValueKvD8uTh = null;
		const _keyCallbackjNXjMXV = () => { return _returnValueKvD8uTh };
		const _startVertexHljWUBS = new DisjointSetItem(_valuefU3ECF, _keyCallbackjNXjMXV)
		const _returnValueiSpAfCH = await _startVertexHljWUBS.getRank()
		const _returnValue5jfBCt = await dijkstra(_graphPH8svuw, _startVertexHljWUBS)
	});
})