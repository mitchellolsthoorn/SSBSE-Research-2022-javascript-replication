export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueQGFqzr3 = "2mpm8urUsfjxEvpDh";
		const _graphWtCSRRb = () => { return _returnValueQGFqzr3 };
		const _returnValueSIz0WeX = await detectUndirectedCycle(_graphWtCSRRb)
	});
})