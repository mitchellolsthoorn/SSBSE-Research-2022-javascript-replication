export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValuePMXzsC7 = false;
		const _arrayValuetyS0pf = "fq5DKBlkWJLTp8palCRwxfD3ba1I4lQM7m08KfnZafvkwvFdd6A5WddGH";
		const _arrayValueADMTvaJ = undefined;
		const _arrayValueEyCN6c6 = -0.4104938650367025;
		const _graphKXYBtp1 = [_arrayValuePMXzsC7, _arrayValuetyS0pf, _arrayValueADMTvaJ, _arrayValueEyCN6c6]
		const _returnValuerYP4Wvy = await detectUndirectedCycle(_graphKXYBtp1)
	});
})