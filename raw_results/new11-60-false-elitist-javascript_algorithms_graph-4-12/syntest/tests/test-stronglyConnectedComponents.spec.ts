export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueI8MghPB = undefined;
		const _reverseKWavhTm = () => { return _returnValueI8MghPB };
		const _graphUbw3KQ0 = {
			"reverse": _reverseKWavhTm
	}
		const _returnValueIyZQSaY = await stronglyConnectedComponents(_graphUbw3KQ0)
	});
})