export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValueCxyQ0Lq = "5fsLlH4rcX9ChPfubvrgzs7SDQQMCLPNB8tuv";
		const _graphFwMURMM = [_arrayValueCxyQ0Lq]
		const _startVertexmzUE6Su = true;
		const _originalCallbacksCsxW6I = true;
		const _returnValueMUsWNBM = await breadthFirstSearch(_graphFwMURMM, _startVertexmzUE6Su, _originalCallbacksCsxW6I)
	});

	it('test for breadthFirstSearch', async () => {
		const _graphMSWvtxS = "cwhQwdbmQAHk4FNnppubpFxyhTp7";
		const _arrayValueHbhqvul = true;
		const _arrayValueU60vw1r = -0.9988012674847333;
		const _arrayValueCz0xuYw = "JoCinWJoDxMpgS9FGe2PtYxVAIxaZbHlNXpJOeMpCRIJ5LvkPNrO1BkzRaRPeqlQVj1PLsgL66W9Km7Cbk";
		const _returnValuel2DIkw = {
		
	}
		const _arrayValueWRr3gT = () => { return _returnValuel2DIkw };
		const _startVertexYvcsg5K = [_arrayValueHbhqvul, _arrayValueU60vw1r, _arrayValueCz0xuYw, _arrayValueWRr3gT]
		const _originalCallbacksD8EXINY = []
		const _returnValuedb1xE4O = await breadthFirstSearch(_graphMSWvtxS, _startVertexYvcsg5K, _originalCallbacksD8EXINY)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueuQkZouG = undefined;
		const _valueclnj685 = [_arrayValueuQkZouG]
		const _graphYO64Ipn = new GraphVertex(_valueclnj685)
		const _returnValueU2DGGgd = await _graphYO64Ipn.getDegree()
		const _returnValue2lGtMO = await _graphYO64Ipn.getNeighbors()
		const _arrayValueViLy1vA = true;
		const _arrayValuem1bUG2 = true;
		const _arrayValuehrNql9z = 4.865832189052577;
		const _arrayValuepVUxd3v = -5.351976662619643;
		const _arrayValueRfNrYUZ = [_arrayValuehrNql9z, _arrayValuepVUxd3v]
		const _startVertexCh1Jdv = [_arrayValueViLy1vA, _arrayValuem1bUG2, _arrayValueRfNrYUZ]
		const _returnValueYlmDhOT = undefined;
		const _returnValueH3FfOPX = () => { return _returnValueYlmDhOT };
		const _returnValueyQhGXbP = () => { return _returnValueH3FfOPX };
		const _originalCallbacksaFmb1hY = () => { return _returnValueyQhGXbP };
		const _returnValueeYB2UQ = await breadthFirstSearch(_graphYO64Ipn, _startVertexCh1Jdv, _originalCallbacksaFmb1hY)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueGNKXDWG = false;
		const _valueWSKu28r = [_arrayValueGNKXDWG]
		const _graphkRLZA8x = new GraphVertex(_valueWSKu28r)
		const _returnValueYAqX5O = await _graphkRLZA8x.deleteAllEdges()
		const _vertexc1CLmFO = null;
		const _returnValuezlQNyMV = await _graphkRLZA8x.findEdge(_vertexc1CLmFO)
		const _requiredEdgel6YUWrC = true;
		const _returnValueFxT9lIu = await _graphkRLZA8x.hasEdge(_requiredEdgel6YUWrC)
		const _edgelhs4Ha = 1.1247931508893814;
		const _returnValueFgYJ5vj = await _graphkRLZA8x.addEdge(_edgelhs4Ha)
		const _requiredEdgeNHkOYX7 = 0.3286617008416428;
		const _returnValueQ4EEa9V = await _graphkRLZA8x.hasEdge(_requiredEdgeNHkOYX7)
		const _returnValueYYJP1PN = undefined;
		const _startVertexYxCYMEi = () => { return _returnValueYYJP1PN };
		const _originalCallbacksKt5rpfa = undefined;
		const _returnValuetg43Tqc = await breadthFirstSearch(_graphkRLZA8x, _startVertexYxCYMEi, _originalCallbacksKt5rpfa)
	});
})