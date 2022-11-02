export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueQYwqt3 = false;
		const _reverseP9CcKNW = () => { return _returnValueQYwqt3 };
		const _graphkkVSRyp = {
			"reverse": _reverseP9CcKNW
	}
		const _returnValueFHqDmn = await stronglyConnectedComponents(_graphkkVSRyp)
	});
})