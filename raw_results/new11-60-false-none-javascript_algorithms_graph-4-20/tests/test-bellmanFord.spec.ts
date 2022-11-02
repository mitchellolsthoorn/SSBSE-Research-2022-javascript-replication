export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphqYFs1Zl = -6.427290340519397;
		const _startVertexcfWSCKR = undefined;
		const _returnValue3jroLq = await bellmanFord(_graphqYFs1Zl, _startVertexcfWSCKR)
	});
})