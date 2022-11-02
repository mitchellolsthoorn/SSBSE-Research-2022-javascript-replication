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
		const _returnValueDfWC3VO = "Fz";
		const _getAllVertices2ghHvO = () => { return _returnValueDfWC3VO };
		const _returnValuewRugk4w = null;
		const _findEdgec8kN0Nm = () => { return _returnValuewRugk4w };
		const _graphhVPYEtK = {
			"getAllVertices": _getAllVertices2ghHvO,
		"findEdge": _findEdgec8kN0Nm
	}
		const _startVertexeZS4V9X = []
		const _returnValuerlvSO8 = await dijkstra(_graphhVPYEtK, _startVertexeZS4V9X)
	});

	it('test for dijkstra', async () => {
		const _isDirectedTiVQGLf = false;
		const _graphm9aRG8 = new Graph(_isDirectedTiVQGLf)
		const _returnValuewwTUV6g = await _graphm9aRG8.getAdjacencyMatrix()
		const _returnValueR9gwXwM = "FolU4dwoHEhFgJo6j2g5";
		const _getKeyYCXqi4n = () => { return _returnValueR9gwXwM };
		const _startVertexNNmj8DP = {
			"getKey": _getKeyYCXqi4n
	}
		const _returnValueiwMocCr = await dijkstra(_graphm9aRG8, _startVertexNNmj8DP)
	});

	it('test for dijkstra', async () => {
		const _isDirectedAGtoCSe = null;
		const _graphqahnJrz = new Graph(_isDirectedAGtoCSe)
		const _returnValuexRGLDgq = await _graphqahnJrz.getAllVertices()
		const _returnValueAAARk4K = await _graphqahnJrz.getAllEdges()
		const _valueWVMiX0z = false;
		const _startVertexqLz2GlC = new GraphVertex(_valueWVMiX0z)
		const _returnValuezYfa3iI = true;
		const _returnValueGDBPjVB = () => { return _returnValuezYfa3iI };
		const _callbackF2JJjHW = () => { return _returnValueGDBPjVB };
		const _returnValueBquyZhu = await _startVertexqLz2GlC.toString(_callbackF2JJjHW)
		const _returnValueEjrdIUM = await dijkstra(_graphqahnJrz, _startVertexqLz2GlC)
	});

	it('test for dijkstra', async () => {
		const _isDirectedFuduFUn = false;
		const _graphDd7SJ2Q = new Graph(_isDirectedFuduFUn)
		const _returnValuebc8dEw7 = await _graphDd7SJ2Q.reverse()
		const _returnValuedgVRpQK = await _graphDd7SJ2Q.getAllEdges()
		const _returnValuekTCoLU = await _graphDd7SJ2Q.getAllEdges()
		const _returnValuewcw37mp = await _graphDd7SJ2Q.getVerticesIndices()
		const _arrayValuel1YxDUB = true;
		const _valueNY0Kybv = [_arrayValuel1YxDUB]
		const _startVertexetpvuN8 = new GraphVertex(_valueNY0Kybv)
		const _requiredEdgeAwjzQK = null;
		const _returnValueuRhKuwm = await _startVertexetpvuN8.hasEdge(_requiredEdgeAwjzQK)
		const _vertexdvXL4Qf = undefined;
		const _returnValueWCW01s1 = await _startVertexetpvuN8.hasNeighbor(_vertexdvXL4Qf)
		const _requiredEdgeLXxLB5 = null;
		const _returnValuefb2TzEa = await _startVertexetpvuN8.hasEdge(_requiredEdgeLXxLB5)
		const _returnValueWnVEvu = null;
		const _edgeiVwDVwS = () => { return _returnValueWnVEvu };
		const _returnValueSVp396m = await _startVertexetpvuN8.addEdge(_edgeiVwDVwS)
		const _returnValueK5SPVGk = await dijkstra(_graphDd7SJ2Q, _startVertexetpvuN8)
	});
})