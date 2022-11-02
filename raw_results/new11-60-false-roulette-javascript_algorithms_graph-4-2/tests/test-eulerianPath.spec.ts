export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphhhRDRAi = []
		const _returnValueAXqU6Y3 = await eulerianPath(_graphhhRDRAi)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedeQTLEzy = false;
		const _graphQK3Imqp = new Graph(_isDirectedeQTLEzy)
		const _returnValueBKEeI0t = await _graphQK3Imqp.getAdjacencyMatrix()
		const _returnValueiOLGFf8 = await eulerianPath(_graphQK3Imqp)
	});
})