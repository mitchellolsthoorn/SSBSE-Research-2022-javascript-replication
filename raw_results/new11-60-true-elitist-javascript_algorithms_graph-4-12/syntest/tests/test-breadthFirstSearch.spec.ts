export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphuJeXhRH = undefined;
		const _startVertexXV3bv0q = false;
		const _arrayValueoMbMkuP = 3.4305231507508545;
		const _returnValuecAzy09o = null;
		const _arrayValueztxltie = () => { return _returnValuecAzy09o };
		const _originalCallbacksJXJDGnb = [_arrayValueoMbMkuP, _arrayValueztxltie]
		const _returnValueRXXtoBa = await breadthFirstSearch(_graphuJeXhRH, _startVertexXV3bv0q, _originalCallbacksJXJDGnb)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueFbaM1a = "ajfEXfoB6QLPO14IO99UtuMSchcdSbVmE4P5qeHUu119QbMv6ctoqVInebzHv9YPWi2U5r";
		const _arrayValuegL6xHmy = null;
		const _arrayValueLsQnyKg = [_arrayValuegL6xHmy]
		const _arrayValueyxD4Pft = "KJjlx2oGMp1hvbt4LeR8f6hdgiOAOlsL1p2rMAz9Phg2g1ykEl7ppzZWuUtTnNiMlHx4sfUw";
		const _returnValueBLvowCt = [_arrayValueFbaM1a, _arrayValueLsQnyKg, _arrayValueyxD4Pft]
		const _getNeighborsltHtCi = () => { return _returnValueBLvowCt };
		const _graphkjRWC13 = {
			"getNeighbors": _getNeighborsltHtCi
	}
		const _startVertexdEaREto = undefined;
		const _originalCallbacksjxLMUnL = undefined;
		const _returnValueqztiRao = await breadthFirstSearch(_graphkjRWC13, _startVertexdEaREto, _originalCallbacksjxLMUnL)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueyn5uaIf = {
		
	}
		const _graphjx2E93O = new GraphVertex(_valueyn5uaIf)
		const _returnValuejCd7F82 = await _graphjx2E93O.getKey()
		const _arrayValueotsZ7gX = null;
		const _vertexofyNlWt = [_arrayValueotsZ7gX]
		const _returnValueAZxRlin = await _graphjx2E93O.hasNeighbor(_vertexofyNlWt)
		const _edgeeAE4Gw4 = null;
		const _returnValuegxzwSj = await _graphjx2E93O.deleteEdge(_edgeeAE4Gw4)
		const _arrayValueifiu6Oz = []
		const _vertexISawTTu = [_arrayValueifiu6Oz]
		const _returnValuengGE8Ua = await _graphjx2E93O.findEdge(_vertexISawTTu)
		const _startVertexj2elawI = undefined;
		const _arrayValueuLNZWSR = null;
		const _originalCallbacksEOvcp17 = [_arrayValueuLNZWSR]
		const _returnValueucGMY4 = await breadthFirstSearch(_graphjx2E93O, _startVertexj2elawI, _originalCallbacksEOvcp17)
	});
})