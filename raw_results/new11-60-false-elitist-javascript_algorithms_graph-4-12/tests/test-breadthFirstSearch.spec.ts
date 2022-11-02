export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuefq3fElE = null;
		const _getNeighborstTBGWTq = () => { return _returnValuefq3fElE };
		const _graphxRddInw = {
			"getNeighbors": _getNeighborstTBGWTq
	}
		const _startVertexr42Vt9 = undefined;
		const _originalCallbacksozi27dI = "UX";
		const _returnValueHHN8eXa = await breadthFirstSearch(_graphxRddInw, _startVertexr42Vt9, _originalCallbacksozi27dI)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueCVgzSj = false;
		const _getNeighborstE589ZI = () => { return _returnValueCVgzSj };
		const _graphHxVWHR = {
			"getNeighbors": _getNeighborstE589ZI
	}
		const _startVertexWveCrIl = "SWByugEOmnkhYW0J316ygbKMlWmm";
		const _originalCallbacksKKVrM9a = undefined;
		const _returnValueT3XA82c = await breadthFirstSearch(_graphHxVWHR, _startVertexWveCrIl, _originalCallbacksKKVrM9a)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueSNiWrmr = undefined;
		const _returnValueHamhcj2 = [_arrayValueSNiWrmr]
		const _getNeighborsxi7l4mk = () => { return _returnValueHamhcj2 };
		const _graphOAa9lBR = {
			"getNeighbors": _getNeighborsxi7l4mk
	}
		const _startVertexadM9rmK = []
		const _originalCallbacksxeN7HT9 = undefined;
		const _returnValueQA8hEfS = await breadthFirstSearch(_graphOAa9lBR, _startVertexadM9rmK, _originalCallbacksxeN7HT9)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueDnxZ7rz = []
		const _getNeighborsvmbKVRy = () => { return _returnValueDnxZ7rz };
		const _graphBt0lTgF = {
			"getNeighbors": _getNeighborsvmbKVRy
	}
		const _returnValuewGEv8YQ = "9c2yyhFAQxznsTb0yHgx8xrRjndWcklMga861NASXWCJnLlgTxVl5F";
		const _arrayValueoMWR6Un = () => { return _returnValuewGEv8YQ };
		const _arrayValueTDUWVxa = 8.193447971469876;
		const _startVertexMizxIYB = [_arrayValueoMWR6Un, _arrayValueTDUWVxa]
		const _originalCallbacksTaVbTnP = undefined;
		const _returnValuekJk7H5F = await breadthFirstSearch(_graphBt0lTgF, _startVertexMizxIYB, _originalCallbacksTaVbTnP)
	});
})