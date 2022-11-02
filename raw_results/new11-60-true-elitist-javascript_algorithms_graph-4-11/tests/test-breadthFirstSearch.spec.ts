export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueRPLHHbM = undefined;
		const _getNeighborsALNZbm9 = () => { return _returnValueRPLHHbM };
		const _graphSUtcsw = {
			"getNeighbors": _getNeighborsALNZbm9
	}
		const _startVertexjqfJdV = -0.34222445424675385;
		const _originalCallbacksyS7ej9 = {
		
	}
		const _returnValueiSbaYW0 = await breadthFirstSearch(_graphSUtcsw, _startVertexjqfJdV, _originalCallbacksyS7ej9)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuelUf4L1g = false;
		const _arrayValueGVNorgK = "N7IfiToe0ptzRaIEx25UWYKMCAkHmePsDkU9nT16nXM5lvfplBPTsMu8bld1Zf3ah";
		const _arrayValueDFpEWKY = undefined;
		const _returnValuebzVxozl = [_arrayValuelUf4L1g, _arrayValueGVNorgK, _arrayValueDFpEWKY]
		const _getNeighborsK8ZAY8J = () => { return _returnValuebzVxozl };
		const _graphYrnyuZR = {
			"getNeighbors": _getNeighborsK8ZAY8J
	}
		const _startVertexdulHReK = null;
		const _originalCallbacksZs8BlnM = {
		
	}
		const _returnValueHELIrwt = await breadthFirstSearch(_graphYrnyuZR, _startVertexdulHReK, _originalCallbacksZs8BlnM)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuev46bf09 = "b";
		const _graphU70mkRs = new GraphVertex(_valuev46bf09)
		const _returnValueELH98fZ = await _graphU70mkRs.getKey()
		const _returnValuenqVKjTF = await _graphU70mkRs.deleteAllEdges()
		const _arrayValue86DdUJ = {
		
	}
		const _edgeuuZraxo = [_arrayValue86DdUJ]
		const _returnValuerFmfGyZ = await _graphU70mkRs.deleteEdge(_edgeuuZraxo)
		const _returnValueZbSfJfr = await _graphU70mkRs.getNeighbors()
		const _startVertexwBcqiwH = "MrKagm5Ef89XAjzO6sE2PbC1zzoa5RqlH59oyfhuK5hklSn84W1ORcU9iEnk0";
		const _originalCallbacksZJ5ohk7 = undefined;
		const _returnValuee9kutN2 = await breadthFirstSearch(_graphU70mkRs, _startVertexwBcqiwH, _originalCallbacksZJ5ohk7)
	});
})