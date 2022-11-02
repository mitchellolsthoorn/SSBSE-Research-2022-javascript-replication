export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuewjLI0hn = "h7hP9ypBtTsa8";
		const _reverseu1Ln1NW = () => { return _returnValuewjLI0hn };
		const _graphQxpKHKx = {
			"reverse": _reverseu1Ln1NW
	}
		const _returnValueQkyjoPd = await stronglyConnectedComponents(_graphQxpKHKx)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedr2isOnY = false;
		const _graphvZ7puqs = new Graph(_isDirectedr2isOnY)
		const _returnValueMpnOuc4 = await _graphvZ7puqs.reverse()
		const _returnValueVoWj7BY = await _graphvZ7puqs.getAllVertices()
		const _returnValueQYoWwxq = await _graphvZ7puqs.getAdjacencyMatrix()
		const _returnValueBr55US5 = await stronglyConnectedComponents(_graphvZ7puqs)
	});
})