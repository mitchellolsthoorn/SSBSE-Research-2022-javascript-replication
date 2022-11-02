export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphw0I8EMU = "qDL9gUnqu4fgfgD67ryoP3h1KHFHJH4sYfJtkQ5HN6bfWuSPpUopnpRmtxGYE";
		const _startVertexv0b5eD = 0.7903024339517639;
		const _returnValuehZ32HHL = await bellmanFord(_graphw0I8EMU, _startVertexv0b5eD)
	});
})