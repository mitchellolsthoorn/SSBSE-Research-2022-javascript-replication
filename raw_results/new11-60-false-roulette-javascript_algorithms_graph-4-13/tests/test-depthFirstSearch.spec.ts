export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _arrayValuePxRv7OW = true;
		const _returnValuegJxuTDO = false;
		const _arrayValueOAVTJfy = () => { return _returnValuegJxuTDO };
		const _arrayValuemKilVVt = [_arrayValuePxRv7OW, _arrayValueOAVTJfy]
		const _arrayValuec79bCE = -7.6595079390518634;
		const _graphZ8xJOeg = [_arrayValuemKilVVt, _arrayValuec79bCE]
		const _returnValueKy22OZN = undefined;
		const _startVertexhyWdxHh = () => { return _returnValueKy22OZN };
		const _callbacksAfFxuol = undefined;
		const _returnValueVxkjnmy = await depthFirstSearch(_graphZ8xJOeg, _startVertexhyWdxHh, _callbacksAfFxuol)
	});
})