export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueFJEofrw = null;
		const _getAllVerticesbb7plL = () => { return _returnValueFJEofrw };
		const _findEdgetSrw6Qd = "9iYI9nksMBS1BtH7qnxWPqX34wxvcFcJmXn86EUCSbfhgiqo8";
		const _graphliekqlS = {
			"getAllVertices": _getAllVerticesbb7plL,
		"findEdge": _findEdgetSrw6Qd
	}
		const _getKey8xnDKA = {
		
	}
		const _startVertexlwTsW8k = {
			"getKey": _getKey8xnDKA
	}
		const _returnValuewNJnx3U = await dijkstra(_graphliekqlS, _startVertexlwTsW8k)
	});

	it('test for dijkstra', async () => {
		const _isDirectedFaDWpXK = false;
		const _graphga4l01T = new Graph(_isDirectedFaDWpXK)
		const _returnValueV5qSwo = await _graphga4l01T.getVerticesIndices()
		const _returnValueJg07frw = "J0OWBHRxq2Cc2F1GK1reJkpuawDHHWUbBSWOxhKQMmHq94w34KaByLdrIB4QnnjJRn5ei1dNOff";
		const _getKeyHfTQJPB = () => { return _returnValueJg07frw };
		const _startVertexz8d4kev = {
			"getKey": _getKeyHfTQJPB
	}
		const _endVertex2RLQBd = undefined;
		const _returnValueqodcfIu = await _graphga4l01T.findEdge(_startVertexz8d4kev, _endVertex2RLQBd)
		const _returnValuedKTfe7a = 7.125593546692805;
		const _getKeykg912yx = () => { return _returnValuedKTfe7a };
		const _startVertexKNgyxRo = {
			"getKey": _getKeykg912yx
	}
		const _returnValueg28ptcP = await dijkstra(_graphga4l01T, _startVertexKNgyxRo)
	});

	it('test for dijkstra', async () => {
		const _isDirectedR6m2l1N = true;
		const _graphcBTlU6S = new Graph(_isDirectedR6m2l1N)
		const _vertexKeysOxWPf = null;
		const _returnValueYCu6VB = await _graphcBTlU6S.getVertexByKey(_vertexKeysOxWPf)
		const _returnValueg3fugv3 = await _graphcBTlU6S.getAllVertices()
		const _valuekQY1vN6 = {
		
	}
		const _startVertexSxlOaci = new GraphVertex(_valuekQY1vN6)
		const _returnValuejx2C4pK = await _startVertexSxlOaci.deleteAllEdges()
		const _returnValueAh5Lvcn = await _startVertexSxlOaci.getEdges()
		const _returnValueTOf9hV5 = await _startVertexSxlOaci.getKey()
		const _returnValuegzwq60 = await _startVertexSxlOaci.getNeighbors()
		const _returnValueGApLaju = await dijkstra(_graphcBTlU6S, _startVertexSxlOaci)
	});
})