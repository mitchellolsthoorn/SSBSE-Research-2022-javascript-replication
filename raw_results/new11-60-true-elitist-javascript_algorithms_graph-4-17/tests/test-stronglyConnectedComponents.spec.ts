export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuek4cB4ks = true;
		const _reverseCnp9jbE = () => { return _returnValuek4cB4ks };
		const _graphFrJkys = {
			"reverse": _reverseCnp9jbE
	}
		const _returnValueN3Xx4jV = await stronglyConnectedComponents(_graphFrJkys)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedEF9ZcSM = false;
		const _graphY7M0iEa = new Graph(_isDirectedEF9ZcSM)
		const _returnValuelzEbDYP = await _graphY7M0iEa.getWeight()
		const _returnValueNlo27dN = await stronglyConnectedComponents(_graphY7M0iEa)
	});
})