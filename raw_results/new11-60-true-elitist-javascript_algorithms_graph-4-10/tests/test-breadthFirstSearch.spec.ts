export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuerxsj25 = "fmgbzsKWoQyuqBriqTtlov2ruHmVTTtcMqJvoIiEWWjgM";
		const _getNeighborsF45Pq4i = () => { return _returnValuerxsj25 };
		const _graphxsPs2FW = {
			"getNeighbors": _getNeighborsF45Pq4i
	}
		const _startVertexLzImkKB = "z9zveFl60s2TmVH17xmd02r1qmI3ogcpq8a0lMCZEwmzTEM5xDq6X9w98SYaEFUE2sfzg4jWy5";
		const _originalCallbacks1RDjrG = {
		
	}
		const _returnValuemwfG2B8 = await breadthFirstSearch(_graphxsPs2FW, _startVertexLzImkKB, _originalCallbacks1RDjrG)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueBsCEHc0 = null;
		const _arrayValueBrNUATT = false;
		const _arrayValueGTMyyvL = null;
		const _arrayValueYWQHGRN = null;
		const _arrayValueF9lBQm3 = [_arrayValueBsCEHc0, _arrayValueBrNUATT, _arrayValueGTMyyvL, _arrayValueYWQHGRN]
		const _returnValuemnhkBRU = [_arrayValueF9lBQm3]
		const _getNeighborsNGtGm6E = () => { return _returnValuemnhkBRU };
		const _graphjC5qWHC = {
			"getNeighbors": _getNeighborsNGtGm6E
	}
		const _startVertex1POEAP = false;
		const _originalCallbacksgXK2iv0 = undefined;
		const _returnValueFihgrMB = await breadthFirstSearch(_graphjC5qWHC, _startVertex1POEAP, _originalCallbacksgXK2iv0)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueJa4VEjm = false;
		const _graphgQI5C0 = new GraphVertex(_valueJa4VEjm)
		const _edgeYP2RmfE = {
		
	}
		const _returnValuemVfdvLq = await _graphgQI5C0.deleteEdge(_edgeYP2RmfE)
		const _vertexysiXmR = null;
		const _returnValueogmlXWY = await _graphgQI5C0.hasNeighbor(_vertexysiXmR)
		const _returnValueoTfdkE = await _graphgQI5C0.getKey()
		const _returnValue0nR7cx = await _graphgQI5C0.deleteAllEdges()
		const _startVertexkg9mXDT = {
		
	}
		const _originalCallbacksTlgbXRv = undefined;
		const _returnValueAyrePgE = await breadthFirstSearch(_graphgQI5C0, _startVertexkg9mXDT, _originalCallbacksTlgbXRv)
	});
})