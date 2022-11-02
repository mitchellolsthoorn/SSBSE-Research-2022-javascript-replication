export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedJrLkzWu = "KnXaS1d1qamEPkxpennm18EMWQImDdUd1HLuw083SJ3FEHeek9PqFLkqbUoigvE2id5pe9B";
		const _returnValuemaQrQft = true;
		const _getAllVerticesnBG5ooq = () => { return _returnValuemaQrQft };
		const _graphlM1t8d1 = {
			"isDirected": _isDirectedJrLkzWu,
		"getAllVertices": _getAllVerticesnBG5ooq
	}
		const _returnValuelj5dIJh = await prim(_graphlM1t8d1)
	});

	it('test for prim', async () => {
		const _isDirectedKrLcVjn = false;
		const _graphwvzMCA7 = new Graph(_isDirectedKrLcVjn)
		const _returnValuewdW1ZWM = null;
		const _returnValueTIywYp2 = () => { return _returnValuewdW1ZWM };
		const _getKeyutnfcE = () => { return _returnValueTIywYp2 };
		const _newVertexQyk8Bo6 = {
			"getKey": _getKeyutnfcE
	}
		const _returnValueQEDY1in = await _graphwvzMCA7.addVertex(_newVertexQyk8Bo6)
		const _returnValueS8SZ7ml = null;
		const _getKeyNwT9hwl = () => { return _returnValueS8SZ7ml };
		const _startVertexlpJCnM = {
			"getKey": _getKeyNwT9hwl
	}
		const _arrayValueWOtHSn1 = true;
		const _arrayValuetnnNKvQ = {
		
	}
		const _arrayValuef7BGqPG = -3.416077124540916;
		const _arrayValuelo678Np = 7.826786240293291;
		const _arrayValuedyoRROL = "heforxkpX5X6Sv4Qb6Mz5AGQBEUFIvYeif9FSktjPxHijsSiGauGQvNk1NRdzXFdZoCn2DVG6P9WZhMaqo0m6iy6ZqKvK2o3oh";
		const _arrayValueCtiDGHW = [_arrayValuetnnNKvQ, _arrayValuef7BGqPG, _arrayValuelo678Np, _arrayValuedyoRROL]
		const _endVertexl87KR1 = [_arrayValueWOtHSn1, _arrayValueCtiDGHW]
		const _returnValueAbynOp = await _graphwvzMCA7.findEdge(_startVertexlpJCnM, _endVertexl87KR1)
		const _returnValueXE7kEJf = await _graphwvzMCA7.getVerticesIndices()
		const _returnValueeNl1L1c = await _graphwvzMCA7.getAllEdges()
		const _vertexKeyqAOY0I = {
		
	}
		const _returnValueaoDwnV = await _graphwvzMCA7.getVertexByKey(_vertexKeyqAOY0I)
		const _returnValueV4uVSBu = await prim(_graphwvzMCA7)
	});
})