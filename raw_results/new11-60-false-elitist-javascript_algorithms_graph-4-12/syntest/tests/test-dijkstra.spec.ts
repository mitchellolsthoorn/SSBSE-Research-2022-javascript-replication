export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuePZl49TW = null;
		const _getAllVerticesJWorgBH = () => { return _returnValuePZl49TW };
		const _returnValueG6Fsaan = -8.743839446771409;
		const _findEdgeCdrkcrw = () => { return _returnValueG6Fsaan };
		const _graphImDRZIO = {
			"getAllVertices": _getAllVerticesJWorgBH,
		"findEdge": _findEdgeCdrkcrw
	}
		const _returnValueaL6xdGU = undefined;
		const _returnValueowc0FE7 = () => { return _returnValueaL6xdGU };
		const _getKeyIINjwwv = () => { return _returnValueowc0FE7 };
		const _startVertexrD8k9KU = {
			"getKey": _getKeyIINjwwv
	}
		const _returnValueFotsl7s = await dijkstra(_graphImDRZIO, _startVertexrD8k9KU)
	});

	it('test for dijkstra', async () => {
		const _returnValuezZBJ94C = []
		const _getAllVerticeshnGC4v8 = () => { return _returnValuezZBJ94C };
		const _returnValueMdxuAw1 = -1.751787816235307;
		const _findEdgeaZB1IK8 = () => { return _returnValueMdxuAw1 };
		const _graphKaxdweY = {
			"getAllVertices": _getAllVerticeshnGC4v8,
		"findEdge": _findEdgeaZB1IK8
	}
		const _returnValueRteBVNv = null;
		const _getKeyXVFPErx = () => { return _returnValueRteBVNv };
		const _startVertexcIs5eh = {
			"getKey": _getKeyXVFPErx
	}
		const _returnValuesOKxlzV = await dijkstra(_graphKaxdweY, _startVertexcIs5eh)
	});
})