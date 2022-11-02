export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphccTfZ1T = null;
		const _returnValueVhCipLf = -6.356034669375104;
		const _startVertexDH4JFla = () => { return _returnValueVhCipLf };
		const _returnValueJNmRDR3 = await bellmanFord(_graphccTfZ1T, _startVertexDH4JFla)
	});
})