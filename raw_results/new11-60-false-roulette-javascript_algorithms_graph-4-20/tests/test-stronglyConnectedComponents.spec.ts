export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _graphkF8BXS = "pRcrh7r8toIyTFYue5PVJXixLr1tFJ6PEDy1zA5tAHD69hCPT";
		const _returnValueR2e7eWi = await stronglyConnectedComponents(_graphkF8BXS)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedGGotDf8 = false;
		const _graphzmwi1zw = new Graph(_isDirectedGGotDf8)
		const _returnValueKRuF2jF = await _graphzmwi1zw.toString()
		const _returnValuelwscBnl = await _graphzmwi1zw.getAdjacencyMatrix()
		const _returnValueq6yeClq = await _graphzmwi1zw.reverse()
		const _returnValueIYj3jl = await _graphzmwi1zw.getAllEdges()
		const _returnValueEQDTxZ = await stronglyConnectedComponents(_graphzmwi1zw)
	});
})