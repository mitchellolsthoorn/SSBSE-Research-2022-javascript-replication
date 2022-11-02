export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueLwDE4PG = null;
		const _reverse7mFTDN = () => { return _returnValueLwDE4PG };
		const _graphR4lxUvj = {
			"reverse": _reverse7mFTDN
	}
		const _returnValueJc2mlJM = await stronglyConnectedComponents(_graphR4lxUvj)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedon0UcmE = false;
		const _graphjsaQSZz = new Graph(_isDirectedon0UcmE)
		const _returnValueGGKltIg = await _graphjsaQSZz.getWeight()
		const _returnValuec713Tfz = await stronglyConnectedComponents(_graphjsaQSZz)
	});
})