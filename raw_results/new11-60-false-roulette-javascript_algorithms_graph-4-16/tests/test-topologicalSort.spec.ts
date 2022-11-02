export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphYufFyGW = "pwKpKcrPQNY62aTdXhYEbjCQYqAkF6AbD6Vl6ctPkmNyfyllJLAOgqpbAQf3Y3z5AyuaFxN4gQcIl8uy8nz61W3YGpb";
		const _returnValueve2wzkC = await topologicalSort(_graphYufFyGW)
	});
})