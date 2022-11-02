export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuevbUBQHX = 7.838493806325065;
		const _getAllVertices3B0RO6 = () => { return _returnValuevbUBQHX };
		const _graphN7zBsd6 = {
			"getAllVertices": _getAllVertices3B0RO6
	}
		const _returnValueGGlM9us = await topologicalSort(_graphN7zBsd6)
	});
})