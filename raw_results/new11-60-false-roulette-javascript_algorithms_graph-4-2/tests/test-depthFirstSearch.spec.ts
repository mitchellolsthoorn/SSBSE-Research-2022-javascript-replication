export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphROetNeQ = undefined;
		const _startVertexmVUHB93 = "bt6hOyxE2ZHbtFPcs8w";
		const _callbacksaXHBxg0 = -7.683199990421074;
		const _returnValueeMio7Uj = await depthFirstSearch(_graphROetNeQ, _startVertexmVUHB93, _callbacksaXHBxg0)
	});

	it('test for depthFirstSearch', async () => {
		const _graphbthDG3E = 8.219205950253379;
		const _startVertexAHjCvB4 = null;
		const _returnValueQ1Z8mI = 6.137659476114962;
		const _arrayValueAtq16is = () => { return _returnValueQ1Z8mI };
		const _arrayValueCslzsX = null;
		const _callbackswG17sp3 = [_arrayValueAtq16is, _arrayValueCslzsX]
		const _returnValueRSCjUV9 = await depthFirstSearch(_graphbthDG3E, _startVertexAHjCvB4, _callbackswG17sp3)
	});
})