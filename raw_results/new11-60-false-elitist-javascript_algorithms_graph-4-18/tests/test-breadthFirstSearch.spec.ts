export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _getNeighborsUm2kpBL = 1.7157178648925822;
		const _graphalnbfOS = {
			"getNeighbors": _getNeighborsUm2kpBL
	}
		const _returnValuePY1Y4Au = undefined;
		const _startVertexbB7b1Dv = () => { return _returnValuePY1Y4Au };
		const _originalCallbackslWSm1yi = []
		const _returnValueHwWIiKf = await breadthFirstSearch(_graphalnbfOS, _startVertexbB7b1Dv, _originalCallbackslWSm1yi)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuesByDiy5 = null;
		const _arrayValuegipB53C = -4.186630638563187;
		const _arrayValuevV3LrdC = true;
		const _arrayValueAtyQej1 = [_arrayValuevV3LrdC]
		const _arrayValuekJ2YgX = {
		
	}
		const _returnValueSK7wUcb = [_arrayValuesByDiy5, _arrayValuegipB53C, _arrayValueAtyQej1, _arrayValuekJ2YgX]
		const _getNeighborsfY9cTsB = () => { return _returnValueSK7wUcb };
		const _graphPG3d4n = {
			"getNeighbors": _getNeighborsfY9cTsB
	}
		const _startVertexkwBDqvE = -4.589869931013004;
		const _originalCallbacksA5qh5Yi = undefined;
		const _returnValuecxPP4p = await breadthFirstSearch(_graphPG3d4n, _startVertexkwBDqvE, _originalCallbacksA5qh5Yi)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueMy2QF5K = []
		const _getNeighborsTOTGVeU = () => { return _returnValueMy2QF5K };
		const _graphLylACD = {
			"getNeighbors": _getNeighborsTOTGVeU
	}
		const _startVertexPuxU1SP = "t";
		const _returnValuewGmy8E3 = {
		
	}
		const _originalCallbacksolgDorC = () => { return _returnValuewGmy8E3 };
		const _returnValueDgWRFrn = await breadthFirstSearch(_graphLylACD, _startVertexPuxU1SP, _originalCallbacksolgDorC)
	});
})