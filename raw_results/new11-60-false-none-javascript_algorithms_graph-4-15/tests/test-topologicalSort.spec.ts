export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphZh2W1XH = "ZUIrvK7TmqMyJHtPAG9UjxEKvKHQ7UnqPpS5NFKMfH8fpe3JT15pFeZiZ8g0SGOJ7uYhVn7d5bXeYlgaGq9W6JCsQ4Fdf";
		const _returnValuesoyJTc2 = await topologicalSort(_graphZh2W1XH)
	});
})