export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueyJAVWGM = -0.3733422150306076;
		const _graphQM6Ts5D = () => { return _returnValueyJAVWGM };
		const _returnValueXDKABBX = await detectUndirectedCycle(_graphQM6Ts5D)
	});
})