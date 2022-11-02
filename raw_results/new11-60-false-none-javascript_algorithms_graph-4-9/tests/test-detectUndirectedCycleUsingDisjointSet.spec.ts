export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuekgKYrcj = "8CuyD2yP2KP1gVXdPEBqgrENbv";
		const _graphNp8LVLR = () => { return _returnValuekgKYrcj };
		const _returnValueGimGuV1 = await detectUndirectedCycleUsingDisjointSet(_graphNp8LVLR)
	});
})