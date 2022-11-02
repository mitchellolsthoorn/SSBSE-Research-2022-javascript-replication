export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _graphzqZQaJz = false;
		const _returnValueJmSZZJl = await stronglyConnectedComponents(_graphzqZQaJz)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedJLiNQI7 = false;
		const _graphRUOh4rK = new Graph(_isDirectedJLiNQI7)
		const _returnValueCxTdKXN = await _graphRUOh4rK.toString()
		const _returnValuekjd6beF = await stronglyConnectedComponents(_graphRUOh4rK)
	});
})