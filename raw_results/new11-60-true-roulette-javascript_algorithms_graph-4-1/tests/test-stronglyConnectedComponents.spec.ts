export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueWYUiQmF = undefined;
		const _returnValueh43C3n = [_arrayValueWYUiQmF]
		const _returnValuejAIaeg = () => { return _returnValueh43C3n };
		const _graphW9viifB = () => { return _returnValuejAIaeg };
		const _returnValuej8RFd97 = await stronglyConnectedComponents(_graphW9viifB)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedK1EC6jo = false;
		const _graphVADSYf1 = new Graph(_isDirectedK1EC6jo)
		const _returnValueuOPKMV = await _graphVADSYf1.getAllVertices()
		const _returnValueN6OItZs = await stronglyConnectedComponents(_graphVADSYf1)
	});
})