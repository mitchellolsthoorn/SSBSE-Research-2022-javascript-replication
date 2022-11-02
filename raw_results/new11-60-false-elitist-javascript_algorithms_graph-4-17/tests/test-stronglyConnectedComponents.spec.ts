export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueWhZGdSF = true;
		const _reverseVNXAiq3 = () => { return _returnValueWhZGdSF };
		const _graphpVC8zMK = {
			"reverse": _reverseVNXAiq3
	}
		const _returnValueBLeGtJ7 = await stronglyConnectedComponents(_graphpVC8zMK)
	});
})