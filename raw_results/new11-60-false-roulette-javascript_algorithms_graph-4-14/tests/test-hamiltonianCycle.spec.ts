export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _isDirectedMbtFg1w = true;
		const _graphVKbBQAj = new Graph(_isDirectedMbtFg1w)
		const _returnValueueTimn = await _graphVKbBQAj.reverse()
		const _returnValueVihUaT = -9.035618734968587;
		const _getKeyQ5W09c = () => { return _returnValueVihUaT };
		const _startVertexmvan0EE = {
			"getKey": _getKeyQ5W09c
	}
		const _endVertexZRoZWF = -2.020949779432285;
		const _returnValuec1cCAfg = await _graphVKbBQAj.findEdge(_startVertexmvan0EE, _endVertexZRoZWF)
		const _returnValueCMbtUT = false;
		const _getKeyY2B4jdR = () => { return _returnValueCMbtUT };
		const _newVertexc2QD9kG = {
			"getKey": _getKeyY2B4jdR
	}
		const _returnValueChBGnSe = await _graphVKbBQAj.addVertex(_newVertexc2QD9kG)
		const _returnValuepRsOQS2 = await _graphVKbBQAj.reverse()
		const _returnValueHbloj54 = await hamiltonianCycle(_graphVKbBQAj)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuecKhEJRb = -5.254889284528214;
		const _getVerticesIndicesv8yjuiA = () => { return _returnValuecKhEJRb };
		const _returnValueKNTePa8 = undefined;
		const _getAdjacencyMatrixDQFYbdx = () => { return _returnValueKNTePa8 };
		const _arrayValueHlYJWCC = -9.47474176756935;
		const _arrayValueKEeBxEi = undefined;
		const _arrayValueFmKMycJ = null;
		const _returnValuePfIVhug = [_arrayValueHlYJWCC, _arrayValueKEeBxEi, _arrayValueFmKMycJ]
		const _getAllVerticesikrX3V6 = () => { return _returnValuePfIVhug };
		const _graphT9dAw0o = {
			"getVerticesIndices": _getVerticesIndicesv8yjuiA,
		"getAdjacencyMatrix": _getAdjacencyMatrixDQFYbdx,
		"getAllVertices": _getAllVerticesikrX3V6
	}
		const _returnValueSG2aYLs = await hamiltonianCycle(_graphT9dAw0o)
	});
})