export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphBnZOU5W = "hRqw17zCOtJnvBbFOIJCnsofsDz2oE3vXRoS";
		const _returnValuetydlMsW = await detectUndirectedCycle(_graphBnZOU5W)
	});
})