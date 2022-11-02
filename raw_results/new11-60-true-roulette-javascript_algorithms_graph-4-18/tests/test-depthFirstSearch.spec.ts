export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graph2RcAlW = 0.06993471905944659;
		const _arrayValueV4D3tY = null;
		const _startVertexkLYckkN = [_arrayValueV4D3tY]
		const _callbackspkIHcIB = undefined;
		const _returnValuewM5RtSt = await depthFirstSearch(_graph2RcAlW, _startVertexkLYckkN, _callbackspkIHcIB)
	});
})