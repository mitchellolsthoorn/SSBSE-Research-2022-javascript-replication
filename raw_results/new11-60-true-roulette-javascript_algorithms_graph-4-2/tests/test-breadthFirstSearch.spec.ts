export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphKWmd4dh = []
		const _startVertexLNMDTHi = -9.125566671632793;
		const _originalCallbacksaRcF5S4 = undefined;
		const _returnValueZlNUaN = await breadthFirstSearch(_graphKWmd4dh, _startVertexLNMDTHi, _originalCallbacksaRcF5S4)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueqS3ClQt = null;
		const _graphKtfbxgF = new GraphVertex(_valueqS3ClQt)
		const _returnValueiQvi1Ki = await _graphKtfbxgF.deleteAllEdges()
		const _returnValuetxR5f3 = await _graphKtfbxgF.deleteAllEdges()
		const _startVertexRMbSZpF = null;
		const _arrayValueMePwwpv = 4.471121298418698;
		const _arrayValuecLZiKl7 = false;
		const _originalCallbacksuF2ZmIr = [_arrayValueMePwwpv, _arrayValuecLZiKl7]
		const _returnValueaXbaxfj = await breadthFirstSearch(_graphKtfbxgF, _startVertexRMbSZpF, _originalCallbacksuF2ZmIr)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueKzfKUfh = false;
		const _returnValueeioQtGB = [_arrayValueKzfKUfh]
		const _getNeighborsCIOkNl9 = () => { return _returnValueeioQtGB };
		const _graphcUHiiPf = {
			"getNeighbors": _getNeighborsCIOkNl9
	}
		const _startVertexskoZtFu = undefined;
		const _originalCallbacksDQHINPR = undefined;
		const _returnValuecCBSU4z = await breadthFirstSearch(_graphcUHiiPf, _startVertexskoZtFu, _originalCallbacksDQHINPR)
	});
})