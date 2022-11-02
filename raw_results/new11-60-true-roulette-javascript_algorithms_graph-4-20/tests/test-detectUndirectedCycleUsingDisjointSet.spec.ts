export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValuemB62Gem = true;
		const _arrayValueOhPwHw3 = [_arrayValuemB62Gem]
		const _arrayValueLQyGiMM = false;
		const _arrayValueLRV527w = "CMCQZU1pgAVIg3JB2UUSLRPrR4CszWaabiVulwmydFOgoOh6BPnH1h5Y2qCf7kP3b32kxPFsd2YPdsSH7lU98djUkZbmiilcI";
		const _arrayValueJzjDinp = null;
		const _arrayValueHvb2Wr6 = {
		
	}
		const _arrayValueo87brNN = "SIymVDlwOKIGtXjx2K4vIP85oPok5PjrxVKTD7VGT1rDHjnQsU1QxKE858";
		const _arrayValuekqxKOOw = [_arrayValueJzjDinp, _arrayValueHvb2Wr6, _arrayValueo87brNN]
		const _arrayValueMMG9myC = [_arrayValueLRV527w, _arrayValuekqxKOOw]
		const _arrayValueszk9iUY = true;
		const _graphBZOi08T = [_arrayValueOhPwHw3, _arrayValueLQyGiMM, _arrayValueMMG9myC, _arrayValueszk9iUY]
		const _returnValuetW7Oe3f = await detectUndirectedCycleUsingDisjointSet(_graphBZOi08T)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirecteds9DHLT8 = false;
		const _graphXldJMye = new Graph(_isDirecteds9DHLT8)
		const _returnValueqlsMjQ = await _graphXldJMye.getAdjacencyMatrix()
		const _returnValueM2cTwkB = await detectUndirectedCycleUsingDisjointSet(_graphXldJMye)
	});
})