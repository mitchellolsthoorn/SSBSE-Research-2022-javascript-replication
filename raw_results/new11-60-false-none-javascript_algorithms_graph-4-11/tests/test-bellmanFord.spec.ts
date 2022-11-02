export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValueh6ie5qg = false;
		const _graphJw9MJZ = [_arrayValueh6ie5qg]
		const _startVertexMWTBqww = true;
		const _returnValued5GawJ = await bellmanFord(_graphJw9MJZ, _startVertexMWTBqww)
	});
})