export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphmiZo1Ll = "brLG";
		const _startVertexCE38GQQ = -3.5270201106157737;
		const _callbacksjjz3wFd = undefined;
		const _returnValueXmd6bNh = await depthFirstSearch(_graphmiZo1Ll, _startVertexCE38GQQ, _callbacksjjz3wFd)
	});
})