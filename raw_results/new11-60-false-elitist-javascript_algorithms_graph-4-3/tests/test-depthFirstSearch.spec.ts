export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphuOgHX3e = true;
		const _startVertexAvn0xEN = null;
		const _returnValueaNXpw4y = 6.178040836739459;
		const _callbacksfVO1cgb = () => { return _returnValueaNXpw4y };
		const _returnValuewaeVEbb = await depthFirstSearch(_graphuOgHX3e, _startVertexAvn0xEN, _callbacksfVO1cgb)
	});
})