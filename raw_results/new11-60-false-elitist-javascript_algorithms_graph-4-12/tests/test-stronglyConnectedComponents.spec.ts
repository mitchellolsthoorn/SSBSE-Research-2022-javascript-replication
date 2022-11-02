export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuepn3PTJS = -4.00482319040843;
		const _reversepd1eHIh = () => { return _returnValuepn3PTJS };
		const _graphdHjaIWS = {
			"reverse": _reversepd1eHIh
	}
		const _returnValueGmpjCZO = await stronglyConnectedComponents(_graphdHjaIWS)
	});
})