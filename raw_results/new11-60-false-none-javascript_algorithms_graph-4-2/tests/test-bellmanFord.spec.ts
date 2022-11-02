export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphC6gwM9 = "ivQGY2aVHthIkaxBBgF2afV3bukoitQ";
		const _startVertexTgkc9zm = -0.6872616357113035;
		const _returnValueyNFLoGI = await bellmanFord(_graphC6gwM9, _startVertexTgkc9zm)
	});
})