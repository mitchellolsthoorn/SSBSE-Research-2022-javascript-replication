export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValuecgxsuc2 = []
		const _returnValuet5y4q2c = true;
		const _arrayValuetToSvUp = () => { return _returnValuet5y4q2c };
		const _arrayValueXTxELVs = "tEj6lmQ2MtbzjNbYuZXAYYBnRL5nH7Y6f0pVrlYLcepUjorpUt9";
		const _arrayValuecuI6VO8 = null;
		const _graphEyCFXM4 = [_arrayValuecgxsuc2, _arrayValuetToSvUp, _arrayValueXTxELVs, _arrayValuecuI6VO8]
		const _returnValueZ3IriSA = await stronglyConnectedComponents(_graphEyCFXM4)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedkziUlR7 = true;
		const _graphstlFtB8 = new Graph(_isDirectedkziUlR7)
		const _returnValuetRD4K0 = await _graphstlFtB8.reverse()
		const _returnValueGb2vhtB = await _graphstlFtB8.reverse()
		const _returnValueDN3H7r = await stronglyConnectedComponents(_graphstlFtB8)
	});
})