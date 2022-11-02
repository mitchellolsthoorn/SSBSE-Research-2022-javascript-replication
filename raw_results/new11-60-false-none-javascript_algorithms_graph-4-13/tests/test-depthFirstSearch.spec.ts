export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphp3JCyxF = "o0Vs4JGEptotehUL6aDUicNz0HkKY5F73QeKo10jqJuHJv7ROmYzbjajtA5qfeajZUw7ln";
		const _startVertexez2Q95z = "48YUKeqlFdoBOvq3hWhyqgznmJVHf6KUG1DxlDUNHyJU6ikn2zw8IS5A9dCGp5cfknW5FWmzNEz5K4bcy4KP7";
		const _arrayValuelXIvjb = null;
		const _arrayValueGOPJ40 = "Uyj6YId4qoUQlXvQdVVv2X1S5NN6JwyNA2";
		const _returnValuekXM82O1 = [_arrayValuelXIvjb, _arrayValueGOPJ40]
		const _callbacksK1ZW3l8 = () => { return _returnValuekXM82O1 };
		const _returnValuehAvnrYj = await depthFirstSearch(_graphp3JCyxF, _startVertexez2Q95z, _callbacksK1ZW3l8)
	});
})