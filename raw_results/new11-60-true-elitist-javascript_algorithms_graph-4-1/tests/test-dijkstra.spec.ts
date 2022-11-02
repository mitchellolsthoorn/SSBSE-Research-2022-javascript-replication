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
		const _returnValueFyYambo = 4.458169306078004;
		const _getAllVerticesIW0SCny = () => { return _returnValueFyYambo };
		const _returnValuemKUZncS = {
		
	}
		const _findEdge5rMXr1 = () => { return _returnValuemKUZncS };
		const _graphmn9jnzw = {
			"getAllVertices": _getAllVerticesIW0SCny,
		"findEdge": _findEdge5rMXr1
	}
		const _arrayValueEZXK2im = false;
		const _arrayValuee2lNw1s = "8nx6X2zJb8HetBc37OUHlDsvSn0foV8CROQ6JdM8zIiuhGUnEbrnHVdrCGcRT21nOhO0TnuHx3GNk22ygXn5qJmzbjDtS86BKb";
		const _arrayValueqzgB0ba = "bZx8HIzkOTqLAcPPEPUI3CsxaXaHNeGfK8GiBAEr2ew";
		const _arrayValuevrVBz5C = undefined;
		const _arrayValuedF1mQ1e = [_arrayValuee2lNw1s, _arrayValueqzgB0ba, _arrayValuevrVBz5C]
		const _returnValueO2PlUij = [_arrayValueEZXK2im, _arrayValuedF1mQ1e]
		const _arrayValue89RIOR = () => { return _returnValueO2PlUij };
		const _arrayValueNqgRoDf = true;
		const _arrayValue3Z4B73 = [_arrayValue89RIOR, _arrayValueNqgRoDf]
		const _arrayValueENrXMMb = {
		
	}
		const _arrayValuezbzZDyb = null;
		const _arrayValueWYs3FMG = [_arrayValue3Z4B73, _arrayValueENrXMMb, _arrayValuezbzZDyb]
		const _arrayValueqEeEE6J = null;
		const _returnValueq0v5NAj = [_arrayValueWYs3FMG, _arrayValueqEeEE6J]
		const _getKeykE0WJMo = () => { return _returnValueq0v5NAj };
		const _startVertexabr7LQ = {
			"getKey": _getKeykE0WJMo
	}
		const _returnValueRtgmWO = await dijkstra(_graphmn9jnzw, _startVertexabr7LQ)
	});

	it('test for dijkstra', async () => {
		const _isDirecteddlqbzu = true;
		const _graphztxdJs = new Graph(_isDirecteddlqbzu)
		const _returnValueJmscyiB = await _graphztxdJs.getAllVertices()
		const _returnValueCoyKKpc = await _graphztxdJs.getVerticesIndices()
		const _returnValueqC6qrb = await _graphztxdJs.getAllEdges()
		const _returnValueRcRh8zT = "2o6IwukME8rS0Nt6";
		const _getKeykRnvhs0 = () => { return _returnValueRcRh8zT };
		const _startVertexuK610ni = {
			"getKey": _getKeykRnvhs0
	}
		const _returnValueHYxwyEj = await dijkstra(_graphztxdJs, _startVertexuK610ni)
	});

	it('test for dijkstra', async () => {
		const _isDirectednDWnQ67 = false;
		const _graphsYyzqzr = new Graph(_isDirectednDWnQ67)
		const _vertexKeyR1Y7YgK = undefined;
		const _returnValueUKi9Pmn = await _graphsYyzqzr.getVertexByKey(_vertexKeyR1Y7YgK)
		const _returnValueBBMQniy = await _graphsYyzqzr.getAdjacencyMatrix()
		const _valuexa7oY2Q = {
		
	}
		const _startVertexoSrDIoN = new GraphVertex(_valuexa7oY2Q)
		const _vertexLflktxO = 0.8099584629970735;
		const _returnValueIpOKmb6 = await _startVertexoSrDIoN.hasNeighbor(_vertexLflktxO)
		const _returnValueiGRAui = await _startVertexoSrDIoN.getEdges()
		const _returnValueiZxnCTp = await dijkstra(_graphsYyzqzr, _startVertexoSrDIoN)
	});
})