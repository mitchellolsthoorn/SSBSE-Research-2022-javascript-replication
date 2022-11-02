export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphkw4Ik2k = "LM3wwHBhUG6wbnTbjYwBNJyf9OVENwHcNY4yCJaNUzLUR2kJOcQT78CXAuPvlgQ7eAgng6ufMHe47B2kabadmQPF2yf3g2JjG";
		const _returnValueJ1ZgoXs = await topologicalSort(_graphkw4Ik2k)
	});
})