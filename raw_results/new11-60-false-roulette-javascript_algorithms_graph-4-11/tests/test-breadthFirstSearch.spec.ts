export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuewiOiUaL = 1.4361455086933557;
		const _graphFE2dxvu = () => { return _returnValuewiOiUaL };
		const _startVertexhMX3gi2 = null;
		const _originalCallbackswE0qP11 = "U3tdrrQUXTlnTHoUlFsckOxfUA";
		const _returnValueyBJOOMV = await breadthFirstSearch(_graphFE2dxvu, _startVertexhMX3gi2, _originalCallbackswE0qP11)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueodmRHn4 = false;
		const _getNeighborsbm1dncm = () => { return _returnValueodmRHn4 };
		const _graphXGrfPhT = {
			"getNeighbors": _getNeighborsbm1dncm
	}
		const _startVertexwhrevnt = undefined;
		const _arrayValueQOc77PL = null;
		const _originalCallbackslm6uS1f = [_arrayValueQOc77PL]
		const _returnValueLYFzR5w = await breadthFirstSearch(_graphXGrfPhT, _startVertexwhrevnt, _originalCallbackslm6uS1f)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueR5cJnFL = {
		
	}
		const _graphShBFEvX = new GraphVertex(_valueR5cJnFL)
		const _returnValuek353MH = await _graphShBFEvX.getKey()
		const _returnValueJWIKlpi = true;
		const _callbackSHnstGP = () => { return _returnValueJWIKlpi };
		const _returnValuewIdnV6h = await _graphShBFEvX.toString(_callbackSHnstGP)
		const _startVertexy0qsLsM = null;
		const _arrayValuebRo8vD = undefined;
		const _originalCallbacksm3MohIs = [_arrayValuebRo8vD]
		const _returnValuedrwsSn = await breadthFirstSearch(_graphShBFEvX, _startVertexy0qsLsM, _originalCallbacksm3MohIs)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueLYlm9Wi = {
		
	}
		const _arrayValuewAVyMf = "4nCgE9QSwzGNCDAeaLkKq1VaPxOP07Lhgv6vJeRo1krmIllK7KThS2F5jc3h5mn8YEcKchsKV836nf44IlhlLDPHLfzxcH";
		const _arrayValuen8FDYvJ = 9.150800026810533;
		const _arrayValue7t2hO1 = null;
		const _returnValuenT9PNPf = [_arrayValueLYlm9Wi, _arrayValuewAVyMf, _arrayValuen8FDYvJ, _arrayValue7t2hO1]
		const _getNeighborsx5kaSu = () => { return _returnValuenT9PNPf };
		const _graphsShr5XH = {
			"getNeighbors": _getNeighborsx5kaSu
	}
		const _startVertexOdO7Bt3 = {
		
	}
		const _arrayValuexi6jCPi = null;
		const _originalCallbacksatd8EH = [_arrayValuexi6jCPi]
		const _returnValueCuwWWE3 = await breadthFirstSearch(_graphsShr5XH, _startVertexOdO7Bt3, _originalCallbacksatd8EH)
	});
})