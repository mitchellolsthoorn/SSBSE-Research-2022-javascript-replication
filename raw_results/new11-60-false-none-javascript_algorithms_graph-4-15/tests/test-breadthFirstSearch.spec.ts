export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphWbgNvL5 = null;
		const _startVertexvh1xulG = 3.332971835194785;
		const _returnValueJU1WWRf = []
		const _originalCallbacksHKxcJhS = () => { return _returnValueJU1WWRf };
		const _returnValueDorget0 = await breadthFirstSearch(_graphWbgNvL5, _startVertexvh1xulG, _originalCallbacksHKxcJhS)
	});
})