export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValue4GWjrO = null;
		const _reverseDLo60p = () => { return _returnValue4GWjrO };
		const _graphp5jJFgb = {
			"reverse": _reverseDLo60p
	}
		const _returnValueKvCt7Ea = await stronglyConnectedComponents(_graphp5jJFgb)
	});
})