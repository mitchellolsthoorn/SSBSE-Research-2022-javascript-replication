export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphhkAUWBI = 6.141196092802481;
		const _startVertexNXl0RYJ = {
		
	}
		const _returnValueIc6Wj0u = await bellmanFord(_graphhkAUWBI, _startVertexNXl0RYJ)
	});
})