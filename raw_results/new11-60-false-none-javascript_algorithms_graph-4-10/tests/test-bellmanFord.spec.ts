export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphY179ZHI = "OH4Ji";
		const _startVertexVlGHTN4 = -2.905733380509096;
		const _returnValuemv19rH = await bellmanFord(_graphY179ZHI, _startVertexVlGHTN4)
	});
})