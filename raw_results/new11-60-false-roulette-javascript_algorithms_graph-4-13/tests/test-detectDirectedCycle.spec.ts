export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphZTrN7YQ = null;
		const _returnValueWfuS05f = await detectDirectedCycle(_graphZTrN7YQ)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedLrENbqn = true;
		const _graphpTh4ap2 = new Graph(_isDirectedLrENbqn)
		const _returnValueG5BVVMK = await _graphpTh4ap2.getAdjacencyMatrix()
		const _returnValueHvxBkgl = await detectDirectedCycle(_graphpTh4ap2)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedNN1H1s3 = true;
		const _graphyW8yuPY = new Graph(_isDirectedNN1H1s3)
		const _returnValuekJ975D0 = await _graphyW8yuPY.reverse()
		const _returnValue0o7qT3 = await _graphyW8yuPY.toString()
		const _returnValueZvBHops = await _graphyW8yuPY.toString()
		const _returnValueDnGLs1C = undefined;
		const _getKeyH0oG9OA = () => { return _returnValueDnGLs1C };
		const _newVertexH6RE5BK = {
			"getKey": _getKeyH0oG9OA
	}
		const _returnValueYyFwAIX = await _graphyW8yuPY.addVertex(_newVertexH6RE5BK)
		const _returnValueWbRPzfX = await detectDirectedCycle(_graphyW8yuPY)
	});
})