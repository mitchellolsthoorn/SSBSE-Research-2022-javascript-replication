export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphPZYrvjK = "kkygxnpcQ7F5KAswRTGzUOKkMDla4x3qkj1zbSobL5";
		const _returnValueJ7gtSx8 = await detectUndirectedCycle(_graphPZYrvjK)
	});
})