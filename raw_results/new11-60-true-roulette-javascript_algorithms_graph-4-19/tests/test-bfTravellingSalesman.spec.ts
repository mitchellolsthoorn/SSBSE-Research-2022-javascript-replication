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
		const _returnValuebFZClYi = undefined;
		const _getAllVerticesjA86uKm = () => { return _returnValuebFZClYi };
		const _returnValuennRjt8R = undefined;
		const _getAdjacencyMatrixaT4gode = () => { return _returnValuennRjt8R };
		const _returnValueeo8MO1O = "1xaBOH8jqpdKfx9vSeH2CLjnIve9SyNxDjXsmaLnOn0DCTEnLlHDhQL7hhZq4";
		const _getVerticesIndicesrYRcYsZ = () => { return _returnValueeo8MO1O };
		const _graphHWfDKYv = {
			"getAllVertices": _getAllVerticesjA86uKm,
		"getAdjacencyMatrix": _getAdjacencyMatrixaT4gode,
		"getVerticesIndices": _getVerticesIndicesrYRcYsZ
	}
		const _returnValuemnJiwJN = await bfTravellingSalesman(_graphHWfDKYv)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValuewDInmv = {
		
	}
		const _returnValueulCSlOD = [_arrayValuewDInmv]
		const _getAllVerticesOb2htT = () => { return _returnValueulCSlOD };
		const _arrayValueboyghsc = "85vswDpGvW4FsXg5vC2YgUhn67Tau7xk5QfYXFTNLBxr";
		const _arrayValuem2pg70T = -6.820083722673681;
		const _arrayValueiYoNYHl = false;
		const _returnValueay8fZ3 = [_arrayValueboyghsc, _arrayValuem2pg70T, _arrayValueiYoNYHl]
		const _getAdjacencyMatrixpcykYbo = () => { return _returnValueay8fZ3 };
		const _returnValueCJu0bk4 = undefined;
		const _getVerticesIndicesFw8rq8L = () => { return _returnValueCJu0bk4 };
		const _graphuMurUZt = {
			"getAllVertices": _getAllVerticesOb2htT,
		"getAdjacencyMatrix": _getAdjacencyMatrixpcykYbo,
		"getVerticesIndices": _getVerticesIndicesFw8rq8L
	}
		const _returnValuegWvd3A4 = await bfTravellingSalesman(_graphuMurUZt)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedeQAtMdE = false;
		const _graphnz71f8T = new Graph(_isDirectedeQAtMdE)
		const _returnValueRQII9OH = await _graphnz71f8T.getWeight()
		const _vertexKeyHjay5vW = 6.904858537476663;
		const _returnValueKFGvacI = await _graphnz71f8T.getVertexByKey(_vertexKeyHjay5vW)
		const _returnValueBUmz8TP = true;
		const _getKeyOjCPfL = () => { return _returnValueBUmz8TP };
		const _newVertexif51U7O = {
			"getKey": _getKeyOjCPfL
	}
		const _returnValuetByGwt = await _graphnz71f8T.addVertex(_newVertexif51U7O)
		const _returnValueZMyC5cm = await _graphnz71f8T.getWeight()
		const _returnValuejTCOykZ = await bfTravellingSalesman(_graphnz71f8T)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedpJHHVV = false;
		const _graphVvZNznb = new Graph(_isDirectedpJHHVV)
		const _valuecm6Ydgl = "cg";
		const _newVertexXcqN3Yz = new GraphVertex(_valuecm6Ydgl)
		const _returnValueydpVOp3 = await _newVertexXcqN3Yz.getEdges()
		const _returnValueOIFAVGj = null;
		const _vertexXSLrb4n = () => { return _returnValueOIFAVGj };
		const _returnValueH4Ag5dF = await _newVertexXcqN3Yz.findEdge(_vertexXSLrb4n)
		const _returnValuewaVcae4 = await _graphVvZNznb.addVertex(_newVertexXcqN3Yz)
		const _returnValuePmAKhJ = await _graphVvZNznb.getVerticesIndices()
		const _returnValueUlEFBLa = await bfTravellingSalesman(_graphVvZNznb)
	});
})