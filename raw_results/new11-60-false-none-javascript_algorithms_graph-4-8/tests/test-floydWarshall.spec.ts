export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphKQTKSA = "Fo7ExC7LpBWaWJkleD2FFesqkj2";
		const _returnValueWA5KgD = await floydWarshall(_graphKQTKSA)
	});
})