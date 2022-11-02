export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphXyFS6FH = undefined;
		const _startVertexzgbL96d = null;
		const _callbacksRvRrqL1 = null;
		const _returnValueQ4tde3J = await depthFirstSearch(_graphXyFS6FH, _startVertexzgbL96d, _callbacksRvRrqL1)
	});

	it('test for depthFirstSearch', async () => {
		const _graphW2JDw9A = null;
		const _startVertexrN8w4w7 = {
		
	}
		const _returnValuemt76qCy = true;
		const _callbacksCgfMAdV = () => { return _returnValuemt76qCy };
		const _returnValueRy88S1R = await depthFirstSearch(_graphW2JDw9A, _startVertexrN8w4w7, _callbacksCgfMAdV)
	});
})