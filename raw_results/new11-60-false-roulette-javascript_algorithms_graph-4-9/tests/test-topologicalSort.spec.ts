export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphfkd8AU0 = "66EbD5eTSn2fOYLqwYivpjltZHr6xidq8IqBX8Vasb2HQj1eT13rVaC";
		const _returnValueAKQPdHP = await topologicalSort(_graphfkd8AU0)
	});
})