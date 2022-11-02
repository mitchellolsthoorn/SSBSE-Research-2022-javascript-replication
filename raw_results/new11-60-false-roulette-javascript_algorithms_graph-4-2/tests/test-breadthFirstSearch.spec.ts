export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValueQDtB8U = "oLzzyuGNbMNpEORZP8EgSQT8HBngimy";
		const _graphj1p0Ya = [_arrayValueQDtB8U]
		const _startVertexMDQAuEg = undefined;
		const _originalCallbackslsJTQrV = "NNnRxcnSvpRDky7FABQWGUaGlF57ocn78D8HaHThTE7RIvt5d3NX1g5vYj9bZlyTPHU9xRD";
		const _returnValueVF1Fnuo = await breadthFirstSearch(_graphj1p0Ya, _startVertexMDQAuEg, _originalCallbackslsJTQrV)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueL2QXE5M = {
		
	}
		const _arrayValueoBFwF8t = 5.608411925470701;
		const _arrayValueJaE6SHT = [_arrayValueoBFwF8t]
		const _graphG5WWyW = [_arrayValueL2QXE5M, _arrayValueJaE6SHT]
		const _returnValueULVCvE9 = true;
		const _startVertexeifVaJw = () => { return _returnValueULVCvE9 };
		const _returnValueD3hrA4N = "vMliGfLDiSlrEeqCGhlRdEXKrk9";
		const _arrayValueAW9E35D = () => { return _returnValueD3hrA4N };
		const _returnValuet6QwCG7 = [_arrayValueAW9E35D]
		const _originalCallbackstEyvh6 = () => { return _returnValuet6QwCG7 };
		const _returnValueUG3H521 = await breadthFirstSearch(_graphG5WWyW, _startVertexeifVaJw, _originalCallbackstEyvh6)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueHwFTj5c = null;
		const _arrayValueTdICtUt = 8.996446432984442;
		const _arrayValuee3U5Bp = "ETRWKuz9";
		const _returnValueOii13uA = [_arrayValueHwFTj5c, _arrayValueTdICtUt, _arrayValuee3U5Bp]
		const _getNeighborsV9KA7Vx = () => { return _returnValueOii13uA };
		const _graphy6t0PU0 = {
			"getNeighbors": _getNeighborsV9KA7Vx
	}
		const _startVertexBxAqvha = -7.064272020372203;
		const _arrayValuezKj2sDT = true;
		const _arrayValuehXL2mIu = "r6mq5G7soLX8an41eoaTWmxdU1doEj6s9cAFAevulBH77HG3";
		const _arrayValueZyeyXja = {
		
	}
		const _arrayValueCQWfZyi = [_arrayValuezKj2sDT, _arrayValuehXL2mIu, _arrayValueZyeyXja]
		const _arrayValueG2Zv0r = "Ql0prFUpXO3o7dxYA4WTmLUkEJ1HrhrQsntQi5j9MF259LG0iy6NYsKd19QXfMseNwEPQOGuBZ8SbtTvjQVYnxhzplb";
		const _originalCallbackstJaktQ7 = [_arrayValueCQWfZyi, _arrayValueG2Zv0r]
		const _returnValuez9zDQJ8 = await breadthFirstSearch(_graphy6t0PU0, _startVertexBxAqvha, _originalCallbackstJaktQ7)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueHP2Lel0 = {
		
	}
		const _graphUJbwYI = new GraphVertex(_valueHP2Lel0)
		const _returnValueJgpgleX = await _graphUJbwYI.getDegree()
		const _returnValueBgfmY83 = await _graphUJbwYI.getDegree()
		const _startVertexvNE2xcR = {
		
	}
		const _originalCallbacksDk9BpGn = {
		
	}
		const _returnValueWpRZVhH = await breadthFirstSearch(_graphUJbwYI, _startVertexvNE2xcR, _originalCallbacksDk9BpGn)
	});
})