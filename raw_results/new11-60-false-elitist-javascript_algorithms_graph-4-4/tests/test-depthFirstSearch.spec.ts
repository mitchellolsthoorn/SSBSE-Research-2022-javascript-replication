export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _arrayValueDleYBoa = false;
		const _arrayValueoS4a3Dm = 9.14075059803644;
		const _graphDwoqKK2 = [_arrayValueDleYBoa, _arrayValueoS4a3Dm]
		const _startVertexWrM3r9v = false;
		const _callbacksYNjKeh = undefined;
		const _returnValueKQIrOZy = await depthFirstSearch(_graphDwoqKK2, _startVertexWrM3r9v, _callbacksYNjKeh)
	});
})