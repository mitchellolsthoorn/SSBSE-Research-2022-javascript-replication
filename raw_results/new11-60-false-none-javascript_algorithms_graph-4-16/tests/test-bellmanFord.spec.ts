export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphNse03rA = "Pc1bVqbGnaBKfjrYbq1cGiS2TKtou6w5";
		const _startVertexz0BXTEj = {
		
	}
		const _returnValueHZRovZD = await bellmanFord(_graphNse03rA, _startVertexz0BXTEj)
	});
})