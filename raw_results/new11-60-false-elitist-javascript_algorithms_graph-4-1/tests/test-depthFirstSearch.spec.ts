export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphxiYbAy4 = false;
		const _startVertexTBmLzQP = undefined;
		const _arrayValuerRKi3WX = -7.196810671977593;
		const _arrayValueHAaogh9 = "Qv2NwKbUlm1rm";
		const _arrayValuemF7tn96 = -8.860000999208973;
		const _arrayValueIMEdyqV = [_arrayValueHAaogh9, _arrayValuemF7tn96]
		const _returnValueZaTvL2K = true;
		const _arrayValueC3gSog4 = () => { return _returnValueZaTvL2K };
		const _callbacksarcT52q = [_arrayValuerRKi3WX, _arrayValueIMEdyqV, _arrayValueC3gSog4]
		const _returnValuewlD4wZ = await depthFirstSearch(_graphxiYbAy4, _startVertexTBmLzQP, _callbacksarcT52q)
	});
})