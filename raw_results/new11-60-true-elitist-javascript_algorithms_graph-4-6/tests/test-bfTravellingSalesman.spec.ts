export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueahcvTGb = "KGBqrEkjUT";
		const _getAllVerticesGyqTsnK = () => { return _returnValueahcvTGb };
		const _returnValueZQMmEer = -5.170286164855938;
		const _getAdjacencyMatrixYLNkIgN = () => { return _returnValueZQMmEer };
		const _returnValuemJjEyMx = "qeEQtMwM8LQ83Pt15wCVlVP2YvuQq2RGCfb1YfME2Tj6neuq";
		const _getVerticesIndiceswHa8jPL = () => { return _returnValuemJjEyMx };
		const _graphwnFc24 = {
			"getAllVertices": _getAllVerticesGyqTsnK,
		"getAdjacencyMatrix": _getAdjacencyMatrixYLNkIgN,
		"getVerticesIndices": _getVerticesIndiceswHa8jPL
	}
		const _returnValuebX0JDaD = await bfTravellingSalesman(_graphwnFc24)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedvf8dgk = false;
		const _graphAMkLQAm = new Graph(_isDirectedvf8dgk)
		const _arrayValueHzdQp2X = -1.5036887904918466;
		const _returnValueVvHGNWE = undefined;
		const _arrayValueAW8K8S = () => { return _returnValueVvHGNWE };
		const _arrayValuevDhzNAM = {
		
	}
		const _returnValuetZwxXoK = [_arrayValueHzdQp2X, _arrayValueAW8K8S, _arrayValuevDhzNAM]
		const _valueylz6juF = () => { return _returnValuetZwxXoK };
		const _newVertexBBSqzrA = new GraphVertex(_valueylz6juF)
		const _returnValueD34ldg = await _newVertexBBSqzrA.getDegree()
		const _vertexvX5BTOp = undefined;
		const _returnValuepT69ivj = await _newVertexBBSqzrA.findEdge(_vertexvX5BTOp)
		const _edgeolOH2ll = undefined;
		const _returnValueUGdWRd2 = await _newVertexBBSqzrA.deleteEdge(_edgeolOH2ll)
		const _returnValueWDpfjTG = await _graphAMkLQAm.addVertex(_newVertexBBSqzrA)
		const _returnValuekDvhAQ1 = await _graphAMkLQAm.reverse()
		const _returnValuepU2MgBo = await _graphAMkLQAm.getAllVertices()
		const _returnValueBdeJHJ = await bfTravellingSalesman(_graphAMkLQAm)
	});
})