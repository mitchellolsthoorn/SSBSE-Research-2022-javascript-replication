export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphtXOR6VP = "Ut8Uu7KMCxzsEWh0EuI8";
		const _startVertexRWUBOxU = 9.943103501208054;
		const _arrayValuecGQuhsg = "pnnu6";
		const _callbackszpI5cMT = [_arrayValuecGQuhsg]
		const _returnValueqFVhs3B = await depthFirstSearch(_graphtXOR6VP, _startVertexRWUBOxU, _callbackszpI5cMT)
	});
})