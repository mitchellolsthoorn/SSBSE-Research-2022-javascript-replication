export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuejs3GDdw = true;
		const _getAllVerticesz0fO013 = () => { return _returnValuejs3GDdw };
		const _returnValuesqfHfq = "pjBeHmxuAmHqkFKk";
		const _getAdjacencyMatrixpHoUF6z = () => { return _returnValuesqfHfq };
		const _returnValueqUincDk = "3jWtfkugdehFOFxNrEkWeGamy9QhcVIObkBrIliVRoLktx0qs1rSBKTczYOU71ipOtPGrA8LyNu";
		const _returnValuePq4mcMp = () => { return _returnValueqUincDk };
		const _getVerticesIndicesvLKIALX = () => { return _returnValuePq4mcMp };
		const _graphfgo1Nm = {
			"getAllVertices": _getAllVerticesz0fO013,
		"getAdjacencyMatrix": _getAdjacencyMatrixpHoUF6z,
		"getVerticesIndices": _getVerticesIndicesvLKIALX
	}
		const _returnValueSLo8mw7 = await bfTravellingSalesman(_graphfgo1Nm)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedQX0ug6G = true;
		const _graphZbGV0GE = new Graph(_isDirectedQX0ug6G)
		const _returnValuejJyvjrI = await _graphZbGV0GE.getVerticesIndices()
		const _valuegpBsfXm = 5.831999251843092;
		const _returnValueF9rvyoS = false;
		const _keyCallbackmx5to8z = () => { return _returnValueF9rvyoS };
		const _newVertexDrStwio = new DisjointSetItem(_valuegpBsfXm, _keyCallbackmx5to8z)
		const _returnValueNudISh = await _newVertexDrStwio.getKey()
		const _returnValuervZKD0 = await _newVertexDrStwio.isRoot()
		const _returnValue4ziJWS = await _newVertexDrStwio.getChildren()
		const _returnValue4Arny7 = await _newVertexDrStwio.getRoot()
		const _returnValueKWYEbwM = await _graphZbGV0GE.addVertex(_newVertexDrStwio)
		const _returnValuewK90to4 = await bfTravellingSalesman(_graphZbGV0GE)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedEp1ufl = true;
		const _graphrhdsi1 = new Graph(_isDirectedEp1ufl)
		const _returnValueCsdjHn0 = await _graphrhdsi1.getVerticesIndices()
		const _returnValueEs0TUu = await _graphrhdsi1.toString()
		const _valueVxwwFM = "hlyhCijboagxLto2dTwBDTUMyANJBy72";
		const _newVertexQSf7pDD = new GraphVertex(_valueVxwwFM)
		const _returnValuebQuhEjG = await _newVertexQSf7pDD.getDegree()
		const _requiredEdgey8E34tJ = true;
		const _returnValueXUFk78q = await _newVertexQSf7pDD.hasEdge(_requiredEdgey8E34tJ)
		const _arrayValuemV9Qen = "JCLlcqYXImAvEg9m0fS6HxJM";
		const _edgeTkeNpOg = [_arrayValuemV9Qen]
		const _returnValueMtjc6HS = await _newVertexQSf7pDD.deleteEdge(_edgeTkeNpOg)
		const _returnValueHpai1Ng = await _newVertexQSf7pDD.getDegree()
		const _returnValueRmWeDh = await _graphrhdsi1.addVertex(_newVertexQSf7pDD)
		const _returnValueHRB8Qpc = await bfTravellingSalesman(_graphrhdsi1)
	});
})