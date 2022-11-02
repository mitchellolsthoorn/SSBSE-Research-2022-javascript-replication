export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueMjCOwa7 = false;
		const _reversefM3yNKr = () => { return _returnValueMjCOwa7 };
		const _graphxRd3oeq = {
			"reverse": _reversefM3yNKr
	}
		const _returnValueqyqOhbB = await stronglyConnectedComponents(_graphxRd3oeq)
	});
})