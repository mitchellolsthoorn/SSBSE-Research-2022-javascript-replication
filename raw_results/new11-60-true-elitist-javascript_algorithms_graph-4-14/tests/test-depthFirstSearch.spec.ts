export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _returnValueSD9ADb0 = null;
		const _graphW8s8B4 = () => { return _returnValueSD9ADb0 };
		const _startVertexkwTr5m6 = undefined;
		const _callbacksIHuoQVw = "IMXvsqgfY95MGD2wrdbJO7tu9uZTa6i6gojf17blzokMu5qUbd3Fh1fzN0In2k7N6VUqwAh9HpCAsXppu8UxvDV9XoC";
		const _returnValuew1UKh1 = await depthFirstSearch(_graphW8s8B4, _startVertexkwTr5m6, _callbacksIHuoQVw)
	});

	it('test for depthFirstSearch', async () => {
		const _graphrjORITn = {
		
	}
		const _startVertexBGxzzxB = true;
		const _returnValueE64ws1h = undefined;
		const _callbackstJoGEux = () => { return _returnValueE64ws1h };
		const _returnValueFkDsWCt = await depthFirstSearch(_graphrjORITn, _startVertexBGxzzxB, _callbackstJoGEux)
	});
})