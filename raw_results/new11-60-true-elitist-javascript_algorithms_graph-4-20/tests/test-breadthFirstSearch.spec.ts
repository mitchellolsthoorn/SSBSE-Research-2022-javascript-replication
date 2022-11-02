export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueYdrHfbD = true;
		const _getNeighborsBXj01Zz = () => { return _returnValueYdrHfbD };
		const _graphDjAsQY6 = {
			"getNeighbors": _getNeighborsBXj01Zz
	}
		const _startVertexXQp8701 = undefined;
		const _originalCallbacksZt1MAvY = undefined;
		const _returnValuefjGq36 = await breadthFirstSearch(_graphDjAsQY6, _startVertexXQp8701, _originalCallbacksZt1MAvY)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueziCByuq = false;
		const _returnValueddcYp4s = [_arrayValueziCByuq]
		const _getNeighborsRPBRrNS = () => { return _returnValueddcYp4s };
		const _graphPw0ScGk = {
			"getNeighbors": _getNeighborsRPBRrNS
	}
		const _startVertexiBdSiGF = undefined;
		const _originalCallbacksndbYOZF = undefined;
		const _returnValueZdNdNTU = await breadthFirstSearch(_graphPw0ScGk, _startVertexiBdSiGF, _originalCallbacksndbYOZF)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuedrmKqSs = []
		const _getNeighborsi1h3vwk = () => { return _returnValuedrmKqSs };
		const _graphd6gjAof = {
			"getNeighbors": _getNeighborsi1h3vwk
	}
		const _returnValueNMa3yyJ = -3.2357652901481293;
		const _returnValuen8arr0X = () => { return _returnValueNMa3yyJ };
		const _startVertexkMucNE = () => { return _returnValuen8arr0X };
		const _arrayValuejyOUyPD = "SC9MflkUL7otuOySG9q";
		const _arrayValueig9HwDg = -1.8215903504642945;
		const _arrayValuekt1NECn = null;
		const _originalCallbackszaa8Tu4 = [_arrayValuejyOUyPD, _arrayValueig9HwDg, _arrayValuekt1NECn]
		const _returnValueSAaTDZo = await breadthFirstSearch(_graphd6gjAof, _startVertexkMucNE, _originalCallbackszaa8Tu4)
	});
})