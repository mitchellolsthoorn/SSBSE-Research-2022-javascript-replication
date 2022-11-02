export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValuevb1nRWl = undefined;
		const _graphmW8QeUl = [_arrayValuevb1nRWl]
		const _returnValueuMyDjiN = await eulerianPath(_graphmW8QeUl)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedT13PPQu = true;
		const _graphV9b2WwU = new Graph(_isDirectedT13PPQu)
		const _returnValuehqYJ8hE = await _graphV9b2WwU.getAllVertices()
		const _returnValuecRL5JQ1 = await _graphV9b2WwU.reverse()
		const _returnValueZ3aCBWg = await _graphV9b2WwU.getAllEdges()
		const _returnValueW0kLrI3 = await eulerianPath(_graphV9b2WwU)
	});
})