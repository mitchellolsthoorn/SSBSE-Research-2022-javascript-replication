export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueddphmZB = -8.046793676906168;
		const _graphnXKhsoa = () => { return _returnValueddphmZB };
		const _startVertexgUr0khM = -5.485574865842124;
		const _originalCallbacksnECrqbX = null;
		const _returnValuerqSOpnQ = await breadthFirstSearch(_graphnXKhsoa, _startVertexgUr0khM, _originalCallbacksnECrqbX)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueK5aEsW = "oHs6XOk6";
		const _getNeighborsGyplxqp = () => { return _returnValueK5aEsW };
		const _graphxtlq7W = {
			"getNeighbors": _getNeighborsGyplxqp
	}
		const _arrayValueLIzmXKn = -7.97105589048623;
		const _arrayValueryndpB = 7.673548248434535;
		const _arrayValueTU5jCam = "7WIWt52T8JXg";
		const _arrayValueS9Cwu0V = false;
		const _startVertexpTBQVaN = [_arrayValueLIzmXKn, _arrayValueryndpB, _arrayValueTU5jCam, _arrayValueS9Cwu0V]
		const _originalCallbacksq8et3OM = {
		
	}
		const _returnValueSkGWrj5 = await breadthFirstSearch(_graphxtlq7W, _startVertexpTBQVaN, _originalCallbacksq8et3OM)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValue2FJKpK = true;
		const _arrayValueYXsoqfp = -1.0850605903086823;
		const _returnValuepGi9UXL = [_arrayValue2FJKpK, _arrayValueYXsoqfp]
		const _getNeighborsvanX9by = () => { return _returnValuepGi9UXL };
		const _graphJ09yQ69 = {
			"getNeighbors": _getNeighborsvanX9by
	}
		const _arrayValueNVdDncG = {
		
	}
		const _startVertexzEwawyH = [_arrayValueNVdDncG]
		const _arrayValueZqJjqUk = null;
		const _arrayValueQim3A5q = "i96E5Zo3WsSis1e8qjuFa911JkDg4mfsiqVWopdiGcTNEfBGU7NH7LrxrHOFKj7THfMdM6cFJt2NVQ2";
		const _originalCallbacksBD53JZF = [_arrayValueZqJjqUk, _arrayValueQim3A5q]
		const _returnValuefFSRTa = await breadthFirstSearch(_graphJ09yQ69, _startVertexzEwawyH, _originalCallbacksBD53JZF)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuecl9VWSD = []
		const _graphr5vKj3 = new GraphVertex(_valuecl9VWSD)
		const _returnValueEa5tQEN = await _graphr5vKj3.getEdges()
		const _edgeQahXyUi = true;
		const _returnValueCqG8bk = await _graphr5vKj3.deleteEdge(_edgeQahXyUi)
		const _returnValueHPwe0M2 = await _graphr5vKj3.getNeighbors()
		const _returnValueiqUbVnh = await _graphr5vKj3.getNeighbors()
		const _startVertexWbT1OQu = undefined;
		const _arrayValueCxoTKo4 = true;
		const _arrayValuelknh8vl = false;
		const _originalCallbacksuqoCZmY = [_arrayValueCxoTKo4, _arrayValuelknh8vl]
		const _returnValueKjnYVW = await breadthFirstSearch(_graphr5vKj3, _startVertexWbT1OQu, _originalCallbacksuqoCZmY)
	});
})