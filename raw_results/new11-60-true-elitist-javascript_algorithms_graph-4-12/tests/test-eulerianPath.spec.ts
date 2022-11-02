export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValue0HCPZo = undefined;
		const _returnValuerqInQfe = [_arrayValue0HCPZo]
		const _getAllEdgesFxxWi3O = () => { return _returnValuerqInQfe };
		const _returnValueJq4Zbp8 = true;
		const _getAllVerticesqDMtTq = () => { return _returnValueJq4Zbp8 };
		const _returnValueG30dyUQ = "nUAfSJLhgfGMDT5phzGelcRK31njJ4H";
		const _deleteEdgecJ2I9Uh = () => { return _returnValueG30dyUQ };
		const _graphvq1skk = {
			"getAllEdges": _getAllEdgesFxxWi3O,
		"getAllVertices": _getAllVerticesqDMtTq,
		"deleteEdge": _deleteEdgecJ2I9Uh
	}
		const _returnValuepvkjQs = await eulerianPath(_graphvq1skk)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedDyBZTU2 = []
		const _graphzWzHAti = new Graph(_isDirectedDyBZTU2)
		const _returnValuelBgMJf = await _graphzWzHAti.getAllEdges()
		const _returnValueVSB4OvC = await _graphzWzHAti.getWeight()
		const _returnValueyc29PsQ = await _graphzWzHAti.getAdjacencyMatrix()
		const _returnValuep6VimKu = await _graphzWzHAti.getWeight()
		const _returnValueIkt0lyv = await eulerianPath(_graphzWzHAti)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedIUsK4k = false;
		const _graphUWEr4h3 = new Graph(_isDirectedIUsK4k)
		const _valuesOpQZi = true;
		const _newVertexqDOOtXa = new GraphVertex(_valuesOpQZi)
		const _edgeag2cQE0 = 9.51445497801394;
		const _returnValueWEkA5BI = await _newVertexqDOOtXa.addEdge(_edgeag2cQE0)
		const _returnValueujodSI = await _newVertexqDOOtXa.getDegree()
		const _vertexRgYu7xW = "KMNm4vF2lce8SPP4029AKHALMFDewqFXFRCxoQGzGO3v2t1kMCf4enCQQdZbiWuxDwJ7N5";
		const _returnValuegS6VSAi = await _newVertexqDOOtXa.hasNeighbor(_vertexRgYu7xW)
		const _returnValuezN9Hzap = await _newVertexqDOOtXa.getDegree()
		const _vertexgbK9ybk = "uFEpOdKGeSX92YuBmTjpHfkNJ9dmKtqfsLnLgwNOejFHfcavguMt1wmWCqUTf5FNeC";
		const _returnValuexdGAn1i = await _newVertexqDOOtXa.findEdge(_vertexgbK9ybk)
		const _returnValueMwqnTLg = await _graphUWEr4h3.addVertex(_newVertexqDOOtXa)
		const _returnValueKT8YrR8 = await eulerianPath(_graphUWEr4h3)
	});
})