export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphHsE85I = "21Xssigy1kGpNetsYK3O48aQMplG405wvAXjdFt64MerkFJMDypJ35DPN";
		const _returnValueGVTFpTP = await detectUndirectedCycle(_graphHsE85I)
	});
})