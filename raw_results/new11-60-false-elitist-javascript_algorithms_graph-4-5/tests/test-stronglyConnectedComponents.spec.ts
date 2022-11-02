export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueXKOftXI = "9yl1lbDWehHHQHNw5wPOVLamcHPyvVdrEz4cxTxnw";
		const _reversec2ke6JO = () => { return _returnValueXKOftXI };
		const _graphZpbL2QA = {
			"reverse": _reversec2ke6JO
	}
		const _returnValueJPTKedV = await stronglyConnectedComponents(_graphZpbL2QA)
	});
})