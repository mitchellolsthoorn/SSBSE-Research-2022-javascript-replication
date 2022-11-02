export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueQ4FhCe9 = false;
		const _graphcE5L8rR = () => { return _returnValueQ4FhCe9 };
		const _returnValuedO34wDa = await stronglyConnectedComponents(_graphcE5L8rR)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedHsIWEw = false;
		const _graphQsfMQ10 = new Graph(_isDirectedHsIWEw)
		const _vertexKeyYe6hCbg = undefined;
		const _returnValueQiJwN2 = await _graphQsfMQ10.getVertexByKey(_vertexKeyYe6hCbg)
		const _returnValuer9EcQMR = await _graphQsfMQ10.getAllVertices()
		const _returnValuePzESGan = await stronglyConnectedComponents(_graphQsfMQ10)
	});
})