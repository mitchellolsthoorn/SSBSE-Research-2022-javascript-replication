export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueb7hs7IT = true;
		const _reversecmcFw9e = () => { return _returnValueb7hs7IT };
		const _graphaGcFG1 = {
			"reverse": _reversecmcFw9e
	}
		const _returnValuedHIW1kL = await stronglyConnectedComponents(_graphaGcFG1)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedtf0VwAX = true;
		const _graphaPYy54u = new Graph(_isDirectedtf0VwAX)
		const _returnValuehrSvF5 = await _graphaPYy54u.getWeight()
		const _returnValueHtO9lX = await _graphaPYy54u.getVerticesIndices()
		const _returnValuekLxbkJW = await stronglyConnectedComponents(_graphaPYy54u)
	});
})