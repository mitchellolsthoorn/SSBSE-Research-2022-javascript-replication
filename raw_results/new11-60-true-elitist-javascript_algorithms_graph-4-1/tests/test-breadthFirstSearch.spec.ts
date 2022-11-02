export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuexss4e54 = null;
		const _getNeighborsz3uZeju = () => { return _returnValuexss4e54 };
		const _graphN4o2Zor = {
			"getNeighbors": _getNeighborsz3uZeju
	}
		const _startVertexhPEYT75 = 1.8932087781963638;
		const _originalCallbacksomL3a0v = undefined;
		const _returnValueBOCyxwR = await breadthFirstSearch(_graphN4o2Zor, _startVertexhPEYT75, _originalCallbacksomL3a0v)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValue3VW3YG = null;
		const _arrayValuexKGns8 = "dCtXNJqlvsc3FVM";
		const _arrayValue2AsAgJ = undefined;
		const _returnValueY9XtDSU = [_arrayValue3VW3YG, _arrayValuexKGns8, _arrayValue2AsAgJ]
		const _getNeighborsdeLm99A = () => { return _returnValueY9XtDSU };
		const _graphxWUWXH = {
			"getNeighbors": _getNeighborsdeLm99A
	}
		const _startVertexuziku5w = 3.893401688517404;
		const _returnValueFwZLtD0 = null;
		const _originalCallbacksSkBS8JQ = () => { return _returnValueFwZLtD0 };
		const _returnValuetfYMy1n = await breadthFirstSearch(_graphxWUWXH, _startVertexuziku5w, _originalCallbacksSkBS8JQ)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueUTQPZi1 = []
		const _graphnZ3u084 = new GraphVertex(_valueUTQPZi1)
		const _arrayValueuUlrhMK = []
		const _arrayValuedBME8q2 = {
		
	}
		const _vertexe5R0pN = [_arrayValueuUlrhMK, _arrayValuedBME8q2]
		const _returnValuecQtpEpi = await _graphnZ3u084.hasNeighbor(_vertexe5R0pN)
		const _edgedsoqOj4 = true;
		const _returnValueznE8Rx = await _graphnZ3u084.deleteEdge(_edgedsoqOj4)
		const _returnValue1y5Glb = await _graphnZ3u084.getEdges()
		const _arrayValueTPsr8kr = false;
		const _startVertex3uY8Xt = [_arrayValueTPsr8kr]
		const _arrayValueM0bEIjR = {
		
	}
		const _arrayValuepbiYckc = "RtIWbFJqmKy7BSZSevJnVqz4wppWRcRjT6mkgORISXhBEMja2ttdiWlaRbfFGc4GkBMfSLkKjTT1O88UginTJfJWN";
		const _arrayValuexALRqBA = {
		
	}
		const _arrayValuemAy4YDR = false;
		const _arrayValuencve77R = [_arrayValueM0bEIjR, _arrayValuepbiYckc, _arrayValuexALRqBA, _arrayValuemAy4YDR]
		const _arrayValueA5zG1Ac = "NMdtwUtTsC1gwSBEHMhecl6hNv9h7mnCGfOA4haQHcyF0BzVHJ2TjCkOq";
		const _arrayValuekY5QH5Z = undefined;
		const _arrayValuelA12Jph = undefined;
		const _originalCallbackszTbE5Dl = [_arrayValuencve77R, _arrayValueA5zG1Ac, _arrayValuekY5QH5Z, _arrayValuelA12Jph]
		const _returnValuenzM8mPi = await breadthFirstSearch(_graphnZ3u084, _startVertex3uY8Xt, _originalCallbackszTbE5Dl)
	});
})