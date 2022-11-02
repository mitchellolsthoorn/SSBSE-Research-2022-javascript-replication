export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphNnNcqt7 = undefined;
		const _startVertexNltDPSo = 4.41527681073492;
		const _returnValuepoZR8rN = await bellmanFord(_graphNnNcqt7, _startVertexNltDPSo)
	});
})