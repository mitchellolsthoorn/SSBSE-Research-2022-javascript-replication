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
		const _graphA4JhFCs = "sdyy5Vch7g7sg8hqv4HjW7su9jr6ov8V7bGIGB7N";
		const _returnValueR77LCL4 = await hamiltonianCycle(_graphA4JhFCs)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueyeSd6Au = undefined;
		const _getVerticesIndicesycfGmB = () => { return _returnValueyeSd6Au };
		const _returnValueEEGnR4V = false;
		const _getAdjacencyMatrixKSombuY = () => { return _returnValueEEGnR4V };
		const _returnValueywphUZH = 0.09145116076504145;
		const _getAllVerticesIlsSN9v = () => { return _returnValueywphUZH };
		const _graphsPZDkbB = {
			"getVerticesIndices": _getVerticesIndicesycfGmB,
		"getAdjacencyMatrix": _getAdjacencyMatrixKSombuY,
		"getAllVertices": _getAllVerticesIlsSN9v
	}
		const _returnValuesTDY6N = await hamiltonianCycle(_graphsPZDkbB)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedBiL4p6h = true;
		const _graphArCXAap = new Graph(_isDirectedBiL4p6h)
		const _returnValuecC4oYft = await _graphArCXAap.getAdjacencyMatrix()
		const _valuepsGC7hN = null;
		const _newVertexLUocIXR = new GraphVertex(_valuepsGC7hN)
		const _arrayValuejONEh1s = "SyU4tdJQaexx2T7J2rNT4qWSCAQsKGl4SWIb1RQaHjBGEvtdXbtoCw3TJamwgY4i";
		const _vertexe63LJOD = [_arrayValuejONEh1s]
		const _returnValuelrDLadN = await _newVertexLUocIXR.findEdge(_vertexe63LJOD)
		const _returnValuenJ1Uhh1 = false;
		const _callbackFRzHbBn = () => { return _returnValuenJ1Uhh1 };
		const _returnValue6tzcAE = await _newVertexLUocIXR.toString(_callbackFRzHbBn)
		const _returnValueaylz8Ou = await _graphArCXAap.addVertex(_newVertexLUocIXR)
		const _vertexKeyvCVaIZE = null;
		const _returnValueJGxmvkE = await _graphArCXAap.getVertexByKey(_vertexKeyvCVaIZE)
		const _returnValuez1BuLy = await hamiltonianCycle(_graphArCXAap)
	});
})