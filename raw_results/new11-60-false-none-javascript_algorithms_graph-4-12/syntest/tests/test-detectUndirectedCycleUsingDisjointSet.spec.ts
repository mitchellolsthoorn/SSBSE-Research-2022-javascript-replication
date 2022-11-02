export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphXZe6fk3 = "wjJ97Jpk7UAK2Y3W1gX6xRTUNNHyVIegwU8rLWG662Wzmc";
		const _returnValueqwUxYQc = await detectUndirectedCycleUsingDisjointSet(_graphXZe6fk3)
	});
})