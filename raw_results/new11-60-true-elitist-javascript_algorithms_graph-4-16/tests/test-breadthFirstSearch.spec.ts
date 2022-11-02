export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueM40tya = null;
		const _getNeighborsSiNsPs = () => { return _returnValueM40tya };
		const _graphcLFHKy3 = {
			"getNeighbors": _getNeighborsSiNsPs
	}
		const _startVertexg3K5XdA = {
		
	}
		const _originalCallbacks9cCCTw = null;
		const _returnValueLuRsc0T = await breadthFirstSearch(_graphcLFHKy3, _startVertexg3K5XdA, _originalCallbacks9cCCTw)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueQ8btJJM = null;
		const _getNeighborsV5COkfZ = () => { return _returnValueQ8btJJM };
		const _graphxTt4U3M = {
			"getNeighbors": _getNeighborsV5COkfZ
	}
		const _startVertexWBwjOZq = undefined;
		const _arrayValueJVhf22 = null;
		const _arrayValuegalIIZA = 6.438569782305596;
		const _arrayValuedrQn16v = 5.55058997472357;
		const _originalCallbacksQpXrOU = [_arrayValueJVhf22, _arrayValuegalIIZA, _arrayValuedrQn16v]
		const _returnValueQNSIeJ = await breadthFirstSearch(_graphxTt4U3M, _startVertexWBwjOZq, _originalCallbacksQpXrOU)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueRC4gfoQ = {
		
	}
		const _arrayValueX7iguA7 = null;
		const _returnValue1rDrIi = [_arrayValueRC4gfoQ, _arrayValueX7iguA7]
		const _getNeighborsSTd5RQj = () => { return _returnValue1rDrIi };
		const _graphWKPuwk = {
			"getNeighbors": _getNeighborsSTd5RQj
	}
		const _startVertexujvWw9q = -2.218834760551366;
		const _arrayValueqBih6Xc = -5.979204395479688;
		const _originalCallbacksIdeTSaB = [_arrayValueqBih6Xc]
		const _returnValueVnFEbPc = await breadthFirstSearch(_graphWKPuwk, _startVertexujvWw9q, _originalCallbacksIdeTSaB)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueBKLdw60 = {
		
	}
		const _graphj9BPEky = new GraphVertex(_valueBKLdw60)
		const _arrayValuepOoQWaz = {
		
	}
		const _arrayValueNObCRn = 7.864306142362626;
		const _arrayValuehYUbs07 = {
		
	}
		const _arrayValuea18jLSO = {
		
	}
		const _arrayValuev82b9F2 = [_arrayValuehYUbs07, _arrayValuea18jLSO]
		const _edgeZ6uWdH2 = [_arrayValuepOoQWaz, _arrayValueNObCRn, _arrayValuev82b9F2]
		const _returnValueYtaj7JE = await _graphj9BPEky.deleteEdge(_edgeZ6uWdH2)
		const _returnValuef8V2s7k = await _graphj9BPEky.getKey()
		const _vertexWepOD2 = "xQwmaQpi2qF115OrCm3PgMQMKjg2";
		const _returnValueg0B8XTY = await _graphj9BPEky.hasNeighbor(_vertexWepOD2)
		const _arrayValuerxpdmnI = true;
		const _startVertexb1yLT5P = [_arrayValuerxpdmnI]
		const _returnValuefwKkQQA = []
		const _originalCallbacksXAKjtKa = () => { return _returnValuefwKkQQA };
		const _returnValueoW0MXrl = await breadthFirstSearch(_graphj9BPEky, _startVertexb1yLT5P, _originalCallbacksXAKjtKa)
	});
})