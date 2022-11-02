export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuepbEAbDA = undefined;
		const _reversezZWyamv = () => { return _returnValuepbEAbDA };
		const _graphI9Oskc = {
			"reverse": _reversezZWyamv
	}
		const _returnValueYv9gv09 = await stronglyConnectedComponents(_graphI9Oskc)
	});
})