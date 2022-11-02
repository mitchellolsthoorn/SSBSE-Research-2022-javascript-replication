export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueFGfX9aN = true;
		const _getNeighborsCOoWmX = () => { return _returnValueFGfX9aN };
		const _graphR1PUWrh = {
			"getNeighbors": _getNeighborsCOoWmX
	}
		const _startVertexQBiayCz = false;
		const _originalCallbacksVEw5ny0 = null;
		const _returnValuex9vz7h2 = await breadthFirstSearch(_graphR1PUWrh, _startVertexQBiayCz, _originalCallbacksVEw5ny0)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueBnqDpl = null;
		const _getNeighborsxVKf2lr = () => { return _returnValueBnqDpl };
		const _graphLEHn7ue = {
			"getNeighbors": _getNeighborsxVKf2lr
	}
		const _startVertexUMCgYY9 = true;
		const _originalCallbackskme3ieB = {
		
	}
		const _returnValueaJUMD6M = await breadthFirstSearch(_graphLEHn7ue, _startVertexUMCgYY9, _originalCallbackskme3ieB)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueDmZUAaA = true;
		const _returnValueozgUw51 = "fsFngzYXOlit1zYT";
		const _arrayValueBrLim9p = () => { return _returnValueozgUw51 };
		const _returnValueJfB702 = [_arrayValueDmZUAaA, _arrayValueBrLim9p]
		const _getNeighborsF2Cskgt = () => { return _returnValueJfB702 };
		const _graphcPKbMQu = {
			"getNeighbors": _getNeighborsF2Cskgt
	}
		const _startVertexphnDeYw = false;
		const _originalCallbacksm3I27bp = undefined;
		const _returnValueXB5qtIS = await breadthFirstSearch(_graphcPKbMQu, _startVertexphnDeYw, _originalCallbacksm3I27bp)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuekEj4RNB = 3.2737713421068353;
		const _graphTP0Gklg = new GraphVertex(_valuekEj4RNB)
		const _vertext2HrQ3i = undefined;
		const _returnValuejxnsMoJ = await _graphTP0Gklg.findEdge(_vertext2HrQ3i)
		const _edgeGnRDN42 = undefined;
		const _returnValuev0lhuQZ = await _graphTP0Gklg.deleteEdge(_edgeGnRDN42)
		const _startVertexDBfldoM = false;
		const _originalCallbackswm0xhSU = undefined;
		const _returnValueBjAqYcr = await breadthFirstSearch(_graphTP0Gklg, _startVertexDBfldoM, _originalCallbackswm0xhSU)
	});
})