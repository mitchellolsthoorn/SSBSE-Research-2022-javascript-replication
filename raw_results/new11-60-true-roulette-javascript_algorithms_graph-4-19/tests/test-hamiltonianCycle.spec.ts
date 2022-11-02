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
		const _returnValuef6UTKOS = "PE7iEll7lrWj2q7UueMnHvTJdebQjTd8eszbv5932EE4QWizhU9CENZaOmBa3d4bngwRTh9uPWAP4VGTS9O";
		const _graphlAnjHxU = () => { return _returnValuef6UTKOS };
		const _returnValuemnaxI0O = await hamiltonianCycle(_graphlAnjHxU)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueesmqEuX = undefined;
		const _returnValueU2LMJsS = () => { return _returnValueesmqEuX };
		const _getVerticesIndicesEOthrEy = () => { return _returnValueU2LMJsS };
		const _returnValueq0ep0at = true;
		const _getAdjacencyMatrixWQpjcCf = () => { return _returnValueq0ep0at };
		const _returnValueODUnawT = "bYWlbRo7KK52QqL6RFRsgwJbcgKJyAWImhNIPSnwPZ6uM6reoC";
		const _getAllVerticesBVtf2h = () => { return _returnValueODUnawT };
		const _graphmQ1nbrO = {
			"getVerticesIndices": _getVerticesIndicesEOthrEy,
		"getAdjacencyMatrix": _getAdjacencyMatrixWQpjcCf,
		"getAllVertices": _getAllVerticesBVtf2h
	}
		const _returnValueUYvR4PP = await hamiltonianCycle(_graphmQ1nbrO)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedR8k94ke = false;
		const _graphuzbQpvD = new Graph(_isDirectedR8k94ke)
		const _returnValuefUO3OSh = await _graphuzbQpvD.getAllEdges()
		const _valueoilQe7f = "HMVqsT2MKbYBRulSiHvtw";
		const _newVertexCcTDwod = new GraphVertex(_valueoilQe7f)
		const _requiredEdgerozDTFl = []
		const _returnValuesxxM8vT = await _newVertexCcTDwod.hasEdge(_requiredEdgerozDTFl)
		const _callbackLh24Oje = false;
		const _returnValuey2BB7bR = await _newVertexCcTDwod.toString(_callbackLh24Oje)
		const _arrayValuekLGhnkE = undefined;
		const _arrayValuewAGxb4X = undefined;
		const _arrayValuexeWM4M6 = 1.6808574782524506;
		const _vertexlHt5FX0 = [_arrayValuekLGhnkE, _arrayValuewAGxb4X, _arrayValuexeWM4M6]
		const _returnValuerhzh0tf = await _newVertexCcTDwod.hasNeighbor(_vertexlHt5FX0)
		const _returnValueezS8eL7 = await _newVertexCcTDwod.deleteAllEdges()
		const _returnValuecYrsS0V = await _graphuzbQpvD.addVertex(_newVertexCcTDwod)
		const _returnValueNTukAnO = await _graphuzbQpvD.getAllVertices()
		const _returnValueKc0BZAC = await _graphuzbQpvD.getAllEdges()
		const _returnValueZ1PKSQK = await hamiltonianCycle(_graphuzbQpvD)
	});
})