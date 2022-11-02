export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueG7LimV = 1.0942818553541205;
		const _graphSi4fiRg = () => { return _returnValueG7LimV };
		const _returnValueO4dT6HF = await detectUndirectedCycle(_graphSi4fiRg)
	});
})