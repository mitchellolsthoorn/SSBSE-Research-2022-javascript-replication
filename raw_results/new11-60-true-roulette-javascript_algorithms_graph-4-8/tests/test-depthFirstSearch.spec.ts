export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphxmNp9ve = "oZpcVDA4NFaREkVVWHTiASws8WEybJzdezqBAiSE5MF0";
		const _startVertexfvs7SMG = null;
		const _callbackswJyZ6nY = undefined;
		const _returnValuemt5rIhh = await depthFirstSearch(_graphxmNp9ve, _startVertexfvs7SMG, _callbackswJyZ6nY)
	});
})