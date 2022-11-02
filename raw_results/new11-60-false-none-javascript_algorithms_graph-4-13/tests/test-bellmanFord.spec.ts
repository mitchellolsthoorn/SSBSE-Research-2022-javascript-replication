export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphF5fLzR9 = false;
		const _startVertexrAx9Vko = false;
		const _returnValueCeUlFHo = await bellmanFord(_graphF5fLzR9, _startVertexrAx9Vko)
	});
})