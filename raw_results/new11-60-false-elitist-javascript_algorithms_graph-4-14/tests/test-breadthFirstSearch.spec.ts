export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueH16uPaU = undefined;
		const _getNeighborsew8hDql = () => { return _returnValueH16uPaU };
		const _graphC8PUF6A = {
			"getNeighbors": _getNeighborsew8hDql
	}
		const _startVertexSaegmbn = -1.5306127313799518;
		const _originalCallbackswtKOVi = {
		
	}
		const _returnValueYh1VIun = await breadthFirstSearch(_graphC8PUF6A, _startVertexSaegmbn, _originalCallbackswtKOVi)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuedisUqxt = undefined;
		const _arrayValueBR8ZVXW = [_arrayValuedisUqxt]
		const _arrayValueFRvpvwF = "aAy83tlU1Iv2rnuqfQ2jpUuErtXlCul4arB9HsYMYRjogCKuXrdUXV7";
		const _arrayValuefcpL1r = [_arrayValueFRvpvwF]
		const _arrayValuedWZkUk6 = []
		const _returnValueAE8pdQR = [_arrayValueBR8ZVXW, _arrayValuefcpL1r, _arrayValuedWZkUk6]
		const _getNeighborsRASBCy = () => { return _returnValueAE8pdQR };
		const _graphcMS4ifQ = {
			"getNeighbors": _getNeighborsRASBCy
	}
		const _startVertexLqNjXkN = "GvgTxVKlHLVMKAOT1EqTk9Modr9AzvBCxPhcQRQgOmetWN7M1IxseVbePArEYMMdEuoEDhuBTr4PvyQnyY";
		const _originalCallbacksvQMVIXr = undefined;
		const _returnValueBfPNxv = await breadthFirstSearch(_graphcMS4ifQ, _startVertexLqNjXkN, _originalCallbacksvQMVIXr)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueb4q99xX = []
		const _getNeighborsR3XNtST = () => { return _returnValueb4q99xX };
		const _graphXrCFKsl = {
			"getNeighbors": _getNeighborsR3XNtST
	}
		const _startVertexISNd4Ud = false;
		const _arrayValuej3Xir2i = "56ABKAXIIDRheXkeyNdF4VdGK3Kr7vXljkXfN6nUhDgKzSiRUrx3GQ";
		const _returnValueW2ZoaLL = true;
		const _arrayValuePGY91W6 = () => { return _returnValueW2ZoaLL };
		const _arrayValueHqvzXhB = null;
		const _arrayValuetb482Mj = {
		
	}
		const _originalCallbackscDzyhwG = [_arrayValuej3Xir2i, _arrayValuePGY91W6, _arrayValueHqvzXhB, _arrayValuetb482Mj]
		const _returnValueJ3VEQAI = await breadthFirstSearch(_graphXrCFKsl, _startVertexISNd4Ud, _originalCallbackscDzyhwG)
	});
})