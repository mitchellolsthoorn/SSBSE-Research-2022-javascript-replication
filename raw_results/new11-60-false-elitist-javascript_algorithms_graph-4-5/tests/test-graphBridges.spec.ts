export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuec4BTYbz = "SGNGSQBWr3eOHqPxddws6oprK2PmT39RSLmRVyIuCkhMmbCMktfQfTvFVQFN9db4";
		const _graphzsZv5z = () => { return _returnValuec4BTYbz };
		const _returnValuemnVOOX = await graphBridges(_graphzsZv5z)
	});
})