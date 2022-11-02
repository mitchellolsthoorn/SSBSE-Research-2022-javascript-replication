export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphH3Clsol = "4zp7ZWrTyPoyOsTIvGylxIIcaj1vjqYSAMGiWdm3GhuWcVLNgfLIklWew9pBuJVac523gLh7fny81imQw34FbSqS";
		const _returnValuehUIUi92 = await detectUndirectedCycle(_graphH3Clsol)
	});
})