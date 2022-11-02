export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueM7kUATK = undefined;
		const _graphGEM4tU4 = () => { return _returnValueM7kUATK };
		const _returnValuetbMcBnN = await detectUndirectedCycleUsingDisjointSet(_graphGEM4tU4)
	});
})