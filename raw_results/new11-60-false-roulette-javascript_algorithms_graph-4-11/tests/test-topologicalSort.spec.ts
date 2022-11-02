export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphfCGZ02j = "CeSf60G1uM1MGsKKcuIO47and0IxhtOjMKMVmJyMPACFqdIP92Ux2YsNCNCYHFvJ1TG1KRM7bH0G";
		const _returnValueymw4qus = await topologicalSort(_graphfCGZ02j)
	});
})