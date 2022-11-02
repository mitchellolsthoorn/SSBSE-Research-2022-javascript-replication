export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueFyZBqzD = undefined;
		const _graphf22mZQI = () => { return _returnValueFyZBqzD };
		const _returnValueKRCya7 = await detectUndirectedCycle(_graphf22mZQI)
	});
})