export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _arrayValue8IZEno = "p";
		const _arrayValuehBUQeMT = undefined;
		const _arrayValueCLcyZu8 = undefined;
		const _arrayValuefBObyb = "VJ3ajuDv2WwjdXqJcR266FpbgNoi9tSpv3nMLBxP5I9FYaY3edhroaQGj9h1yR5l1vq";
		const _graphL20ABf = [_arrayValue8IZEno, _arrayValuehBUQeMT, _arrayValueCLcyZu8, _arrayValuefBObyb]
		const _arrayValuecmDxFTL = "JDIIiuzDIw1ImOO2qcIE09tNWB7eKLBTBctD5ymtRud8uEluzFvru5";
		const _arrayValueF31jSe4 = null;
		const _arrayValue8wa9nN = [_arrayValuecmDxFTL, _arrayValueF31jSe4]
		const _startVertexJTvGtSO = [_arrayValue8wa9nN]
		const _callbackskQ79Bjs = undefined;
		const _returnValuesk79Xy0 = await depthFirstSearch(_graphL20ABf, _startVertexJTvGtSO, _callbackskQ79Bjs)
	});
})