export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueznaBPcQ = undefined;
		const _graphI46PyX = () => { return _returnValueznaBPcQ };
		const _returnValuevpFjhHL = await bfTravellingSalesman(_graphI46PyX)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuevjYo4ti = false;
		const _getAllVerticesRmIyLWy = () => { return _returnValuevjYo4ti };
		const _returnValueQuxr1GD = {
		
	}
		const _getAdjacencyMatrixSBBNJVS = () => { return _returnValueQuxr1GD };
		const _returnValuemGG33tu = "0BHP0rCWmhgu3idHDjE8xJomvdcp735eHY8CDFuJfJK5Hr3VjWT8G2";
		const _getVerticesIndiceshZgnpj = () => { return _returnValuemGG33tu };
		const _graphbtOZnRg = {
			"getAllVertices": _getAllVerticesRmIyLWy,
		"getAdjacencyMatrix": _getAdjacencyMatrixSBBNJVS,
		"getVerticesIndices": _getVerticesIndiceshZgnpj
	}
		const _returnValuefI64YaG = await bfTravellingSalesman(_graphbtOZnRg)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedo9HaLqZ = false;
		const _graphlipaLhJ = new Graph(_isDirectedo9HaLqZ)
		const _returnValueOmRIl6 = await _graphlipaLhJ.getAdjacencyMatrix()
		const _vertexKeyvYAJ1gv = null;
		const _returnValueIRzQQCc = await _graphlipaLhJ.getVertexByKey(_vertexKeyvYAJ1gv)
		const _returnValueqwPDYfK = await _graphlipaLhJ.getWeight()
		const _returnValueHGE4B21 = true;
		const _valuevpAzCrc = () => { return _returnValueHGE4B21 };
		const _returnValueXaOzEZU = null;
		const _returnValuemf06ccz = () => { return _returnValueXaOzEZU };
		const _keyCallbackuwHUggt = () => { return _returnValuemf06ccz };
		const _newVertexM7ZLZnR = new DisjointSetItem(_valuevpAzCrc, _keyCallbackuwHUggt)
		const _returnValueHm7z9c8 = await _newVertexM7ZLZnR.isRoot()
		const _returnValuehafUtb = await _newVertexM7ZLZnR.getRoot()
		const _returnValueso6oGua = await _graphlipaLhJ.addVertex(_newVertexM7ZLZnR)
		const _returnValueq56cCuY = await bfTravellingSalesman(_graphlipaLhJ)
	});
})