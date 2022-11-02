export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuesPOnuoz = -2.2913373708900275;
		const _getAllVerticesgR9M1aZ = () => { return _returnValuesPOnuoz };
		const _returnValueMmeFRIW = null;
		const _findEdgeKeHEkZs = () => { return _returnValueMmeFRIW };
		const _graphIAknyoi = {
			"getAllVertices": _getAllVerticesgR9M1aZ,
		"findEdge": _findEdgeKeHEkZs
	}
		const _getKeynoo6TeP = null;
		const _startVertexWgoJyH = {
			"getKey": _getKeynoo6TeP
	}
		const _returnValueG88hLk = await dijkstra(_graphIAknyoi, _startVertexWgoJyH)
	});

	it('test for dijkstra', async () => {
		const _isDirectedmgyJY91 = false;
		const _graphuxkoVJJ = new Graph(_isDirectedmgyJY91)
		const _valueXXM2fcS = -8.167889990578868;
		const _keyCallbackCmYndYo = false;
		const _newVertexBxIJCN9 = new DisjointSetItem(_valueXXM2fcS, _keyCallbackCmYndYo)
		const _returnValuexCHCe5I = await _newVertexBxIJCN9.getRank()
		const _returnValuedtOVpwA = await _graphuxkoVJJ.addVertex(_newVertexBxIJCN9)
		const _returnValueE19wYuu = await _graphuxkoVJJ.toString()
		const _returnValueblIVA7 = {
		
	}
		const _getKeygRNCahx = () => { return _returnValueblIVA7 };
		const _startVertexAMVoa2 = {
			"getKey": _getKeygRNCahx
	}
		const _returnValueynNzPFS = await dijkstra(_graphuxkoVJJ, _startVertexAMVoa2)
	});

	it('test for dijkstra', async () => {
		const _isDirectedt9rSxEl = false;
		const _graphuK1Hi4k = new Graph(_isDirectedt9rSxEl)
		const _returnValueqimmvQa = await _graphuK1Hi4k.getWeight()
		const _valuejP42fb = 2.113693020662966;
		const _startVertexhSCIxuV = new GraphVertex(_valuejP42fb)
		const _returnValueun3xGxQ = await _startVertexhSCIxuV.deleteAllEdges()
		const _returnValueikE6ujc = await _startVertexhSCIxuV.getDegree()
		const _returnValueBfBbJsw = await _startVertexhSCIxuV.getEdges()
		const _returnValueNz7rcTT = await dijkstra(_graphuK1Hi4k, _startVertexhSCIxuV)
	});

	it('test for dijkstra', async () => {
		const _isDirectedz7E2Q7v = false;
		const _graphuklD2mU = new Graph(_isDirectedz7E2Q7v)
		const _returnValueOiINXJ1 = await _graphuklD2mU.getAllVertices()
		const _returnValueCCdEjxK = await _graphuklD2mU.getAllEdges()
		const _returnValueGjPqmla = await _graphuklD2mU.getAllVertices()
		const _vertexKeyEtTUD7 = []
		const _returnValueByIge6J = await _graphuklD2mU.getVertexByKey(_vertexKeyEtTUD7)
		const _valueqKNRbdy = "icLyWwbfJifgxZKGTcVjCFVqBZgNXNvrJuuIaPbQbsfYOsHZDRN9kkeUH7VVIbBdP4gNgPNy84UVcxg2sSL9vMVL";
		const _startVertexCqfNe8W = new GraphVertex(_valueqKNRbdy)
		const _returnValuezgwf2JN = await _startVertexCqfNe8W.getEdges()
		const _returnValueOnNPwIP = await _startVertexCqfNe8W.deleteAllEdges()
		const _edgem99mKGF = 7.709256490412631;
		const _returnValueMZIcyD2 = await _startVertexCqfNe8W.addEdge(_edgem99mKGF)
		const _returnValuetjsBqtd = await _startVertexCqfNe8W.getDegree()
		const _returnValuecKVfiaD = await dijkstra(_graphuklD2mU, _startVertexCqfNe8W)
	});
})