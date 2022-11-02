export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphXXoUWbK = true;
		const _startVertexiPa5hlX = undefined;
		const _returnValuelgDovnJ = await bellmanFord(_graphXXoUWbK, _startVertexiPa5hlX)
	});
})