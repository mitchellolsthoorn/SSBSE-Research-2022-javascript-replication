export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueJFpo74s = 7.814624762672928;
		const _reversenv4lvch = () => { return _returnValueJFpo74s };
		const _graphnK7yYe = {
			"reverse": _reversenv4lvch
	}
		const _returnValuejLbq8P5 = await stronglyConnectedComponents(_graphnK7yYe)
	});
})