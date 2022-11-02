export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueNLVtQ6P = {
		
	}
		const _reverseUGMcZQM = () => { return _returnValueNLVtQ6P };
		const _graphZmUvx8u = {
			"reverse": _reverseUGMcZQM
	}
		const _returnValuecWmuUCh = await stronglyConnectedComponents(_graphZmUvx8u)
	});
})