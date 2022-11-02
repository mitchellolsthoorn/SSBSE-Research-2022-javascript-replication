export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphhYrhx26 = "hl1pvr4yZ7WV4R5LIS842IOoJX4V6xkVeMTL2xQwOCUhQ7uynM1LGWd";
		const _returnValueHeirNs = await floydWarshall(_graphhYrhx26)
	});
})