export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphAVivk4i = true;
		const _startVertexfHyHgu = "naxB";
		const _returnValueusF2Q3V = await bellmanFord(_graphAVivk4i, _startVertexfHyHgu)
	});
})