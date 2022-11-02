export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueHpUVGb = "9hIEegjgOwUktzm0ZX9gz9OqRXxDgVJ3cBeqYfIFI2GcTsSjmZMFcsNXxw1pAxfuhIIApAQPQ6HbSFoVxEPue9";
		const _getAllVerticesohuEpoR = () => { return _returnValueHpUVGb };
		const _getAdjacencyMatrixmVUOWOl = false;
		const _arrayValuezykBvNW = -4.53605687838388;
		const _arrayValueXbcRg2A = {
		
	}
		const _returnValueussQQpd = [_arrayValuezykBvNW, _arrayValueXbcRg2A]
		const _getVerticesIndicesa5fr16B = () => { return _returnValueussQQpd };
		const _graphB2JFnxa = {
			"getAllVertices": _getAllVerticesohuEpoR,
		"getAdjacencyMatrix": _getAdjacencyMatrixmVUOWOl,
		"getVerticesIndices": _getVerticesIndicesa5fr16B
	}
		const _returnValueghbCS4D = await bfTravellingSalesman(_graphB2JFnxa)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedNkWZr2 = true;
		const _graphvyBeDBP = new Graph(_isDirectedNkWZr2)
		const _returnValueKM4QX0W = await _graphvyBeDBP.getWeight()
		const _returnValueDXkgEns = "6t3uHexFM1cVl7Mcec1bIuPvVFXS4BtiCVNhUDEXfJczEOqq7gjkFOGI";
		const _getKeygQCubLa = () => { return _returnValueDXkgEns };
		const _newVertexs8ZOUnQ = {
			"getKey": _getKeygQCubLa
	}
		const _returnValueDjMEUVZ = await _graphvyBeDBP.addVertex(_newVertexs8ZOUnQ)
		const _returnValuelw8IFS = await _graphvyBeDBP.getVerticesIndices()
		const _returnValueJ6mRGN5 = await bfTravellingSalesman(_graphvyBeDBP)
	});
})