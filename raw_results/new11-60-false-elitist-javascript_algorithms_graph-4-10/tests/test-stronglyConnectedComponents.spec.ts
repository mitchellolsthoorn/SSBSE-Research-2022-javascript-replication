export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuemAX9TCt = false;
		const _reverseOzRvoCl = () => { return _returnValuemAX9TCt };
		const _graphy7DnLnX = {
			"reverse": _reverseOzRvoCl
	}
		const _returnValueYtBlEvL = await stronglyConnectedComponents(_graphy7DnLnX)
	});
})