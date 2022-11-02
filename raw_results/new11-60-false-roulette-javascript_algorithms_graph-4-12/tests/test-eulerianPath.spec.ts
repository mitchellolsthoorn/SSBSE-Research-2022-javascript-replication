export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphVMu3qb = -8.079777025021961;
		const _returnValueHmqBY2E = await eulerianPath(_graphVMu3qb)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedtJuhfCv = true;
		const _graphugVIZ36 = new Graph(_isDirectedtJuhfCv)
		const _vertexKeylk4ummp = 3.626951949424388;
		const _returnValuehNHlYG = await _graphugVIZ36.getVertexByKey(_vertexKeylk4ummp)
		const _returnValueBzLKR18 = await _graphugVIZ36.getAllEdges()
		const _returnValueUieqQqx = await _graphugVIZ36.getAllVertices()
		const _returnValueXkL9fL = await eulerianPath(_graphugVIZ36)
	});
})