export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuePmnJxe = undefined;
		const _returnValueTLLM9pS = () => { return _returnValuePmnJxe };
		const _reverseVthV6eA = () => { return _returnValueTLLM9pS };
		const _graphbFQbS7n = {
			"reverse": _reverseVthV6eA
	}
		const _returnValuepI4Dj5b = await stronglyConnectedComponents(_graphbFQbS7n)
	});
})