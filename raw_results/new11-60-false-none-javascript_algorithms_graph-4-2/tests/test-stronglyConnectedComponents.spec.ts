export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _graphbFJoB6M = "Tl6fpBGEUaQ135Xk39bcw0Jkcp0tJFY5ps3QDaNv78nT";
		const _returnValueVxF1Um1 = await stronglyConnectedComponents(_graphbFJoB6M)
	});
})