export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphmaY9iqr = "E7rxnqrpb43KI4dvC1YqM5XPxdynzyPdIpwMbkKHdPw";
		const _startVertexvNnTxTN = {
		
	}
		const _returnValuejejCeF2 = await bellmanFord(_graphmaY9iqr, _startVertexvNnTxTN)
	});
})