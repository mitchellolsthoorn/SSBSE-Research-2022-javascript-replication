export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueYg4fL8r = "FjbsxY66N0e0pvImugbnxo6yWAgIj28Yoj8Su6Hejd9rDGiCKkQySSYXFqhxpPg9xfzgipLCyQICHFEMto4KI1IjUAq";
		const _reversed7GvcQS = () => { return _returnValueYg4fL8r };
		const _graphwvdUTt = {
			"reverse": _reversed7GvcQS
	}
		const _returnValueWyNWrRH = await stronglyConnectedComponents(_graphwvdUTt)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedpwCmQER = true;
		const _graphgZMz0jY = new Graph(_isDirectedpwCmQER)
		const _returnValueboU4ZYL = await _graphgZMz0jY.getWeight()
		const _returnValuevL0R5Xn = await stronglyConnectedComponents(_graphgZMz0jY)
	});
})