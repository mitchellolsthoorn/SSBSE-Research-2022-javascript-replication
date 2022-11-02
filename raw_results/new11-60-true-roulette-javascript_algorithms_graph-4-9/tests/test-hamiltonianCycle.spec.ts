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
		const _returnValuetACBGYz = null;
		const _returnValueQN2DUdr = () => { return _returnValuetACBGYz };
		const _returnValuecui48Xq = () => { return _returnValueQN2DUdr };
		const _getVerticesIndicesD56B80 = () => { return _returnValuecui48Xq };
		const _returnValuerCBGQfq = false;
		const _getAdjacencyMatrixtouSVbl = () => { return _returnValuerCBGQfq };
		const _returnValuex8z0Kyd = 5.393931560389888;
		const _getAllVerticesW0zDIjl = () => { return _returnValuex8z0Kyd };
		const _graphiQ6lneL = {
			"getVerticesIndices": _getVerticesIndicesD56B80,
		"getAdjacencyMatrix": _getAdjacencyMatrixtouSVbl,
		"getAllVertices": _getAllVerticesW0zDIjl
	}
		const _returnValueTe4Opme = await hamiltonianCycle(_graphiQ6lneL)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedFkWhGIT = true;
		const _graphtXVUX6C = new Graph(_isDirectedFkWhGIT)
		const _returnValueD9SE0F8 = await _graphtXVUX6C.getAllEdges()
		const _valueFXZ6DHj = "WlQtNGTgtxTHEw9wpI5E1tvee9mWepKYpsDleHxdymIFeBKxlNKDbjRGcuGTTKIeosWcjv4Ndt1JyBPPjca4lRh11SE6";
		const _newVertexvYNYC1y = new GraphVertex(_valueFXZ6DHj)
		const _returnValuenHplXAE = await _newVertexvYNYC1y.getNeighbors()
		const _returnValueNWitL4G = await _newVertexvYNYC1y.deleteAllEdges()
		const _vertexSAq0XI7 = false;
		const _returnValueuQirsJb = await _newVertexvYNYC1y.findEdge(_vertexSAq0XI7)
		const _returnValueRmJH2X = await _graphtXVUX6C.addVertex(_newVertexvYNYC1y)
		const _returnValuewdyKQAu = await _graphtXVUX6C.getVerticesIndices()
		const _returnValueqPlqemj = await hamiltonianCycle(_graphtXVUX6C)
	});
})