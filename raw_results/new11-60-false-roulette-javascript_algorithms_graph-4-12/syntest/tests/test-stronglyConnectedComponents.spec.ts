export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueZWGcYxq = true;
		const _arrayValueADZo1mq = undefined;
		const _graphYEroGlX = [_arrayValueZWGcYxq, _arrayValueADZo1mq]
		const _returnValuePlMUUgP = await stronglyConnectedComponents(_graphYEroGlX)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedtIPVgnY = true;
		const _graphcH0FjeW = new Graph(_isDirectedtIPVgnY)
		const _returnValueV98sZxP = await _graphcH0FjeW.getVerticesIndices()
		const _returnValuezQ3FNL = await stronglyConnectedComponents(_graphcH0FjeW)
	});
})