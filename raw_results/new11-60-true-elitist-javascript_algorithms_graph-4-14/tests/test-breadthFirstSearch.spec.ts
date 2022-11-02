export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphnfKhsWh = false;
		const _startVertexGEHAtiV = "rv7WQTyTrWgwdJUbLRZM6ekD3wcklMAjWkN1KirqhB18a";
		const _originalCallbacksQOIjDfQ = []
		const _returnValueJ6jrDmZ = await breadthFirstSearch(_graphnfKhsWh, _startVertexGEHAtiV, _originalCallbacksQOIjDfQ)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuezQZwsqJ = "cPRdLGiaihpwnplQPEy1u35dBJFTKhKnmbhzDRNYFbalT0eQQ3UtjixDosVv8r";
		const _arrayValueAqel3el = () => { return _returnValuezQZwsqJ };
		const _arrayValueDl69uIk = null;
		const _arrayValueeshCt3J = true;
		const _returnValueqD9fD3Z = [_arrayValueAqel3el, _arrayValueDl69uIk, _arrayValueeshCt3J]
		const _getNeighborszsbz4zG = () => { return _returnValueqD9fD3Z };
		const _graphn7UqBqH = {
			"getNeighbors": _getNeighborszsbz4zG
	}
		const _startVertexVfjYfJf = 6.043199635127355;
		const _originalCallbacksll8mmxR = {
		
	}
		const _returnValuepYktE8m = await breadthFirstSearch(_graphn7UqBqH, _startVertexVfjYfJf, _originalCallbacksll8mmxR)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuePSORoaN = []
		const _getNeighborsEBNiZqN = () => { return _returnValuePSORoaN };
		const _grapheBxZNSB = {
			"getNeighbors": _getNeighborsEBNiZqN
	}
		const _startVertexLSTXcp2 = undefined;
		const _originalCallbacksBpFVqdp = {
		
	}
		const _returnValueaNkdAW = await breadthFirstSearch(_grapheBxZNSB, _startVertexLSTXcp2, _originalCallbacksBpFVqdp)
	});
})