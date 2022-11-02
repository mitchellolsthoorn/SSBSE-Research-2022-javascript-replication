export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphvNGWfYB = "LKYWhYSP2kUimLA4eWGpEauEnNUuFGyjMtC6itjwvm7VqMJowlL5TycL0lxTGmcSwqoB399si9C6VFVZTBrTPtUA";
		const _returnValuevNhmAmV = await bfTravellingSalesman(_graphvNGWfYB)
	});
})