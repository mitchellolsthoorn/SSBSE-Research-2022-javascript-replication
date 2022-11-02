export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueqZTT3x = "SINF74vcvvZOOGozMGz8PczqUsWVYuwPi3Bf5Kxgt3ywtfbeMj6oB";
		const _reverseeM3bZji = () => { return _returnValueqZTT3x };
		const _graphf7ndwYW = {
			"reverse": _reverseeM3bZji
	}
		const _returnValueuJI6fjD = await stronglyConnectedComponents(_graphf7ndwYW)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedxct5TA7 = false;
		const _graphVvaQfth = new Graph(_isDirectedxct5TA7)
		const _returnValue4unSpg = await _graphVvaQfth.getWeight()
		const _returnValuerefMNfl = await _graphVvaQfth.getVerticesIndices()
		const _returnValueuY3DuIO = await _graphVvaQfth.getAdjacencyMatrix()
		const _returnValuewjPoE4D = await _graphVvaQfth.getAllVertices()
		const _returnValueMHA5dyw = await stronglyConnectedComponents(_graphVvaQfth)
	});
})