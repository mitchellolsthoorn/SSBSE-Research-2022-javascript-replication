export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphRxjJ5Nj = false;
		const _arrayValueCkozmZF = true;
		const _arrayValue7i0mit = 1.5180859009725811;
		const _startVertexKURB6iS = [_arrayValueCkozmZF, _arrayValue7i0mit]
		const _returnValuelUZiad4 = {
		
	}
		const _arrayValuezMVPBVV = () => { return _returnValuelUZiad4 };
		const _callbacksJGsD6dC = [_arrayValuezMVPBVV]
		const _returnValueVhYUdBE = await depthFirstSearch(_graphRxjJ5Nj, _startVertexKURB6iS, _callbacksJGsD6dC)
	});
})