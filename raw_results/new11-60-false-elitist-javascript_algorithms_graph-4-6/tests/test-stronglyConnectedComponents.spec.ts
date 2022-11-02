export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueD7cd64T = undefined;
		const _reverseq6i6StI = () => { return _returnValueD7cd64T };
		const _graphINDEoXw = {
			"reverse": _reverseq6i6StI
	}
		const _returnValuegD6Yz5U = await stronglyConnectedComponents(_graphINDEoXw)
	});
})