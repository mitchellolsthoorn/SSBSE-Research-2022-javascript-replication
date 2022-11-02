export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _arrayValuep2LBXjp = null;
		const _returnValueL1Cmh9x = undefined;
		const _arrayValueIsE3Mxl = () => { return _returnValueL1Cmh9x };
		const _graphrfPlQqZ = [_arrayValuep2LBXjp, _arrayValueIsE3Mxl]
		const _startVertexzbqVN3u = -3.734966787500177;
		const _callbacksO9AtADB = {
		
	}
		const _returnValuezo9av0p = await depthFirstSearch(_graphrfPlQqZ, _startVertexzbqVN3u, _callbacksO9AtADB)
	});
})