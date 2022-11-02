export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _graphEKqyFAw = "VpdSThVYguruuv4BEMUdKcdwUWEYyH7hEQogOSM8XvofahXFTBvFyqBFZi5nSTvwX5hNFR1SBb2e";
		const _returnValueBTZiwl4 = await articulationPoints(_graphEKqyFAw)
	});
})