export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueO1zbhHX = false;
		const _getAllVerticesd21Yc0 = () => { return _returnValueO1zbhHX };
		const _graphr8yO0yn = {
			"getAllVertices": _getAllVerticesd21Yc0
	}
		const _returnValuezJS028G = await detectDirectedCycle(_graphr8yO0yn)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueAqZdjh = []
		const _getAllVerticesgCrwgHP = () => { return _returnValueAqZdjh };
		const _graphlpTlB12 = {
			"getAllVertices": _getAllVerticesgCrwgHP
	}
		const _returnValueeL2dcEf = await detectDirectedCycle(_graphlpTlB12)
	});
})