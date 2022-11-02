export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graph0aEfgp = -0.13369320199205958;
		const _startVertexGKhkrt = true;
		const _returnValuelihgWl2 = await bellmanFord(_graph0aEfgp, _startVertexGKhkrt)
	});
})