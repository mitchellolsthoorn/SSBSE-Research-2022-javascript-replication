export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphFHif3Dw = 8.674058275205539;
		const _startVertexidH3j2y = null;
		const _callbackssMFpbq8 = undefined;
		const _returnValueCqhAVhh = await depthFirstSearch(_graphFHif3Dw, _startVertexidH3j2y, _callbackssMFpbq8)
	});
})