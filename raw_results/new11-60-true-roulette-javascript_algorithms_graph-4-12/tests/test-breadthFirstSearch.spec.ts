export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueRdSxAwK = undefined;
		const _returnValueiPtjMMX = () => { return _returnValueRdSxAwK };
		const _getNeighborsZsFB9hg = () => { return _returnValueiPtjMMX };
		const _graphMm9zi8q = {
			"getNeighbors": _getNeighborsZsFB9hg
	}
		const _startVertexAcXakFu = undefined;
		const _originalCallbacksMEOgV9P = -5.269138956975834;
		const _returnValueaWojpGc = await breadthFirstSearch(_graphMm9zi8q, _startVertexAcXakFu, _originalCallbacksMEOgV9P)
	});

	it('test for breadthFirstSearch', async () => {
		const _getNeighborsmuQaRgs = "HLpGTBTYqcckNCbPGkFaLGu9tjnPPFyDE7eALj3TTYBhjnrkHPBQKWcz";
		const _graphV6NLRuf = {
			"getNeighbors": _getNeighborsmuQaRgs
	}
		const _arrayValue1RhZYQ = true;
		const _returnValueHUD7NJm = null;
		const _arrayValueBHjKTrl = () => { return _returnValueHUD7NJm };
		const _arrayValueGeuFtQE = -8.705668246618023;
		const _arrayValueARcsIO = {
		
	}
		const _arrayValueG7SsoRn = "KxcrDqj9HaUuqa8xO4QURstay5HfODdWmeOeyE7MzlBP8K5scge6wGNRvauz2CGAer9daXLry84";
		const _arrayValuec3CsGMj = [_arrayValueARcsIO, _arrayValueG7SsoRn]
		const _arrayValueRExiv6t = [_arrayValueBHjKTrl, _arrayValueGeuFtQE, _arrayValuec3CsGMj]
		const _startVertexKQo5kUQ = [_arrayValue1RhZYQ, _arrayValueRExiv6t]
		const _originalCallbacksJuuassN = undefined;
		const _returnValueGOi9XdE = await breadthFirstSearch(_graphV6NLRuf, _startVertexKQo5kUQ, _originalCallbacksJuuassN)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuegw1gNT = null;
		const _graphoCGCIFx = new GraphVertex(_valuegw1gNT)
		const _requiredEdgem0zrJxk = null;
		const _returnValueyjKtQZd = await _graphoCGCIFx.hasEdge(_requiredEdgem0zrJxk)
		const _arrayValueazlTsn = "N7KkEOMcJ";
		const _arrayValuepUWBsN = 5.645668356924926;
		const _arrayValueDy1H3i1 = undefined;
		const _arrayValuea4QtkwV = null;
		const _edgegSu0Jy = [_arrayValueazlTsn, _arrayValuepUWBsN, _arrayValueDy1H3i1, _arrayValuea4QtkwV]
		const _returnValueN9lTVc5 = await _graphoCGCIFx.deleteEdge(_edgegSu0Jy)
		const _vertexeaVb8Lj = {
		
	}
		const _returnValueXDpZwXo = await _graphoCGCIFx.hasNeighbor(_vertexeaVb8Lj)
		const _returnValuemj8d17Y = await _graphoCGCIFx.getDegree()
		const _vertexRIn2teK = true;
		const _returnValuecI1CQI = await _graphoCGCIFx.hasNeighbor(_vertexRIn2teK)
		const _startVertexeUSG2s = undefined;
		const _originalCallbackso7HiZUE = undefined;
		const _returnValueVqwCCyA = await breadthFirstSearch(_graphoCGCIFx, _startVertexeUSG2s, _originalCallbackso7HiZUE)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueSh1FWUl = "P2FxkCkvbdPafSjc0NRIDBu3nRN3g";
		const _graphyinpzgW = new GraphVertex(_valueSh1FWUl)
		const _vertexFi0g3Yg = true;
		const _returnValueniSyUiA = await _graphyinpzgW.hasNeighbor(_vertexFi0g3Yg)
		const _edgeQGG8oWW = false;
		const _returnValuen7GSEe1 = await _graphyinpzgW.addEdge(_edgeQGG8oWW)
		const _vertexkpVvi72 = false;
		const _returnValuektIposk = await _graphyinpzgW.hasNeighbor(_vertexkpVvi72)
		const _arrayValueQVQBwNR = null;
		const _arrayValueEl832F = [_arrayValueQVQBwNR]
		const _arrayValuezMx1XA = -4.25833904288543;
		const _startVertexZcEA6j = [_arrayValueEl832F, _arrayValuezMx1XA]
		const _arrayValueSRCdvX9 = "g1TrV9BGsagG7KFLdNRsRkNojX1weiGOmeXJne6BfXX";
		const _returnValueqDDIJvK = [_arrayValueSRCdvX9]
		const _arrayValueCtVDKpy = () => { return _returnValueqDDIJvK };
		const _arrayValueAkzZzVu = -0.49181041651950075;
		const _arrayValueTGOEoFU = 9.880166225258108;
		const _originalCallbacksxT1F09 = [_arrayValueCtVDKpy, _arrayValueAkzZzVu, _arrayValueTGOEoFU]
		const _returnValueQsVPpH = await breadthFirstSearch(_graphyinpzgW, _startVertexZcEA6j, _originalCallbacksxT1F09)
	});
})