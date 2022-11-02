export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphDiT4q8D = "7eSOK149xGFuIPxlvC6TOvCqVZnFFpku9EbhduLp9876qrr5ZkNtup4NTXpfUXWPNCTgzGG9G5fH6eb65qnSiEBOQ";
		const _returnValueAd2Sdlk = await hamiltonianCycle(_graphDiT4q8D)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueZmsTuFL = false;
		const _returnValueoVDKWnf = () => { return _returnValueZmsTuFL };
		const _getVerticesIndicesVwHFIsT = () => { return _returnValueoVDKWnf };
		const _returnValuelzXtSdR = -4.532260224728696;
		const _getAdjacencyMatrixqeKJAHh = () => { return _returnValuelzXtSdR };
		const _returnValueHa3EFZT = "IekF18AlbNREp7QTulYgsQehSHzLzg";
		const _returnValueGkxBxH = () => { return _returnValueHa3EFZT };
		const _getAllVerticesgLL3kPD = () => { return _returnValueGkxBxH };
		const _graphhlyCU81 = {
			"getVerticesIndices": _getVerticesIndicesVwHFIsT,
		"getAdjacencyMatrix": _getAdjacencyMatrixqeKJAHh,
		"getAllVertices": _getAllVerticesgLL3kPD
	}
		const _returnValueYlxiZDm = await hamiltonianCycle(_graphhlyCU81)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedgtvMvgx = true;
		const _graphUwdGkCS = new Graph(_isDirectedgtvMvgx)
		const _returnValueawMmDAk = await _graphUwdGkCS.getAllVertices()
		const _valueIqtNuPp = -3.389284557836941;
		const _newVertexrUzHuN4 = new GraphVertex(_valueIqtNuPp)
		const _returnValueeqiW43H = await _newVertexrUzHuN4.getKey()
		const _vertexSunxNBq = "J18zNCOdgk81AJ";
		const _returnValuebfrRLX = await _newVertexrUzHuN4.findEdge(_vertexSunxNBq)
		const _returnValuefpbgnG = await _newVertexrUzHuN4.getEdges()
		const _requiredEdgezOSwVtH = undefined;
		const _returnValueXviWSdH = await _newVertexrUzHuN4.hasEdge(_requiredEdgezOSwVtH)
		const _returnValueOdn3Ky1 = await _graphUwdGkCS.addVertex(_newVertexrUzHuN4)
		const _returnValuecRjCGCB = await _graphUwdGkCS.getAdjacencyMatrix()
		const _returnValueZlCbIQ = await hamiltonianCycle(_graphUwdGkCS)
	});
})