export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphXGzxOqv = "uryhk6RgiTx3UiQWjP0niV4yBQsgxVxgvHRwCbiKu6EYAWfjBQKGtat6mTrsPXye3c3";
		const _returnValueb2gdNFt = await topologicalSort(_graphXGzxOqv)
	});
})