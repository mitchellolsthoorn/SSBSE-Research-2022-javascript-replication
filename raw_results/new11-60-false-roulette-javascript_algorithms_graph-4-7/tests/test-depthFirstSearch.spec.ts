export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphbB7wox8 = 2.645107471691073;
		const _startVertexQouWJQ5 = 6.215420817199256;
		const _callbacksQyJBeiQ = null;
		const _returnValuep7X00CH = await depthFirstSearch(_graphbB7wox8, _startVertexQouWJQ5, _callbacksQyJBeiQ)
	});

	it('test for depthFirstSearch', async () => {
		const _graphoCe3aba = false;
		const _startVertexewr9JwQ = null;
		const _callbackswXcobRJ = undefined;
		const _returnValueQs7Lapx = await depthFirstSearch(_graphoCe3aba, _startVertexewr9JwQ, _callbackswXcobRJ)
	});
})