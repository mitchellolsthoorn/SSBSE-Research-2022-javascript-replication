export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphBBqMC1c = undefined;
		const _startVertexHhRnGqV = null;
		const _returnValuefXswr6P = await bellmanFord(_graphBBqMC1c, _startVertexHhRnGqV)
	});
})