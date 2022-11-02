export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphMyNObmn = "3XK1JZ311uP6vxxW7UVjMm";
		const _startVertexAfKgRRy = null;
		const _callbackscxYzDZE = {
		
	}
		const _returnValuebOYPbIm = await depthFirstSearch(_graphMyNObmn, _startVertexAfKgRRy, _callbackscxYzDZE)
	});
})