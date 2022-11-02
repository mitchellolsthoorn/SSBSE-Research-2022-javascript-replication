export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphXbOmgW = "odMehitBVTQAP3qInOlZWHClgUh8Fie1Jj9QnOKCfRDSa3N8u2XSTUoAvJOicMxkNdl4ypFiF8";
		const _returnValueNBZLGOR = await eulerianPath(_graphXbOmgW)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedCFPGTVg = true;
		const _graphkJ8lIl4 = new Graph(_isDirectedCFPGTVg)
		const _returnValuehCscZk8 = await _graphkJ8lIl4.reverse()
		const _returnValued62fj6P = await _graphkJ8lIl4.getVerticesIndices()
		const _returnValueX42BMch = await eulerianPath(_graphkJ8lIl4)
	});
})