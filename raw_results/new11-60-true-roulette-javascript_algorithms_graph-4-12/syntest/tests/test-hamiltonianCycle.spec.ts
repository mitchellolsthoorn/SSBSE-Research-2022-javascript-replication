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
		const _arrayValueqKnzzA = true;
		const _returnValuevcMHKtn = true;
		const _arrayValues9x9B7 = () => { return _returnValuevcMHKtn };
		const _arrayValuePHSwJiw = null;
		const _arrayValueILbgM3i = "cp5HPRWvCWVLuor7hj3Ya8Af7Iks8ETp57ptcSuOpEWSSnJrUGeMQjQ8SUvEGpQQKHMQsa";
		const _arrayValueoRZs4W7 = [_arrayValueILbgM3i]
		const _arrayValueRP8z6F = null;
		const _arrayValuezlsow0W = [_arrayValueoRZs4W7, _arrayValueRP8z6F]
		const _returnValueBvmoZOU = "hz9Zrzh3WBHBdt5xywe";
		const _arrayValueVl1RN0e = () => { return _returnValueBvmoZOU };
		const _arrayValueylZQWgF = {
		
	}
		const _arrayValuebP2gJel = [_arrayValuezlsow0W, _arrayValueVl1RN0e, _arrayValueylZQWgF]
		const _graphH3mztRe = [_arrayValueqKnzzA, _arrayValues9x9B7, _arrayValuePHSwJiw, _arrayValuebP2gJel]
		const _returnValueJQZCc4S = await hamiltonianCycle(_graphH3mztRe)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueTC1qtbt = undefined;
		const _getVerticesIndicesogQtGU2 = () => { return _returnValueTC1qtbt };
		const _returnValued0ul9q = undefined;
		const _returnValueVoYpljt = () => { return _returnValued0ul9q };
		const _getAdjacencyMatrixkyZVO3 = () => { return _returnValueVoYpljt };
		const _returnValuePiZ2AYD = -4.329995448844599;
		const _returnValueLrRfrZ = () => { return _returnValuePiZ2AYD };
		const _getAllVerticesXe2IPTQ = () => { return _returnValueLrRfrZ };
		const _graphtBtp755 = {
			"getVerticesIndices": _getVerticesIndicesogQtGU2,
		"getAdjacencyMatrix": _getAdjacencyMatrixkyZVO3,
		"getAllVertices": _getAllVerticesXe2IPTQ
	}
		const _returnValueyLlOHf9 = await hamiltonianCycle(_graphtBtp755)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedTQNY43B = "2Ti";
		const _graphwjIrhV = new Graph(_isDirectedTQNY43B)
		const _valueuEG4HW = -2.7535063491257272;
		const _newVertexZcdKL3I = new GraphVertex(_valueuEG4HW)
		const _returnValuedP01s8s = await _newVertexZcdKL3I.getKey()
		const _returnValueSOzb5T4 = await _newVertexZcdKL3I.getEdges()
		const _returnValueryS2QlU = await _newVertexZcdKL3I.getEdges()
		const _edgeAchukN = 3.3260451247454306;
		const _returnValuekibHBL7 = await _newVertexZcdKL3I.deleteEdge(_edgeAchukN)
		const _returnValueBBOOOS5 = await _graphwjIrhV.addVertex(_newVertexZcdKL3I)
		const _vertexKeyBnsJgo2 = undefined;
		const _returnValueEh2RUr = await _graphwjIrhV.getVertexByKey(_vertexKeyBnsJgo2)
		const _returnValue0eVzRs = await _graphwjIrhV.getWeight()
		const _returnValuern64dtZ = await hamiltonianCycle(_graphwjIrhV)
	});
})